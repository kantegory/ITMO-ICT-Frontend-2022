import React, {useCallback, useContext, useEffect, useLayoutEffect, useMemo, useRef, useState} from 'react';
import Header from "../components/Header";
import Album from "../components/Album";
import Filter from "../components/Filter/Filter";
import BasePage from "./BasePage";
import {useDispatch, useSelector} from "react-redux";
import {clearPhotos, fetchSearchPhotos} from "../store/actions/photoActions";

const SearchPage = () => {
    const [limit, setLimit] = useState(30)
    const [offset, setOffset] = useState(0)
    const dispatch = useDispatch()
    const {photos, isLoading, error} = useSelector(state => state.photo)
    const filterState = useSelector(state=>state.filter)

    useLayoutEffect(()=>{
        setOffset(0)
        dispatch(fetchSearchPhotos({filterState, limit, offset:0}))
        return () => {
            dispatch(clearPhotos())
        }
    }, [dispatch, filterState.selectedKeywords, filterState.selectedColors])

    return (
        <BasePage>
            <Filter/>
            <Album photos={photos}/>
            <button onClick={()=>{
                dispatch(fetchSearchPhotos({filterState, offset:offset+limit, limit}))
                setOffset(offset+limit)
            }}>More</button>
        </BasePage>
    );
};

export default SearchPage;
