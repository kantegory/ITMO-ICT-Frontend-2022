import axios from "axios";

export default class ApiService{
    constructor() {
        this.api_key = "RcTUFytOS2YUHSqsgEg3oL62hOFbB3Vq6I_qHi8qFls"
        this.base_url = "https://api.unsplash.com"
    }

    async getRandomPhoto(count=30){
        const response = await axios.get(this.base_url + "/photos/random", {
            params: {
                count: count,
                client_id: this.api_key
            }
        })
        return await response.data
    }

    async getPhotosByQuery(query, count=30){
        const response = await axios.get(this.base_url + "/search/photos", {
            params: {
                query:query,
                per_page: count,
                client_id: this.api_key
            }
        })
        return await response.data
    }
}
