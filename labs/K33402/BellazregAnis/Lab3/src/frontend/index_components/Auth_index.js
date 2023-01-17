import React from "react";
import {InputText} from "primereact/inputtext";
import {Password} from "primereact/password";



export default function Auth_index(props) {


    function changeUser(e) {
        e.preventDefault();
        props.dispatch({type: "UPDATE_USER", user: e.target.value})
    }

    function changePassword(e) {
        e.preventDefault();
        props.dispatch({type: "UPDATE_PASSWORD", password: e.target.value})
    }

    return (
        <div>


            <h2 className="namer" style={{width: "100%"}}>Login</h2>
            <InputText
                className="login_field"
                id="username"
                value={props.user}
                onChange={changeUser}
            />

            <br/>

            <Password
                id="password"
                value={props.password}
                toggleMask={true}
                feedback={false}
                onChange={changePassword}
            />



        </div>
    );
}
