import {photoSlice} from "./PhotoSlice";
import {createSlice} from "@reduxjs/toolkit";
import {clearSelectedFields} from "../actions/filterActions";

const initialState = {
    keywords: [],
    tones:["white", "black", "red", "green", "blue", "cyan", "magenta", "yellow"],
    selectedKeywords:[],
    selectedTone: "",
    error: "",
    random:30,
    isLoading: false,
}

export const filterSlice = createSlice({
    name:"filter",
    initialState,
    reducers: {
        fetchFilterSuccess(state, action){
            state.keywords = action.payload
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
        setSelectedTone(state, action){
            state.selectedTone = action.payload
        },
        clearSelectedFields(state){
            state.selectedKeywords = []
            state.selectedTone = ""
        }
    }
})

export default filterSlice.reducer
