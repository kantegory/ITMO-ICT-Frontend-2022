import React from 'react';
import Button from "react-bootstrap/Button";
import {FaHeart, FaHeartBroken} from "react-icons/fa"



const LikeButton = ({style, className, onClick}) => {
    return (
        <Button aria-label="like photo" onClick={onClick} className={className} variant="secondary" style={{borderRadius:"50%", width:"50px", height:"50px", ...style}}>
            <FaHeart/>
        </Button>
    );
};

export default LikeButton;
