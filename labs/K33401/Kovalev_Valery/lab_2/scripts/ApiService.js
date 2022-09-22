import {fetchHandler} from "./utils.js";

export class ApiService{
    constructor() {
        this.api_key = "RcTUFytOS2YUHSqsgEg3oL62hOFbB3Vq6I_qHi8qFls"
        this.base_url = "https://api.unsplash.com"
    }

    url(path){
        return `${this.base_url}${path}/?client_id=${this.api_key}&count=30`
    }

    async fetchRandomPhotos(){
        return await fetchHandler(this.url("/photos/random"))
    }

    // async fetchPhotosByQuery(query){
    //     return await fetchHandler(this.url("search/photos/", {query:query}))
    // }

}

