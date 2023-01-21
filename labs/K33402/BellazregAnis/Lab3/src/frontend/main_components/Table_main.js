import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import './Table.css';
import {drawPointOnly} from "./Data_inputs_main";
import {XOFFSET} from "./Data_inputs_main";
import {YOFFSET} from "./Data_inputs_main";

function Table_main() {

    const dispatch = useDispatch();
    const data = useSelector(state => state.data);
    const login = useSelector(state => state.login);

    let res = data.map(function (point) {
            return <tr>
                <td className={"coord_col"}>{point.x}</td>
                <td className={"coord_col"}>{point.y}</td>
                <td className={"coord_col"}>{point.r}</td>
                <td className={"time_col"}>{point.execTime}</td>
                <td className={"time_col"}>{point.curTime}</td>
                <td className={"time_col"}>{point.hit}</td>
                <td className={"coord_col"}>{point.user}</td>
            </tr>;


    });

    useEffect(() => {
        if (localStorage.getItem("login") === ""){
            localStorage.setItem("token", null);
            localStorage.setItem("refreshToken", null);
            dispatch({type: "LOG_IN", login: ""})
        }
    });




    return (
        <div>
            <div className="table">
                <table id="table_res">
                    <thead>
                    <tr>
                        <th className={"coord_col"}>X</th>
                        <th className={"coord_col"}>Y</th>
                        <th className={"coord_col"}>R</th>
                        <th className={"time_col"}>Execution time</th>
                        <th className={"time_col"}>Current time</th>
                        <th className={"time_col"}>Result</th>
                        <th className={"coord_col"}>Creator</th>
                    </tr>
                    </thead>
                    <tbody>
                    {res}
                    </tbody>
                </table>

            </div>
        </div>
    );
}

export default Table_main;