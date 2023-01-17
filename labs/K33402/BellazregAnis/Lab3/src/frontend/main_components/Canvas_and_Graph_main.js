import React from "react";
import {ReactComponent as YourSvg} from "../img/graph-svg.svg";
import {XOFFSET} from "./Data_inputs_main";
import {YOFFSET} from "./Data_inputs_main";
import axios from "axios";
import {drawPointOnly} from "./Data_inputs_main";


function Canvas_and_Graph_main(props) {

    let r = props.r;
    let dispatch = props.dispatch;

    function canvasClick(e) {
        var x_click = e.nativeEvent.offsetX;
        var y_click = e.nativeEvent.offsetY;
        if (r < -5 || r > 3 || r == null) return;

        let xC = (x_click - XOFFSET) / 68 * r;
        xC = getValidX(xC)


        let yC = (-y_click + YOFFSET) / 66 * r;
        yC = getValidY(yC)


        let httpHeaders = {
            Authorization: 'Bearer ' + localStorage.getItem("token"),
            ContentType: 'application/json',
            Accept: 'application/json'
        };
        axios.post(`http://localhost:8080/points/save`, {x: xC, y: yC, r: r}, {headers: httpHeaders})
            .then(response => {

                if (response.status === 200) {
                    dispatch({type: "SAVE_POINT", point: response.data})
                    let x_click = response.data.x / r * 68 + XOFFSET;
                    let y_click = -(response.data.y / r * 66 - YOFFSET);
                    drawPointOnly(x_click, y_click, response.data.hit)
                }


            })
            .catch(function (error) {
                alert(error.response.data.message.toString())


            })
    }

    function getValidX(x) {
        return x.toFixed(1)
    }

    function getValidY(y) {
        return y.toFixed(3)
    }

    return (
        <div>
            <div className="canvas_and_graph">
                <h2 className="namer">Graph</h2>
                <YourSvg className="svg"/>
                <canvas
                    onClick={canvasClick}
                    className="graph-canvas"
                    width="220"
                    height="250"/>
            </div>
        </div>
    );
}

export default Canvas_and_Graph_main;