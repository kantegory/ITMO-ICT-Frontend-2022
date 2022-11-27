import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    likes: [],
    likedPhotos:[],
    isLoading: false,
    error: ""
}

export const likeSlice = createSlice({
    name: "like",
    initialState: initialState,
    reducers: {
        fetching(state) {
            state.isLoading = true
        },
        fetchSuccess(state, action) {
            state.isLoading = false
            state.likes = action.payload
            state.likedPhotos = action.payload.map(e=>e.photo)
        },
        fetchError(state, action){
            state.isLoading = false
            state.error = action.payload.message
        },
        clear(state){
            state.likes = []
            state.isLoading = false
            state.error = ""
        }
    }
})

export  default likeSlice.reducer
