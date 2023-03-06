import time

from flask import Blueprint
from flask import flash
from flask import g
from flask import redirect
from flask import render_template
from flask import request
from flask import url_for
from flask import session
from flask import jsonify
from werkzeug.exceptions import abort

from flaskr.auth import login_required
from flaskr.db import get_db

from datetime import datetime
from datetime import timedelta
import sqlite3
import json

from flaskr.data_processing_for_frontend import get_data_for_chart, get_count_of_redirected_requests_of_court, \
    get_average_rating_by_users, get_average_time_of_operator_reaction, get_average_time_of_operator_dialogue, \
    get_count_of_requests

bp = Blueprint("blog", __name__)


@bp.route("/")
def index():
    # db = get_db()
    # posts = db.execute(
    #     "SELECT p.id, title, body, created, author_id, username"
    #     " FROM post p JOIN user u ON p.author_id = u.id"
    #     " ORDER BY created DESC"
    # ).fetchall()
    #return render_template("auth/login2", posts=posts)
    return redirect(url_for("auth.login2"))


def get_post(id, check_author=True):
    post = (
        get_db()
        .execute(
            "SELECT p.id, title, body, created, author_id, username"
            " FROM post p JOIN user u ON p.author_id = u.id"
            " WHERE p.id = ?",
            (id,),
        )
        .fetchone()
    )

    if post is None:
        abort(404, f"Post id {id} doesn't exist.")

    if check_author and post["author_id"] != g.user["id"]:
        abort(403)

    return post


@bp.route("/index2")
def index2(court_id=""):
    level_link = []
    db = get_db()
    if court_id:
        user_id = court_id
        table_name = db.execute("SELECT login_name FROM user WHERE id=?", (court_id, )).fetchall()[0][0]
        print("DAA", table_name)
    else:
        user_id = session["user_id"]
        if g.user['level'] in ["1", "2"]:
            level_link = ["blog.index3"]
        table_name = g.user['login_name']

    data = {"success_sessions": None,
            "failed_sessions": None}
    data_for_charts = get_data_for_chart(user_id=user_id)

    analytics_data = dict()
    try:
        analytics_data["count_of_requests"] = get_count_of_redirected_requests_of_court(user_id)
        analytics_data["get_average_rating_by_users"] = get_average_rating_by_users(user_id)
        analytics_data["average_time_of_operator_reaction"] = get_average_time_of_operator_reaction(user_id)
        analytics_data["average_time_of_operator_dialogue"] = get_average_time_of_operator_dialogue(user_id)
        analytics_data["count_of_redirected_requests"] = get_count_of_requests(user_id)
    except:
        analytics_data["count_of_redirected_requests"] = "0"
        analytics_data["get_average_rating_by_users"] = "0"
        analytics_data["average_time_of_operator_reaction"] = "0"
        analytics_data["average_time_of_operator_dialogue"] = "0"
        analytics_data["count_of_redirected_requests"] = "0"

    data["success_sessions"] = data_for_charts["success_sessions"]
    data["failed_sessions"] = data_for_charts["failed_sessions"]

    data = json.dumps(data)

    return render_template("blog/index2.html", analytics_data=analytics_data, data=data, level_link=level_link,
                           table_name=table_name)


@bp.route("/index3")
def index3():
    user_id = g.user['id']
    user_level = g.user['level']

    conn = sqlite3.connect('../court-bot/database/db')
    cursor = conn.cursor()

    if user_level == '2':
        court_for_view = list(cursor.execute("SELECT id, name FROM courts WHERE id > 0"))
        conn.commit()
        conn.close()
    elif user_level == '1':
        court_for_view = list(cursor.execute("SELECT id, name FROM courts WHERE id_of_supervising_court = ?", (user_id, )))
        conn.commit()
        conn.close()
    else:
        return redirect(url_for("blog.index2"))

    return render_template("blog/index3.html", court_for_view=court_for_view)


@bp.route("/courtstat<int:court_id>", methods=("GET", "POST"))
@login_required
def observer_mode(court_id):
    court_id = court_id
    return index2(court_id=court_id)


@bp.route("/create", methods=("GET", "POST"))
@login_required
def create():
    if request.method == "POST":
        title = request.form["title"]
        body = request.form["body"]
        error = None

        if not title:
            error = "Title is required."

        if error is not None:
            flash(error)
        else:
            db = get_db()
            db.execute(
                "INSERT INTO post (title, body, author_id) VALUES (?, ?, ?)",
                (title, body, g.user["id"]),
            )
            db.commit()
            return redirect(url_for("blog.index"))

    return render_template("blog/create.html")


# API TODO make api readble for any developer that will implement it (for debug, documentation)
# TODO add auth token check
@bp.route('/api/personal_notification', methods=['POST'])
def personal_notification():
    if not request.json:
        abort(400)
    notification = {
        'user_xin': request.json['user_xin'],
        'notification_text': request.json['notification_text'],
        'auth_token': request.json['auth_token'],
    }

    conn = sqlite3.connect('../court-bot/database/db')
    cursor = conn.cursor()
    cursor.execute("INSERT into notifications VALUES (NULL, ?, ?, 0)", (request.json['notification_text'], request.json['user_xin'], ))
    conn.commit()
    conn.close()

    return jsonify({'notification': notification}), 201

# TODO add creation_time, notification_type and departure_time in 'notifications' table
@bp.route('/api/broadcast_notification', methods=['POST'])
def broadcast_notification():
    if not request.json:
        abort(400)
    notification = {
        'notification_text': request.json['notification_text'],
        'auth_token': request.json['auth_token'],
    }

    conn = sqlite3.connect('../court-bot/database/db')
    cursor = conn.cursor()
    cursor.execute("INSERT into notifications VALUES (NULL, ?, 1, 0)", (request.json['notification_text'], ))
    conn.commit()
    conn.close()

    return jsonify({'notification': notification}), 201
