import axios from "axios";

const instance = axios.create({
    baseURL: 'http://127.0.0.1:8000/'
});



export default class ApiService{

    static async getPhotos(params={}){
        const url = "/api/photos/"
        const response = await instance.get(url, {"params":params})
        const data = response.data
        return {...data, "currentUrl": response.config.url, "url": url, ...response.config.params};
    }

    static async getColors(){
        const response = await instance.get("/api/colors/", )
        return await response.data
    }

    static async getKeywords(){
        const response = await instance.get("/api/keywords/")
        return await response.data.results
    }

    static async searchPhotos(params={}){
        const url = "/api/search/"
        const response = await instance.get(url, {"params":params})
        const data = await response.data
        return {...data, "currentUrl": response.config.url, "url": url, ...response.config.params};
    }

    static async registrationUser(username, email, password){
        const json = JSON.stringify({"username":username, "email":email, "password":password})
        const response = await instance.post("/api/auth/users/", json, {
            headers:{
                'Content-Type': 'application/json'
            }
        })
        return await response.data;
    }

    static async getToken(username, password){
        const json = JSON.stringify({"username":username, "password":password})
        const response = await instance.post("/api/auth/token/login/", json, {
            headers:{
                'Content-Type': 'application/json'
            }
        })
        return await response.data.auth_token;
    }

    static async getUser(token){
        const response = await instance.get("/api/auth/users/me/", {
            headers:{
                'Authorization': `Token ${token}`
            }
        })
        return await response.data;
    }

    static async logout(token){
        await instance.post("/api/auth/token/logout/",{}, {
            headers:{
                'Authorization': `Token ${token}`
            }
        })
    }

    static async likePhoto(token, photo) {
        await instance.post("/api/user/likes/create", {
            photo: photo.photo_id
        }, {
            headers: {
                'Authorization': `Token ${token}`
            }
        })
    }

    static async getLikes(token) {
        const response = await instance.get("/api/user/likes/", {
            headers:{
                'Authorization': `Token ${token}`
            }
        })
        return await response.data;
    }

    static async unlikePhoto(token, id) {
        await instance.delete(`/api/user/likes/${id}`, {
            headers:{
                'Authorization': `Token ${token}`
            }
        })
    }
}
