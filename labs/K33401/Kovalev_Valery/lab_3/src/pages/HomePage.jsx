import React, {useContext, useEffect, useRef, useState} from 'react';
import Album from "../components/Album";
import {useFetching} from "../hooks/useFetching";
import {useObserver} from "../hooks/useObserver";
import BasePage from "./BasePage";
import {useDispatch, useSelector} from "react-redux";
import {clearPhotos, fetchPhotos, fetchSearchPhotos} from "../store/actions/photoActions";
import Filter from "../components/Filter/Filter";
import Slider from "../components/Slider";


const HomePage = () => {
    const [limit, setLimit] = useState(30)
    const [offset, setOffset] = useState(0)
    const lastElement = useRef()

    const dispatch = useDispatch()
    const filterState = useSelector(state => state.filter)
    const {photos} = useSelector(state=>state.photo)

    useEffect(()=>{
        dispatch(fetchSearchPhotos({filterState, limit, offset}))
        return () => {
            dispatch(clearPhotos())
        }
    }, [dispatch])

    return (
        <BasePage>
            <Slider/>
            <Filter/>
            <Album photos={photos}/>
            <button onClick={()=>{
                dispatch(fetchPhotos({filterState, offset:offset+limit}))
                setOffset(offset+limit)
            }}>More</button>
        </BasePage>
    );
};

export default HomePage;
