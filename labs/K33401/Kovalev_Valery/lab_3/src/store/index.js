import {combineReducers, configureStore} from "@reduxjs/toolkit";
import photoReducer from "./slices/PhotoSlice";
import authReducer from "./slices/AuthSlice"
import filterReducer from "./slices/filterSlice"
import likeReducer from "./slices/likeSlice"

const rootReducer = combineReducers({
    photo: photoReducer,
    auth: authReducer,
    filter: filterReducer,
    like: likeReducer
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}
