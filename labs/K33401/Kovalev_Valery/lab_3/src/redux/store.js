import {configureStore} from "@reduxjs/toolkit";
import {unsplashApi} from "./unsplashApi";

export const store = configureStore({
    reducer:{
        [unsplashApi.reducerPath]: unsplashApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(unsplashApi.middleware)
});
