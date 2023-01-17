import React, {useEffect, useReducer, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {login} from "../store/actions/authActions";
import {useNavigate} from "react-router-dom";
import AppButton from "../components/AppButton";

const Login = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const dispatch = useDispatch()
    const {error, isAuth} = useSelector(state=>state.auth)
    const navigate = useNavigate()


    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(login(username,password))
    }

    useEffect(()=>{
        if(isAuth && !error){
            navigate("/")
        }
    },[error, isAuth])

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

                <AppButton onClick={handleSubmit} className="w-100" type="submit">Sign in</AppButton>

                <p className="mt-5 mb-3 text-muted">© 2022</p>
            </form>
        </div>
    );
};

export default Login;
