import {likeSlice} from "../slices/likeSlice";
import ApiService from "../../API/ApiService";

export const fetchLike = (token) => {
    return async (dispatch) => {
        try {
            dispatch(likeSlice.actions.fetching())
            let response = await ApiService.getLikes(token)
            response = response.map(e=>(
                {...e, liked_at: Number(e.liked_at)}
            ))
            dispatch(likeSlice.actions.fetchSuccess(response))
        } catch (e) {
            dispatch(likeSlice.actions.fetchError(e))
        }
    }
}

export const unlikePhoto = (token, id) => {
    return async (dispatch) => {
        try {
            dispatch(likeSlice.actions.fetching())
            await ApiService.unlikePhoto(token, id)
            let response = await ApiService.getLikes(token)
            response = response.map(e=>(
                {...e, liked_at: Number(e.liked_at)}
            ))
            dispatch(likeSlice.actions.fetchSuccess(response))
        } catch (e) {
            dispatch(likeSlice.actions.fetchError(e))
        }
    }
}

export const likePhoto = (token, photo) => {
    return async (dispatch) => {
        try {
            dispatch(likeSlice.actions.fetching())
            await ApiService.likePhoto(token, photo)
            let response = await ApiService.getLikes(token)
            response = response.map(e=>(
                {...e, liked_at: Number(e.liked_at)}
            ))
            dispatch(likeSlice.actions.fetchSuccess(response))
        } catch (e) {
            dispatch(likeSlice.actions.fetchError(e))
        }
    }
}

export const clearLikes = () => {
    return (dispatch) => {
        dispatch(likeSlice.actions.clear())
    }
}
