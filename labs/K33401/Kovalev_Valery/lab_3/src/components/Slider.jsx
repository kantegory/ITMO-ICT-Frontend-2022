import React, {useEffect, useRef, useState} from 'react';
import {Carousel} from "react-bootstrap";
import {useFetching} from "../hooks/useFetching";
import ApiService from "../API/ApiService";
import MyImage from "./MyImage/MyImage";

const Slider = () => {
    const [photos, setPhotos] = useState([])


    const [fetchPhotos, isPhotosLoading, photosError] = useFetching( async ()=>{
        const api = new ApiService()
        const response = await api.getPhotos({"limit":3, "random":Math.floor(Math.random() * 100)})
        setPhotos([...response.results])
    })

    useEffect(()=>{
        fetchPhotos()
    }, [])


    return (
        <Carousel>
            {photos.map(e=>(
                <Carousel.Item key={e.photo_url} style={{'height':'400px'}}>
                    <img className="d-block w-100" src={e.photo_image_url+"?w=1920"} alt={``} style={{'height':'400px', 'objectFit':'cover'}}/>
                </Carousel.Item>
            ))}
        </Carousel>
    );
};

export default Slider;
