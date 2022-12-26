import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "../store/actions/categoriesActions";
import BasePage from "./BasePage/BasePage";
import CategoriesAlbum from "../components/CategoriesAlbum";
import { useInView } from "react-intersection-observer";

function MainPage() {
    const dispatch = useDispatch();
    const { categories, isLoading, offset, count } = useSelector((state) => state.categories);
    const { ref, inView } = useInView();

    useEffect(() => {
        if (!Object.keys(categories).length) {
            dispatch(fetchCategories());
        }
    }, [dispatch]);

    // useEffect(() => {
    //     if (inView && Object.keys(categories).length && offset < count) {
    //         console.log("More");
    //         dispatch(fetchCategories());
    //     }
    // }, [inView, isLoading]);

    return (
        <BasePage pageName="main">
            <CategoriesAlbum categories={categories} />
        </BasePage>
    );
}

export default MainPage;
