import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

const api_key = "RcTUFytOS2YUHSqsgEg3oL62hOFbB3Vq6I_qHi8qFls"

export const unsplashApi = createApi({
    reducerPath: 'unsplashApi',
    baseQuery: fetchBaseQuery({baseUrl:"https://api.unsplash.com/"}),
    endpoints: (build) => ({
        getRandomPhotos: build.query({
            query: (params) => `photos/random?count=${params.count ? params.count : 30}&orientation=${params.orientation ? params.orientation : ""}&client_id=${api_key}`,
        }),
        getPhotoByRequest: build.query({
            query:(params) => `search/photos?query=${params.query}&client_id=${api_key}&per_page=${params.count ? params.count : 30}`
        })
    })
})

export const {useGetRandomPhotosQuery, useGetPhotoByRequestQuery} = unsplashApi;

