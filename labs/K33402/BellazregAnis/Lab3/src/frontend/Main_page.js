
import React, {Component, useEffect} from 'react';

import {useDispatch, useSelector} from "react-redux";
import Header_main from "./main_components/Header_main";
import Canvas_and_Graph_main from "./main_components/Canvas_and_Graph_main";
import Data_inputs_main from "./main_components/Data_inputs_main";
import Table_main from "./main_components/Table_main";
import axios from "axios";


function Main_page(props) {

    const dispatch = useDispatch();
    const x = useSelector(state => state.x);
    const y = useSelector(state => state.y);
    const r = useSelector(state => state.r);
    const userID = useSelector(state => state.userID);


    const login = useSelector(state => state.login)

    useEffect(() => {
        let getTable = () => {
            let httpHeaders = {
                Authorization: 'Bearer ' + localStorage.getItem("token"),
                ContentType: 'application/json',
                Accept: 'application/json'
            };
            axios.post('http://localhost:8080/points/get', {userID: userID}, {headers: httpHeaders})
                .then(response => {
                    if (response.status === 200) {
                        dispatch({type: "LOAD_TABLE", data: response.data})
                    }
                })
                .catch(function (error) {
                    let httpHeaders = {ContentType: 'application/json', Accept: 'application/json'};
                    axios.post('http://localhost:8080/users/refreshToken', {refreshToken: localStorage.getItem("refreshToken")}, {headers: httpHeaders})
                        .then(response => {
                            if (response.status === 200) {
                                alert("The token has expired. The token has been updated.")
                                localStorage.setItem("token", response.data.accessToken);
                                localStorage.setItem("refreshToken", response.data.refreshToken);
                                getTable();
                            }
                        })
                        .catch(function (error) {
                            alert(error.response.data.message.toString())
                            localStorage.setItem("token", null);
                            localStorage.setItem("refreshToken", null);
                            localStorage.setItem("login", "");
                            dispatch({type: "SET_LOG_IN", login: ""})
                        })
                })
        }
        getTable()



    })


    return (
        <div className="container">

            <Header_main login={login}/>

            <div className="graph">
                <Canvas_and_Graph_main x={x} y={y} r={r} dispatch={dispatch}/>

                <Data_inputs_main x={x} y={y} r={r} userID={userID} dispatch={dispatch}/>
            </div>

            <Table_main/>

        </div>


    );

}

export default Main_page;
