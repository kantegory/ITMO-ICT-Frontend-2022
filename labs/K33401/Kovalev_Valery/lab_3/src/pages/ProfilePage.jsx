import React, { useEffect } from "react";
import BasePage from "./BasePage/BasePage";
import { useDispatch } from "react-redux";
import { fetchLikes } from "../store/actions/profileActions";

const ProfilePage = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchLikes());
    }, [dispatch]);

    return (
        <BasePage pageName="profile">
            <h1>sdf</h1>
        </BasePage>
    );
};

export default ProfilePage;
