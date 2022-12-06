import React, {useEffect, useRef, useState} from 'react';
import {Carousel} from "react-bootstrap";
import {useFetching} from "../hooks/useFetching";
import ApiService from "../API/ApiService";
import MyImage from "./MyImage/MyImage";
import {useSelector} from "react-redux";
import {useAuth} from "../hooks/useAuth";
import styles from "./Slider.module.css"
import AppButton from "./AppButton";
import {config} from '@react-spring/web'
import useScrollTo from 'react-spring-scroll-to-hook'

const Slider = () => {
    const {user} = useAuth()
    const {scrollTo} = useScrollTo({ mass: 1, tension: 20000, friction: 14 })


    return (

        <div className={`${styles.slider} d-flex flex-column justify-content-center align-items-center mb-2`}>
            <h1>Welcome</h1>
            <h2>{user.username}</h2>
            <span className="text-muted">you can search photos by keywords or colors</span>
            <AppButton ariaLabel={"try"} onClick={
                ()=>{
                    scrollTo('#filter')
                }
            }>
                Try
            </AppButton>
        </div>
    );
};

export default Slider;
