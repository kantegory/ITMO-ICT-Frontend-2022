import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    photos: [],
    isLoading: false,
    error: ""
}

export const photoSlice = createSlice({
    name: "photo",
    initialState: initialState,
    reducers: {
        fetching(state) {
            state.isLoading = true
        },
        fetchSuccess(state, action) {
            state.isLoading = false
            state.photos = [...state.photos, ...action.payload]
        },
        fetchError(state, action){
            state.isLoading = false
            state.error = action.payload.message
        },
        clearPhotos(state){
          state.photos = []
          state.isLoading = false
          state.error = ""
        }
    }
})

export  default photoSlice.reducer
