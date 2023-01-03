import React, {useEffect, useState} from "react";
import BasePage from "./BasePage/BasePage";
import {useDispatch, useSelector} from "react-redux";
import {fetchCollections, fetchLikes} from "../store/actions/profileActions";
import Album from "../components/Album";
import {useAuth} from "../hooks/useAuth";


const ProfilePage = () => {
    const dispatch = useDispatch();
    const {likedPhotos} = useSelector(state=>state.profile)
    const {user} = useAuth()


    useEffect(() => {
        dispatch(fetchLikes());
        dispatch(fetchCollections());
    }, [dispatch]);

    return (
        <BasePage pageName="profile">
            <h1>{user.username}</h1>
            <Album photos={likedPhotos} />
        </BasePage>
    );
};

export default ProfilePage;
