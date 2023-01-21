import './css/Main.css';
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import $ from 'jquery';
import React from 'react';
import 'primereact/resources/themes/lara-light-indigo/theme.css';    //theme
import 'primereact/resources/primereact.min.css';                   //core css
import 'primeicons/primeicons.css';
import Header_index from './index_components/Header_index'
import Date_index from './index_components/Date_index'
import Auth_index from './index_components/Auth_index'
import Sign_in_button_index from "./index_components/Sign_in_button_index";
import Sign_up_button_index from "./index_components/Sign_up_button_index";


function Index_page() {

    const DELAY = 12000;
    const dispatch = useDispatch();
    const user = useSelector(state => state.user);
    const password = useSelector(state => state.password);


    useEffect(() => {
        setDateTime();
        setInterval(setDateTime, DELAY);
    })

    function setDateTime() {
        let date = new Date();

        let year = date.getFullYear();
        let month = date.getMonth() + 1;
        let day = date.getDate();
        day = (day < 10) ? '0' + day : day;

        let hours = date.getHours();
        let minutes = date.getMinutes();
        let seconds = date.getSeconds();
        hours = (hours < 10) ? '0' + hours : hours;
        minutes = (minutes < 10) ? '0' + minutes : minutes;
        seconds = (seconds < 10) ? '0' + seconds : seconds;
        $('.data').html(day + "." + month + "." + year)
        $('.time').html(hours + ":" + minutes + ":" + seconds)
    }


    return (

        <div>

            <Header_index/>

            <Date_index/>
            <div className="auth">
                <Auth_index user={user} password={password} dispatch={dispatch}/>


                    <Sign_in_button_index user={user} password={password} dispatch={dispatch}/>

                    <Sign_up_button_index user={user} password={password} dispatch={dispatch}/>
            </div>
        </div>
    );
}

export default Index_page;
