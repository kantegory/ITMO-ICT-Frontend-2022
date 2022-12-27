import { createSlice } from "@reduxjs/toolkit";
import { fetchLikes, likePhoto, unlikePhoto } from "../actions/profileActions";

const initialState = {
    likes: [],
    likedPhotos: [],
    isLoading: false,
    error: "",
};

export const profileSlice = createSlice({
    name: "profile",
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(fetchLikes.fulfilled, (state, action) => {
                state.likes = action.payload;
                state.likedPhotos = action.payload.map((e) => e.photo);
                state.isLoading = false;
            })
            .addCase(fetchLikes.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchLikes.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
            .addCase(likePhoto.fulfilled, (state, action) => {
                state.likes = action.payload;
                state.likedPhotos = action.payload.map((e) => e.photo);
                state.isLoading = false;
            })
            .addCase(likePhoto.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(likePhoto.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
            .addCase(unlikePhoto.fulfilled, (state, action) => {
                state.likes = action.payload;
                state.likedPhotos = action.payload.map((e) => e.photo);
                state.isLoading = false;
            })
            .addCase(unlikePhoto.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(unlikePhoto.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const profileReducer = profileSlice.reducer;
export default profileReducer;
