import React, {useState} from 'react';
import ApiService from "../API/ApiService";
import {useFetching} from "../hooks/useFetching";
import {useDispatch, useSelector} from "react-redux";
import {register} from "../store/actions/authActions";
import AppButton from "../components/AppButton";

const Registration = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
    const dispatch = useDispatch()
    const {user, token, isLoading, error} = useSelector(state=>state.auth)


    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(register(username, email, password))
    }

    return (
        <div className="form-signin w-100 m-auto">
            <h1>{error}</h1>
            <form method="post" action="#">
                <svg className="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap">
                    <use xlinkHref="#logo"/>
                </svg>
                <h1 className="h3 mb-3 fw-normal">Registration</h1>

                <div className="form-floating mb-2">
                    <input type="email" value={email} onChange={(e)=>{setEmail(e.target.value)}} className="form-control" id="floatingInput" placeholder="name@example.com"/>
                    <label htmlFor="floatingInput">Email address</label>
                </div>


                <div className="form-floating mb-2">
                    <input value={username} onChange={(e)=>{setUsername(e.target.value)}} type="text" className="form-control" id="username" placeholder="Username"/>
                    <label htmlFor="Username">Username</label>
                </div>

                <div className="form-floating mb-2">
                    <input value={password} onChange={(e)=>{setPassword(e.target.value)}} type="password" className="form-control" id="floatingPassword" placeholder="Password"/>
                    <label htmlFor="floatingPassword">Password</label>
                </div>


                <AppButton ariaLabel={"sign up"} onClick={handleSubmit} className="w-100" type="submit">Sign up</AppButton>
                <p className="mt-5 mb-3 text-muted">© 2022</p>
            </form>
        </div>
    );
};

export default Registration;
