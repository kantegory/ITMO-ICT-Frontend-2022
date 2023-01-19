import {fetchHandler} from "./utils.js";

export class ApiService{
    constructor() {
        this.api_key = "BOkeOE9NuQ8QFpfoIXnu0zC7gD-FgG7ocyZynYSC4hA"
        this.base_url = "https://api.unsplash.com"
    }

    url(path, params= {}){
        let query = "?";
        params["client_id"]=this.api_key
        Object.entries(params).forEach(e=>{
            query+=`${e[0]}=${e[1]}&`
        })
        query = query.slice(0,-1)
        return `${this.base_url}${path}/${query}`
    }

    async fetchRandomPhotos(){
        return await fetchHandler(this.url("/photos/random", {count:27}))
    }

    async fetchPhotosByQuery(query){
        const response = await fetchHandler(this.url("/search/photos", {query:query, per_page:27}))
        return response.results
    }
}
