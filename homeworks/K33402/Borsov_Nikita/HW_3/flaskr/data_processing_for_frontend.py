import sqlite3
from datetime import datetime, timedelta
import json


def get_data_for_chart(user_id):
    chart_data = {"success_sessions": {"dates": [], "points": []},
            "failed_sessions": {"dates": [], "points": []}}

    conn = sqlite3.connect('../court-bot/database/db')  # ../bot_module/database/db
    cursor = conn.cursor()

    if user_id == 0:
        print("yep")
        tg_bot_success_sessions_of_current_court = list(cursor.execute(
            "SELECT initiate_timestamp FROM sessions WHERE (status='finished_by_operator' or status='finished_by_user')"))
        tg_bot_failed_sessions_of_current_court = list(cursor.execute(
            "SELECT initiate_timestamp FROM sessions WHERE status!='finished_by_operator' and status!='finished_by_user'"))
    else:
        tg_bot_success_sessions_of_current_court = list(cursor.execute(
            "SELECT initiate_timestamp FROM sessions WHERE court_id=? and (status='finished_by_operator' or status='finished_by_user')",
            (user_id,)))
        tg_bot_failed_sessions_of_current_court = list(cursor.execute(
            "SELECT initiate_timestamp FROM sessions WHERE court_id=? and status!='finished_by_operator' and status!='finished_by_user'",
            (user_id,)))
    conn.commit()
    conn.close()

    tg_bot_success_sessions_of_current_court = [str(datetime.fromtimestamp(i[0]).date()) for i in
                                                tg_bot_success_sessions_of_current_court]
    tg_bot_failed_sessions_of_current_court = [str(datetime.fromtimestamp(i[0]).date()) for i in
                                               tg_bot_failed_sessions_of_current_court]
    tg_bot_success_sessions_of_current_court = {f"{i}": tg_bot_success_sessions_of_current_court.count(i) for i in
                                                set(tg_bot_success_sessions_of_current_court)}
    tg_bot_failed_sessions_of_current_court = {f"{i}": tg_bot_failed_sessions_of_current_court.count(i) for i in
                                               set(tg_bot_failed_sessions_of_current_court)}

    if tg_bot_failed_sessions_of_current_court and tg_bot_success_sessions_of_current_court:
        first_success_session = min(tg_bot_success_sessions_of_current_court.keys())
        first_failed_session = min(tg_bot_failed_sessions_of_current_court.keys())
        general_min_date = datetime.strptime(min([first_failed_session, first_success_session]), '%Y-%m-%d').date()
        general_max_date = datetime.now().date()
    elif tg_bot_success_sessions_of_current_court and not tg_bot_failed_sessions_of_current_court:
        general_min_date = datetime.strptime(min(tg_bot_success_sessions_of_current_court.keys()), '%Y-%m-%d').date()
        general_max_date = datetime.now().date()
    elif tg_bot_failed_sessions_of_current_court and not tg_bot_success_sessions_of_current_court:
        general_min_date = datetime.strptime(min(tg_bot_failed_sessions_of_current_court.keys()), '%Y-%m-%d').date()
        general_max_date = datetime.now().date()
    else:
        general_min_date = (datetime.now() - timedelta(days=30)).date()
        general_max_date = datetime.now().date()
    # generating list with zero in empty segments (dates without data)
    zero_tg_bot_success_sessions_dates = []
    zero_tg_bot_success_sessions_points = []
    zero_tg_bot_failed_sessions_dates = []
    zero_tg_bot_failed_sessions_points = []

    iterating_date = general_min_date
    while iterating_date <= general_max_date:
        if iterating_date.strftime("%Y-%m-%d") not in tg_bot_failed_sessions_of_current_court:
            zero_tg_bot_failed_sessions_dates.append(iterating_date.strftime('%Y-%m-%d'))
            zero_tg_bot_failed_sessions_points.append(0)
        else:
            zero_tg_bot_failed_sessions_dates.append(iterating_date.strftime('%Y-%m-%d'))
            zero_tg_bot_failed_sessions_points.append(
                tg_bot_failed_sessions_of_current_court[iterating_date.strftime('%Y-%m-%d')])
        if iterating_date.strftime("%Y-%m-%d") not in tg_bot_success_sessions_of_current_court:
            zero_tg_bot_success_sessions_dates.append(iterating_date.strftime('%Y-%m-%d'))
            zero_tg_bot_success_sessions_points.append(0)
        else:
            zero_tg_bot_success_sessions_dates.append(iterating_date.strftime('%Y-%m-%d'))
            zero_tg_bot_success_sessions_points.append(
                tg_bot_success_sessions_of_current_court[iterating_date.strftime('%Y-%m-%d')])

        iterating_date = iterating_date + timedelta(days=1)

    chart_data["success_sessions"]["dates"] = zero_tg_bot_success_sessions_dates
    chart_data["success_sessions"]["points"] = zero_tg_bot_success_sessions_points
    chart_data["failed_sessions"]["dates"] = zero_tg_bot_failed_sessions_dates
    chart_data["failed_sessions"]["points"] = zero_tg_bot_failed_sessions_points

    return chart_data


