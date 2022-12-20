import { createAsyncThunk } from "@reduxjs/toolkit";
import { getCategories, getPhotosByKeyword } from "../../API/PhotosService";

export const fetchCategories = createAsyncThunk("categories/fetchCategories", async ({limit=10, offset = 0} = {}, {rejectWithValue, getState})=>{
    try {
        const response = await getCategories({limit, offset})
        const categories = {}
        for( const {keyword, total} of response.results){
            categories[keyword] = {photos: [], total}
            const response = await getPhotosByKeyword({keyword})
            categories[keyword].photos = response.results
        }
        return categories
    } catch (e) {
        return rejectWithValue(e.message)
    }
})

export const fetchPhotosByCategories = createAsyncThunk("categories/fetchPhotosByCategories", async (_, {rejectWithValue, getState})=>{
    try{
        const photosByCategory = {}
        
        getState.categories.categories.forEach(async (e)=>{
            const response = await getPhotosByKeyword({keyword:e, count:30, offset:0})
        })
    } catch(e){

    }
})