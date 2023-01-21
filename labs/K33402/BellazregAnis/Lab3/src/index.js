import React from 'react';
import ReactDOM from 'react-dom';
import MainComponent from "./frontend/MainComponent";
import reportWebVitals from './reportWebVitals';
import {createStore} from "redux";
import {Provider} from "react-redux";



const defaultState = {
    user: "",
    password: "",
    x: null,
    y: "",
    r: null,
    userID: localStorage.getItem("userID"),
    login: localStorage.getItem("login"),
    data: []
}

const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case "LOAD_TABLE":
            for (let i = 0; i < action.data.length; i++){
                action.data[i].user = action.data[i].userName;
            }
            return {...state, data: action.data}
        case "SET_LOG_IN":
            return {...state, login: action.login}
        case "GET_LOG_IN":
            return state.login;
        case "SAVE_POINT":
            let new_data = [{x: action.point.x,
                y: action.point.y,
                r: action.point.r,
                execTime: action.point.execTime,
                curTime: action.point.curTime,
                hit: action.point.hit,
            user: action.point.userName}];
            let full_data = state.data.concat(new_data)
            return {...state, data: full_data};
        case "UPDATE_USER":
            return {...state, user: action.user}
        case "UPDATE_PASSWORD":
            return {...state, password: action.password}
        case "SET_X":
            return {...state, x: action.x}
        case "SET_Y":
            return {...state, y: action.y}
        case "SET_R":
            return {...state, r: action.r}
        case "LOG_IN":
            localStorage.setItem("login", action.login);
            localStorage.setItem("userID", action.userID);
            if (action.login == null || action.login === ""){
                state.r = null;
            }
            return {...state, login: action.login, userID: action.userID};
        default:
            return state
    }
}

const store = createStore(reducer, defaultState)



ReactDOM.render(
    <Provider store={store}>
        <React.StrictMode>
            <MainComponent/>
        </React.StrictMode>
    </Provider>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
