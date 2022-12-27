import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "../store/actions/categoriesActions";
import BasePage from "./BasePage/BasePage";
import CategoriesAlbum from "../components/CategoriesAlbum";
import { useInView } from "react-intersection-observer";
import { Pagination, Skeleton } from "antd";
import { changeLimit, changePage } from "../store/slices/CategoriesSlice";

function MainPage() {
    const dispatch = useDispatch();
    const { categories, isLoading, offset, count, page, limit } = useSelector((state) => state.categories);
    const [currentPage, setCurrentPage] = useState(page);

    useEffect(() => {
        dispatch(fetchCategories());
    }, [dispatch, offset]);

    const onPaginate = (page) => {
        dispatch(changePage(page));
        setCurrentPage(page);
    };

    const onShowSizeChange = (page, size) => {
        dispatch(changeLimit({ page, limit: size }));
    };

    return (
        <BasePage pageName="main">
            <CategoriesAlbum categories={categories} isLoading={isLoading} countOnPage={limit} />
            <Pagination
                onShowSizeChange={onShowSizeChange}
                hideOnSinglePage
                current={currentPage}
                onChange={onPaginate}
                defaultCurrent={1}
                total={count}
                pageSizeOptions={[12, 24, 36]}
            />
        </BasePage>
    );
}

export default MainPage;
