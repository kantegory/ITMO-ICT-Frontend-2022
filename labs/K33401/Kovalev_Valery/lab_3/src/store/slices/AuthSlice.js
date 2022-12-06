import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    user: {},
    token: localStorage.getItem("token") ?? "",
    isLoading: false,
    isAuth: false,
    error: ""
}

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        loginSuccess(state, action){
            state.user = action.payload.user
            state.token = action.payload.token
            state.isLoading = false
            state.isAuth = true
            localStorage.setItem("token", action.payload.token)
            state.error = ""
        },
        loginIsLoading(state){
            state.isLoading = true
        },
        loginError(state, action){
            state.isLoading = false
            state.isAuth = false
            state.error = action.payload.message
            state.user = {}
            state.token = ""
        },
        logout(state){
            state.isLoading = false
            state.isAuth = false
            state.user = {}
            state.token = ""
            state.error = ""
            localStorage.removeItem("token")
        }
    }
})

export default authSlice.reducer
