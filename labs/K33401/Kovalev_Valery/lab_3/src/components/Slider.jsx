import React from 'react';
import {useGetRandomPhotosQuery} from "../redux";
import {Carousel} from "react-bootstrap";

const Slider = () => {
    const randomPhotos = useGetRandomPhotosQuery({count: 3, orientation: "landscape"});

    if(randomPhotos.isLoading){
        return (
            <div style={{'height':'400px'}}></div>
        )
    }

    return (
        <Carousel>
            {randomPhotos.data.map(e=>(
                <Carousel.Item key={e.id} style={{'height':'400px'}}>
                    <img className="d-block w-100" src={e.urls.regular} alt={`Photo by ${e.user.username}`} style={{'height':'400px', 'objectFit':'cover'}}/>
                </Carousel.Item>
            ))}
        </Carousel>
    );
};

export default Slider;
