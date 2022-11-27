import React, {useEffect, useMemo} from 'react';
import BasePage from "./BasePage";
import {useAuth} from "../hooks/useAuth";
import {useDispatch, useSelector} from "react-redux";
import {fetchLike} from "../store/actions/likeActions";
import Album from "../components/Album";
import {useLikedPhotos} from "../hooks/useLikedPhotos";

const Profile = () => {
    const {user, token} = useAuth()
    const dispatch = useDispatch()
    const {likes, likedPhotos} = useLikedPhotos()


    const sortedLikes = useMemo(()=> {
        return [...likes].sort((a, b) => (b.liked_at - a.liked_at))
    },[likes])
    const sortedPhotos = useMemo(()=>{
        return sortedLikes.map(e=>e.photo)
    },[sortedLikes])




    useEffect(()=>{
        dispatch(fetchLike(token))
    },[dispatch])


    return (
        <BasePage>
            {/*<button onClick={handleClick}>Test</button>*/}
            <div className="container-xl">
                <h1>{user.username}</h1>
                <Album photos={sortedPhotos}/>
            </div>

        </BasePage>
    );
};

export default Profile;
