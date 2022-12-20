import { createSlice } from "@reduxjs/toolkit"
import { fetchCategories } from "../actions/categoriesActions"

const initialState = {
    categories: {}, // {categort: {photos:[], total:Int}}
    isLoading: false,
    error: ""
}

export const categoriesSlice = createSlice({
    name: "categories",
    initialState,
    extraReducers: {
        [fetchCategories.pending]: (state) => {
            state.isLoading = true;
        },
        [fetchCategories.fulfilled]: (state, action) => {
            state.categories = action.payload
            state.error = ""
        },
        [fetchCategories.rejected]: (state, action) => {
            state.error = action.payload
            state.isLoading = false
        }

    }
})

export const authReducer = categoriesSlice.reducer;
export default authReducer;