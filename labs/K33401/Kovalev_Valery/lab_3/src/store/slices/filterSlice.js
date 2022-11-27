import {photoSlice} from "./PhotoSlice";
import {createSlice} from "@reduxjs/toolkit";
import {clearSelectedFields} from "../actions/filterActions";

const initialState = {
    keywords: [],
    colors:[],
    selectedKeywords:[],
    selectedColors:[],
    error: "",
    random:30,
    isLoading: false,
}

export const filterSlice = createSlice({
    name:"filter",
    initialState,
    reducers: {
        fetchFilterSuccess(state, action){
            state.keywords = action.payload.keywords
            state.colors = action.payload.colors
            state.isLoading = false
            state.error = ""
        },
        filterIsLoading(state){
            state.isLoading = true
        },
        filterError(state, action){
            state.error = action.payload.message
            state.isLoading = false
        },
        setSelectedKeywords(state, action){
            state.selectedKeywords = action.payload
        },
        setSelectedColors(state, action){
            state.selectedColors = action.payload
        },
        clearSelectedFields(state){
            state.selectedKeywords = []
            state.selectedColors = []
        }
    }
})

export default filterSlice.reducer
