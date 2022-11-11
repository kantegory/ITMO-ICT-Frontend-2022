import axios from "axios";

const instance = axios.create({
    baseURL: 'http://127.0.0.1:8000/'
});



export default class ApiService{

    async getPhotos(params={}){
        const url = "/api/photos/"
        const response = await instance.get(url, {"params":params})
        const data = await response.data
        return {...data, "currentUrl": response.config.url, "url": url, ...response.config.params};
    }

    async getColors(){
        const response = await instance.get("/api/colors/", )
        return await response.data
    }

    async getKeywords(count=100){
        const response = await instance.get("/api/keywords/", {"params":{
            "count": count
            }})
        return await response.data
    }

    async searchPhotos(params={}){
        const url = "/api/search/"
        const response = await instance.get(url, {"params":params})
        const data = await response.data
        return {...data, "currentUrl": response.config.url, "url": url, ...response.config.params};
    }

    async registrationUser(username, email, password){
        const json = JSON.stringify({"username":username, "email":email, "password":password})
        const response = await instance.post("/api/auth/users/", json, {
            headers:{
                'Content-Type': 'application/json'
            }
        })
        return await response.data;
    }

    async loginUser(username, password){
        const json = JSON.stringify({"username":username, "password":password})
        const response = await instance.post("/auth/token/login/", json, {
            headers:{
                'Content-Type': 'application/json'
            }
        })
        return await response.data;
    }

    async getUser(){
        console.log(`Token ${localStorage.getItem("token")}`)
        const response = await instance.get("/api/auth/users/me/", {
            headers:{
                'Authorization': `Token ${localStorage.getItem("token")}`
            }
        })
        return await response.data;
    }
}
