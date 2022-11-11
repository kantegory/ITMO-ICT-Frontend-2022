import React, {useContext} from 'react';
import MyImage from "../MyImage/MyImage";
import styles from "./PhotoCard.module.css"
import LikeButton from "../LikeButton";
import AddButton from "../AddButton";
import {Context} from "../../context";
import ReactCSSTransitionGroup from 'react-transition-group';

const PhotoCard = ({photo}) => {
    const context = useContext(Context)
    const setPreviewPhoto = context.setPreviewPhoto


    return (
        <div onClick={()=>{setPreviewPhoto(photo)}} className={styles.photoCard}>
            <MyImage photo={photo}/>
            <div className={styles.cover}>
                <div className={styles.bottomPanel}>
                    <div className={styles.buttonsPanel}>
                        <AddButton/>
                        <LikeButton/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PhotoCard;
