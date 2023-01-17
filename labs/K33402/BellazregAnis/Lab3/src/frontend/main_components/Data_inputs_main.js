import React from "react";
import {Slider} from "primereact/slider";
import {InputText} from "primereact/inputtext";
import axios from "axios";
import $ from "jquery";

export function drawPointOnly(x_draw, y_draw, isHit) {
    let canvas = $('.graph-canvas');
    let ctxAxes = canvas[0].getContext('2d');
    ctxAxes.beginPath();
    ctxAxes.setLineDash([]);
    ctxAxes.stroke();
    if (isHit === "true")
        ctxAxes.fillStyle = 'green';
    else if (isHit === "false")
        ctxAxes.fillStyle = 'red';
    else if (isHit === "none")
        ctxAxes.fillStyle = 'black';
    ctxAxes.arc(x_draw, y_draw, 3, 0, 2 * Math.PI);
    ctxAxes.fill();
}


export const XOFFSET = 110
export const YOFFSET = 110


function Data_inputs_main(props) {


    let x = props.x;
    let y = props.y;
    let r = props.r;
    let userID = props.userID;
    let dispatch = props.dispatch;


    function drawOldPoints() {

        $("tbody tr").each(function () {

            const point = $(this);

            const x = parseFloat(point.find("td:first-child").text());
            const y = parseFloat(point.find("td:nth-child(2)").text());
            const r = props.r;
            var res = point.find("td:nth-child(6)").text();
            if (isNaN(x) || isNaN(y) || isNaN(r)) return;
            let x_click = x / r * 68 + XOFFSET;
            let y_click = -(y / r * 66 - YOFFSET);
            drawPointOnly(x_click, y_click, res)
        })
    }

    function logOut() {
        localStorage.setItem("token", null);
        localStorage.setItem("refreshToken", null);
        dispatch({type: "LOG_IN", login: ""})
    }


    function submitClick(e) {
        e.preventDefault()
        // alert(localStorage.getItem("token"))
        let httpHeaders = {
            Authorization: 'Bearer ' + localStorage.getItem("token"),
            ContentType: 'application/json',
            Accept: 'application/json'
        };

        axios.post(`http://localhost:8080/points/save`, {x: x, y: y, r: r}, {headers: httpHeaders})
            .then(response => {

                if (response.status === 200) {
                    dispatch({type: "SAVE_POINT", point: response.data})
                }
            })
            .catch(function (error) {

                if (error.response.data.message.toString() === "Not enough right.") {
                    axios.post('http://localhost:8080/users/refreshToken', {refreshToken: localStorage.getItem("refreshToken")}, {headers: httpHeaders})
                        .then(response => {
                            if (response.status === 200) {
                                alert("The token has expired. The token has been updated.")
                                localStorage.setItem("token", response.data.accessToken);
                                localStorage.setItem("refreshToken", response.data.refreshToken);
                            } else {
                                alert(response.data)
                            }
                        })
                        .catch(function (error) {
                            alert(error.response.data.message.toString())
                        })
                } else {
                    alert(error.response.data.message.toString())
                }


            })
    }

    function clearPoints() {
        let httpHeaders = {
            Authorization: 'Bearer ' + localStorage.getItem("token"),
            ContentType: 'application/json',
            Accept: 'application/json'
        };

        axios.post('http://localhost:8080/points/clear', {userID: userID}, {headers: httpHeaders})
            .then(response => {
            })
            .catch(function (error) {
                if (error.response.data.message.toString() === "Not enough right.") {
                    axios.post('http://localhost:8080/users/refreshToken', {refreshToken: localStorage.getItem("refreshToken")}, {headers: httpHeaders})
                        .then(response => {
                            if (response.status === 200) {
                                alert("The token has expired. The token has been updated.")
                                localStorage.setItem("token", response.data.accessToken);
                                localStorage.setItem("refreshToken", response.data.refreshToken);
                            } else {
                                alert(response.data)
                            }
                        })
                        .catch(function (error) {
                            alert(error.response.data.message.toString())
                        })
                } else {
                    alert(error.response.data.message.toString())
                }


            })
    }

    function changeX(e) {

        dispatch({type: "SET_X", x: e.value})
        let x_click = xCoordinatesToPixels(e.value);
        let y_click = yCoordinatesToPixels(y);
        drawPoint(x_click, y_click)

    }

    function changeY(e) {

        dispatch({type: "SET_Y", y: e.target.value})
        let x_click = xCoordinatesToPixels(x);
        let y_click = yCoordinatesToPixels(e.target.value);
        drawPoint(x_click, y_click)
    }

    function validateYWithEvent(e) {
        e.preventDefault()
        if (isNaN(y) || y > 3 || y < -3) {
            dispatch({type: "SET_Y", y: ""})
        }
    }

    function changeR(e) {

        dispatch({type: "SET_R", r: e.value})
        r = e.value;
        fillR(e.value)
        let x_click = xCoordinatesToPixels(x);
        let y_click = yCoordinatesToPixels(y);
        drawPoint(x_click, y_click)
    }

    function validateX() {
        return !(x < -5 || x > 3 || x == null);
    }

    function validateY() {
        return !(y < -3 || y > 3 || y === "");
    }

    function validateR() {
        return !(r < -5 || r > 3 || r == null);
    }

    function xCoordinatesToPixels(x) {
        return x / r * 68 + XOFFSET;
    }

    function yCoordinatesToPixels(y) {
        return -(y / r * 66 - YOFFSET);
    }


    function fillR(newR) {

        $('.minus_R_X')[0].textContent = (-newR).toString();
        $('.minus_half_R_X')[0].textContent = (-newR / 2).toString();
        $('.half_R_X')[0].textContent = (newR / 2).toString();
        $('.R_X')[0].textContent = (newR).toString();
        $('.minus_R_Y')[0].textContent = (-newR).toString();
        $('.minus_half_R_Y')[0].textContent = (-newR / 2).toString();
        $('.half_R_Y')[0].textContent = (newR / 2).toString();
        $('.R_Y')[0].textContent = (newR).toString();
    }


    function clearCanvas() {
        let canvas = $('.graph-canvas');
        canvas[0].getContext('2d').clearRect(0, 0, canvas.width(), canvas.height());
    }


    function drawPoint(x_draw, y_draw) {

        clearCanvas();
        drawOldPoints()
        if (!validateX() || !validateY() || !validateR()) return;
        drawPointOnly(x_draw, y_draw, "none")
    }

    return (
        <div>
            <form>
                <h2 className="namer" style={{marginTop: "7px"}}>Data input</h2>
                <br/>


                <h3>X: {x}</h3>
                <Slider
                    min={-5}
                    max={3}
                    className={"slider"}
                    style={{textAlign: "center"}}
                    value={x}
                    onChange={changeX}
                    step={0.1}
                />
                <br/>


                <h3>Y: {y}</h3>
                <InputText
                    style={{width: "220px", height: "30px"}}
                    value={y}
                    onChange={changeY}
                    onBlur={validateYWithEvent}
                    maxLength={5}
                    tooltip={"Number from -3 to 3"}
                />
                <br/>


                <h3>R: {r}</h3>
                <Slider
                    min={-5}
                    max={3}
                    className={"slider"}
                    style={{textAlign: "center"}}
                    value={r}
                    onChange={changeR}
                    step={0.1}
                />
                <br/>

                <button
                    id={"out_button"}
                    className={"submit_button"}
                    value={"Submit"}
                    ajax={"false"}
                    onClick={submitClick}>Submit
                </button>

                <button
                    id={"clear_button"}
                    className={"submit_button"}
                    value={"Reset"}
                    ajax={"false"}
                    onClick={clearPoints}
                >Reset
                </button>

                <br/><br/>

                <button
                    id={"logout_button"}
                    className={"submit_button"}
                    value={"Log Out"}
                    ajax={"false"}
                    onClick={logOut}>Log Out
                </button>


            </form>
        </div>
    );
}

export default Data_inputs_main;