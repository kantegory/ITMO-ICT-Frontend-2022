import { createAsyncThunk } from "@reduxjs/toolkit";
import { getLikes, likePhoto as apiLikePhoto, unlikePhoto as apiUnlikePhoto } from "../../API/ProfileService";

export const fetchLikes = createAsyncThunk("profile/fetchLikes", async (_, { rejectedWithValue, getState }) => {
    try {
        const { token } = getState().auth;
        return await getLikes(token);
    } catch (e) {
        return rejectedWithValue(e.massage);
    }
});

export const likePhoto = createAsyncThunk(
    "profile/likePhoto",
    async ({ photo_id }, { rejectedWithValue, getState }) => {
        try {
            const { token } = getState().auth;
            await apiLikePhoto(token, photo_id);
            return await getLikes(token);
        } catch (e) {
            return rejectedWithValue(e.massage);
        }
    }
);

export const unlikePhoto = createAsyncThunk(
    "profile/unlikePhoto",
    async ({ photo_id }, { rejectedWithValue, getState }) => {
        try {
            const { token } = getState().auth;
            const { likes } = getState().profile;
            const like = likes.find((e) => e.photo.photo_id === photo_id);
            await apiUnlikePhoto(token, like.id);
            return await getLikes(token);
        } catch (e) {
            return rejectedWithValue(e.massage);
        }
    }
);
