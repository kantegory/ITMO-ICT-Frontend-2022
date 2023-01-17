import React, {useContext, useEffect, useMemo, useState} from 'react';
import MyImage from "../MyImage/MyImage";
import styles from "./PhotoCard.module.css"
import LikeButton from "../LikeButton";
import AddButton from "../AddButton";
import {useAuth} from "../../hooks/useAuth";
import {useDispatch, useSelector} from "react-redux";
import {likePhoto, unlikePhoto} from "../../store/actions/likeActions";

const PhotoCard = ({photo}) => {
    const {token} = useAuth()
    const {likes, likedPhotos} = useSelector(state=>state.like)
    const liked = useMemo(()=>(!!likedPhotos.find(e=>e.photo_id===photo.photo_id)), [likedPhotos])
    const dispatch = useDispatch()




    const handleLike = async () => {
        if(liked){
            const like = likes.find(e=>e.photo.photo_id===photo.photo_id)
            dispatch(unlikePhoto(token, like.id))
        } else {
            dispatch(likePhoto(token, photo))
        }
    }

    return (
        <div className={styles.photoCard}>
            <MyImage photo={photo}/>
            <div className={styles.cover}>
                <div className={styles.bottomPanel}>
                    <div className={styles.buttonsPanel}>
                        {/*<h1>{liked.toString()}</h1>*/}
                        <AddButton/>
                        <LikeButton onClick={handleLike} style={liked && {color:"red"}}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PhotoCard;
