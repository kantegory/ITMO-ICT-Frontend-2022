import ApiService from "../../API/ApiService";
import {photoSlice} from "../slices/PhotoSlice";
import {useSelector} from "react-redux";

export const fetchPhotos = ({filterState, limit = 30, offset = 0}) => {
    return async (dispatch) => {
        try {
            dispatch(photoSlice.actions.fetching())
            const response = await ApiService.getPhotos({limit, offset, random: filterState.random})
            dispatch(photoSlice.actions.fetchSuccess(response.results))
        } catch (e) {
            dispatch(photoSlice.actions.fetchError(e))
        }
    }
}


export const clearPhotos = () => {
    return (dispatch) => {
        dispatch(photoSlice.actions.clearPhotos())
    }
}

export const fetchSearchPhotos = ({filterState, limit = 30, offset = 0}) => {
    return async (dispatch) => {
        try {
            dispatch(photoSlice.actions.fetching())
            const response = await ApiService.searchPhotos({
                limit,
                offset,
                keywords:filterState.selectedKeywords,
                tone:filterState.selectedTone,
                random:filterState.random,
            })
            dispatch(photoSlice.actions.fetchSuccess(
                response.results
            ))
        } catch (e) {
            dispatch(photoSlice.actions.fetchError(e))
        }
    }
}

