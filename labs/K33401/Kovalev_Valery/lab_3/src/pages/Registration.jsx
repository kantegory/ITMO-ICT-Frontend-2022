import React, {useState} from 'react';
import ApiService from "../API/ApiService";
import {useFetching} from "../hooks/useFetching";

const Registration = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")

    const [fetchAuth, isFetching, fetchError] = useFetching(async ()=>{
        const api = new ApiService()
        const response = await api.registrationUser(username, email, password)
        console.log(response)
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        fetchAuth()
    }

    return (
        <div className="form-signin w-100 m-auto">
            <form method="post" action="#">
                <svg className="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap">
                    <use xlinkHref="#logo"/>
                </svg>
                <h1 className="h3 mb-3 fw-normal">Registration</h1>

                <div className="form-floating mb-2">
                    <input type="email" value={email} onChange={(e)=>{setEmail(e.target.value)}} className="form-control" id="floatingInput" placeholder="name@example.com"/>
                    <label htmlFor="floatingInput">Email address</label>
                </div>

                {/*<div className="form-floating">*/}
                {/*    <input type="text" className="form-control" id="name" placeholder="First name"*/}
                {/*           autoComplete="given-name"/>*/}
                {/*    <label htmlFor="name">First name</label>*/}
                {/*</div>*/}

                {/*<div className="form-floating mb-2">*/}
                {/*    <input type="text" className="form-control" id="surname" placeholder="Last name"*/}
                {/*           autoComplete="family-name"/>*/}
                {/*    <label htmlFor="surname">Last Name</label>*/}
                {/*</div>*/}

                <div className="form-floating mb-2">
                    <input value={username} onChange={(e)=>{setUsername(e.target.value)}} type="text" className="form-control" id="username" placeholder="Username"/>
                    <label htmlFor="Username">Username</label>
                </div>

                {/*<div className="form-floating mb-2">*/}
                {/*    <input type="text" className="form-control" id="photo-url" placeholder="Photo URL"/>*/}
                {/*    <label htmlFor="photo-url">Photo URL</label>*/}
                {/*</div>*/}

                <div className="form-floating mb-2">
                    <input value={password} onChange={(e)=>{setPassword(e.target.value)}} type="password" className="form-control" id="floatingPassword" placeholder="Password"/>
                    <label htmlFor="floatingPassword">Password</label>
                </div>


                <button onClick={handleSubmit} className="w-100 btn btn-lg btn-dark" type="submit">Sign up</button>
                <p className="mt-5 mb-3 text-muted">© 2022</p>
            </form>
        </div>
    );
};

export default Registration;
