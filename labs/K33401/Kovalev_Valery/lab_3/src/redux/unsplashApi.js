import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

const api_key = "RcTUFytOS2YUHSqsgEg3oL62hOFbB3Vq6I_qHi8qFls"

export const unsplashApi = createApi({
    reducerPath: 'unsplashApi',
    baseQuery: fetchBaseQuery({baseUrl:"https://api.unsplash.com/"}),
    endpoints: (build) => ({
        getRandomPhotos: build.query({
            query: (count) => `photos/random?count=${count ? count : 30}&client_id=${api_key}`,
        }),
        getPhotoByRequest: build.query({
            query:(query,count) => `search/photos?query=${query}&client_id=${api_key}&per_page=${count ? count : 30}`
        })
    })
})

export const {useGetRandomPhotosQuery, useGetPhotoByRequestQuery} = unsplashApi;

