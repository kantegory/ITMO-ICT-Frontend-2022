import React, {useContext, useEffect, useRef, useState} from 'react';
import Album from "../components/Album";
import {useFetching} from "../hooks/useFetching";
import ApiService from "../API/ApiService";
import {useObserver} from "../hooks/useObserver";
import {Context} from "../context";
import BasePage from "./BasePage";


const HomePage = () => {
    const context = useContext(Context);
    const [photos, setPhotos] = useState([])
    const [limit, setLimit] = useState(30)
    const [offset, setOffset] = useState(0)
    const [total, setTotal] = useState(0)
    const lastElement = useRef()
    const [filter, setFilter] = [context.filter, context.setFilter]

    const [fetchPhotos, isPhotosLoading, photosError] = useFetching( async ()=>{
        const api = new ApiService()
        const response = await api.getPhotos({"limit":limit, "offset":offset, "random":30})
        if(total){
            setPhotos([...photos, ...response.results])
        } else {
            setPhotos([...response.results])
        }
        setTotal(response.count)
    })


    useObserver(lastElement, offset<total, ()=>{
        if(isPhotosLoading) return
        setOffset(offset+limit)
    }, [isPhotosLoading])

    useEffect(()=>{
        if(!isPhotosLoading){
            fetchPhotos()
        }
    }, [offset])

    // useEffect(()=>{
    //     return ()=> {
    //         setPhotos([])
    //     }
    // }, [])

    return (
        <BasePage>
            <Album photos={photos}/>
            <div ref={lastElement} style={{width:"100%",  height: "25%", position:"absolute", bottom:0}}/>
        </BasePage>
    );
};

export default HomePage;
