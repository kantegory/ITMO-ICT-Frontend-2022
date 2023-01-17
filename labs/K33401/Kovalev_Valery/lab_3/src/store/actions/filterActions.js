import ApiService from "../../API/ApiService";
import {filterSlice} from "../slices/filterSlice";

export const fetchFilter = () => {
    return async (dispatch) => {
        try {
            dispatch(filterSlice.actions.filterIsLoading())
            const colors = await ApiService.getColors()
            const keywords = await ApiService.getKeywords()
            dispatch(filterSlice.actions.fetchFilterSuccess({keywords, colors}))
        } catch (e) {
            dispatch(filterSlice.actions.filterError(e))
        }
    }
}

export const clearSelectedFields = () => {
    return (dispatch) => {
        dispatch(filterSlice.actions.clearSelectedFields())
    }
}

export const setColors = (colors) => {
    return (dispatch) => {
        dispatch(filterSlice.actions.setSelectedColors(colors))
    }
}

export const setKeywords = (keywords) => {
    return (dispatch) => {
        dispatch(filterSlice.actions.setSelectedKeywords (keywords))
    }
}
