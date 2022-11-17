import React, {useReducer, useState} from 'react';
import {useFetching} from "../hooks/useFetching";
import ApiService from "../API/ApiService";
import {initialAuthState, userReducer} from "../reducers/userReducer";
import {doLogin} from "../API/loginService";
import {useAuth} from "../hooks/useAuth";

const Login = () => {
    const [authState, dispatch] = useReducer(userReducer, initialAuthState)
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const user = useAuth()

    const handleSubmit = (e) => {
        e.preventDefault()
        doLogin(dispatch, {username, password})
    }

    return (
        <div className={"form-signin w-100 m-auto"}>
            <form method="post" action="#">
                <h1>{"Hello"}</h1>
                <svg className="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap">
                    <use xlinkHref="#logo"/>
                </svg>
                <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

                <div className="form-floating mb-2">
                    <input value={username} onChange={(e)=>{setUsername(e.target.value)}} type="text" className="form-control" id="username" placeholder="Username"/>
                    <label htmlFor="Username">Username</label>
                </div>

                <div className="form-floating mb-2">
                    <input value={password} onChange={(e)=>{setPassword(e.target.value)}} type="password" className="form-control" id="floatingPassword" placeholder="Password"/>
                    <label htmlFor="floatingPassword">Password</label>
                </div>

                <div className="checkbox mb-3">
                    <label>
                        <input type="checkbox" value="remember-me"/> Remember me
                    </label>
                </div>
                <button onClick={handleSubmit} className="w-100 btn btn-lg btn-dark" type="submit">Sign in</button>
                <p className="mt-5 mb-3 text-muted">© 2022</p>
            </form>
        </div>
    );
};

export default Login;
