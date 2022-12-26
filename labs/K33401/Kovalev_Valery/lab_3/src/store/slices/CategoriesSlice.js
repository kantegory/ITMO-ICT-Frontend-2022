import { createSlice } from "@reduxjs/toolkit";
import { fetchCategories } from "../actions/categoriesActions";

const initialState = {
    categories: {}, // {categort: {photos:[], total:Int}}
    isLoading: false,
    count: 0,
    offset: 0,
    error: "",
};

export const categoriesSlice = createSlice({
    name: "categories",
    initialState,
    extraReducers: {
        [fetchCategories.pending]: (state) => {
            state.isLoading = true;
        },
        [fetchCategories.fulfilled]: (state, action) => {
            state.categories = { ...state.categories, ...action.payload.categories };
            state.isLoading = false;
            state.offset += Object.keys(action.payload.categories).length;
            state.count = action.payload.count;
            state.error = "";
        },
        [fetchCategories.rejected]: (state, action) => {
            state.error = action.payload;
            state.isLoading = false;
        },
    },
});

export const authReducer = categoriesSlice.reducer;
export default authReducer;
