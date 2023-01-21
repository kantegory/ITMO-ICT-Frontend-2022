import Main_page from "./Main_page";
import Index_page from "./Index_page";
import React, {Component, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import axios from "axios";


function foo(){
    let httpHeaders = {
        Authorization: 'Bearer ' + localStorage.getItem("token"),
        ContentType: 'application/json',
        Accept: 'application/json'
    };
    axios.post('http://localhost:8080/users/checkUser', {token: localStorage.getItem("token"), login: localStorage.getItem("login")}, {headers: httpHeaders})
        .then(response => {
            if (response.status == 200) {
                return "true";
            }
        })
        .catch(function (error) {
            return "false";

        })
    return false;
}

function MainComponent() {

    const dispatch = useDispatch();
    const login = useSelector(state => state.login);
    const user = useSelector(state => state.user)
    const password = useSelector(state => state.password)
    useEffect(()=>{



    })




    return (
        <div className="App">
            {login !== "" ? <Main_page/> : <Index_page/>}

        </div>
    );
}

export default MainComponent;
