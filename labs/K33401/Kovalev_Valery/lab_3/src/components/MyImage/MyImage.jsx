import React from 'react';
import {Blurhash} from "react-blurhash";

const MyImage = ({photo, style, className, ...props}) => {

    const renderImage = () => {
        if(photo.blur_hash){
            return(
                <div className={className} style={{aspectRatio:photo.photo_width/photo.photo_height, position:"relative", ...style}}>
                    <Blurhash hash={photo.blur_hash} style={{position:"absolute", left:0, top:0}} width={"100%"} height={"100%"}/>
                    <img style={{position:"absolute", left:0, top:0}}  src={photo.photo_image_url+"?w=1000&q=100"} width={"100%"} height={"100%"} alt=""/>
                </div>
            )
        }
        return (
            <div className={className} style={{aspectRatio:photo.photo_width/photo.photo_height, position:"relative", ...style}}>
                <div  style={{position:"absolute", left:0, top:0, width:"100%", height:"100%", background:"#F5F5F5"}}/>
                <img style={{position:"absolute", left:0, top:0}}  src={photo.photo_image_url+"?w=1000&q=1"} width={"100%"} height={"100%"} alt=""/>
            </div>
        )
    }
    return (
        renderImage()
    );
};

export default MyImage;
