import { API } from "."

export const  getCategories = async ({limit = 5, offset = 0} = {}) => {
    const response = await API.get("keywords/", {params:{
        limit, offset
    }})
    return response.data
}

export const getPhotosByKeyword = async ({keyword, count, offset}) => {
    const response = await API.get("search/", {params:{
        count, offset, "keywords": keyword
    }})
    return response.data
}