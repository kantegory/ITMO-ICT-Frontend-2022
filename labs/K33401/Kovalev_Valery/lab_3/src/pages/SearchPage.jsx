import React, {useCallback, useContext, useEffect, useMemo, useRef, useState} from 'react';
import Header from "../components/Header";
import Album from "../components/Album";
import Filter from "../components/Filter/Filter";
import {useFetching} from "../hooks/useFetching";
import ApiService from "../API/ApiService";
import {useObserver} from "../hooks/useObserver";
import {Context} from "../context";
import PreviewPhoto from "../components/PreviewPhoto/PreviewPhoto";
import BasePage from "./BasePage";
import { useLocation } from 'react-router-dom'

const SearchPage = () => {
    const context = useContext(Context);
    const [photos, setPhotos] = useState([])
    const [filter, setFilter] = [context.filter, context.setFilter]
    const [limit, setLimit] = useState(30)
    const [offset, setOffset] = useState(0)
    const [total, setTotal] = useState(0)
    const api = new ApiService()
    const lastElement = useRef()

    const [fetchPhotos, isPhotosLoading, photosError] = useFetching(async ()=>{
        const response = await api.searchPhotos({"random":30, "limit":limit, "keywords":filter.keywords, "colors":filter.colors})
        setPhotos([...response.results])
        setTotal(response.count)
    })

    const [addPhotos, isAddPhotosLoading, addPhotosError] = useFetching(async ()=>{
        const response = await api.searchPhotos({"limit":limit, "offset":offset, "random":30, "keywords":filter.keywords, "colors":filter.colors})
        setPhotos([...photos, ...response.results])
    })


    useEffect(()=>{
        setOffset(0)
        fetchPhotos()
    }, [filter])

    useObserver(lastElement, offset<total, ()=>{
        if(isAddPhotosLoading) return
        if(isPhotosLoading) return
        setOffset(offset+limit)
    }, [isPhotosLoading, isAddPhotosLoading])


    useEffect(()=>{
        if(offset){
            addPhotos()
        }
    }, [offset])


    return (
        <BasePage>
            <div style={{position:"fixed", zIndex:1000}}>
                <h1>{isPhotosLoading ? "Photos Loading" : "Photos not loadning"}</h1>
                <h1>{isAddPhotosLoading ? "Add Photos Loading" : " Add Photos not loadning"}</h1>
                <h1>{photos.length}</h1>
                <h1>{offset}</h1>
                <h1>{total}</h1>
                <button onClick={()=>{setOffset(limit+offset)}}>More</button>
            </div>

            <Album photos={photos}/>
            <div ref={lastElement} style={{width:"100%", color:"red",  height: "25%", position:"absolute", bottom:0}}/>
        </BasePage>
    );
};

export default SearchPage;
