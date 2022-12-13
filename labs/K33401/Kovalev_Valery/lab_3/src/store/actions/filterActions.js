import ApiService from "../../API/ApiService";
import {filterSlice} from "../slices/filterSlice";

export const fetchFilter = () => {
    return async (dispatch) => {
        try {
            dispatch(filterSlice.actions.filterIsLoading())
            const keywords = await ApiService.getKeywords()
            dispatch(filterSlice.actions.fetchFilterSuccess(keywords))
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

export const setTone = (tone) => {
    return (dispatch) => {
        dispatch(filterSlice.actions.setSelectedTone(tone))
    }
}

export const setKeywords = (keywords) => {
    return (dispatch) => {
        dispatch(filterSlice.actions.setSelectedKeywords (keywords))
    }
}