def get_count_of_redirected_requests_of_court(user_id):
    conn = sqlite3.connect('../court-bot/database/db')
    cursor = conn.cursor()

    if user_id == 0:
        sessions_statuses = list(cursor.execute("SELECT status FROM sessions"))
    else:
        sessions_statuses = list(cursor.execute("SELECT status FROM sessions WHERE court_id=?", (user_id,)))

    count_of_redirected_requests = f"{len(sessions_statuses)}"

    conn.commit()
    conn.close()

    return count_of_redirected_requests


def get_average_rating_by_users(user_id):
    conn = sqlite3.connect('../court-bot/database/db')
    cursor = conn.cursor()

    if user_id == 0:
        v2_data = list(cursor.execute("SELECT session_rating_by_user FROM sessions WHERE session_rating_by_user IS NOT NULL"))
    else:
        v2_data = list(cursor.execute("SELECT session_rating_by_user FROM sessions WHERE session_rating_by_user IS NOT NULL and court_id=?", (user_id,)))
    v2_data = ["".join(tup) for tup in v2_data]
    v2_data = [int(i) for i in v2_data]
    v2 = f"{round(sum(v2_data)/len(v2_data), 1)}"

    conn.commit()
    conn.close()

    return v2


def get_average_time_of_operator_reaction(user_id):
    conn = sqlite3.connect('../court-bot/database/db')
    cursor = conn.cursor()

    if user_id == 0:
        v3_data_1 = list(cursor.execute("SELECT initiate_timestamp FROM sessions WHERE conversation_start_timestamp IS NOT NULL"))
        v3_data_2 = list(cursor.execute("SELECT conversation_start_timestamp FROM sessions WHERE conversation_start_timestamp IS NOT NULL"))
    else:
        v3_data_1 = list(cursor.execute("SELECT initiate_timestamp FROM sessions WHERE conversation_start_timestamp IS NOT NULL and court_id=?", (user_id,)))
        v3_data_2 = list(cursor.execute("SELECT conversation_start_timestamp FROM sessions WHERE conversation_start_timestamp IS NOT NULL and court_id=?", (user_id,)))

    v3_data_1 = ["".join(str(tup[0])) for tup in v3_data_1]
    v3_data_2 = ["".join(str(tup[0])) for tup in v3_data_2]
    v3_data_1 = [int(i) for i in v3_data_1]
    v3_data_2 = [int(i) for i in v3_data_2]
    v3_data_3 = [v3_data_2[i] - v3_data_1[i] for i in range(len(v3_data_1))]
    v3 = f"{round(sum(v3_data_3) / len(v3_data_3) / 60, 2)}"

    conn.commit()
    conn.close()

    return v3


def get_average_time_of_operator_dialogue(user_id):
    conn = sqlite3.connect('../court-bot/database/db')
    cursor = conn.cursor()

    if user_id == 0:
        v4_data_1 = list(cursor.execute("SELECT conversation_start_timestamp FROM sessions WHERE completion_timestamp IS NOT NULL"))
        v4_data_2 = list(cursor.execute("SELECT completion_timestamp FROM sessions WHERE completion_timestamp IS NOT NULL"))
    else:
        v4_data_1 = list(cursor.execute("SELECT conversation_start_timestamp FROM sessions WHERE completion_timestamp IS NOT NULL and court_id=?", (user_id,)))
        v4_data_2 = list(cursor.execute("SELECT completion_timestamp FROM sessions WHERE completion_timestamp IS NOT NULL and court_id=?", (user_id,)))

    v4_data_1 = ["".join(str(tup[0])) for tup in v4_data_1]
    v4_data_2 = ["".join(str(tup[0])) for tup in v4_data_2]
    v4_data_1 = [int(i) for i in v4_data_1]
    v4_data_2 = [int(i) for i in v4_data_2]
    v4_data_3 = [v4_data_2[i] - v4_data_1[i] for i in range(len(v4_data_1))]
    v4 = f"{round(sum(v4_data_3)/len(v4_data_3)/60, 2)}"

    conn.commit()
    conn.close()

    return v4


def get_count_of_requests(user_id):
    conn = sqlite3.connect('../court-bot/database/db')
    cursor = conn.cursor()

    if user_id == 0:
        v5_data_1 = list(cursor.execute("SELECT id FROM sessions WHERE status in ('finished_by_redirection_by_offline', 'finised_by_redirection_by_waiting')"))
    else:
        v5_data_1 = list(cursor.execute("SELECT id FROM sessions WHERE status in ('finished_by_redirection_by_offline', 'finised_by_redirection_by_waiting') and court_id=?", (user_id,)))

    v5 = len(v5_data_1)

    conn.commit()
    conn.close()

    return v5