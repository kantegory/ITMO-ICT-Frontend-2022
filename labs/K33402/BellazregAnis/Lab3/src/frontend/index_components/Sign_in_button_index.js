
import React from "react";
import axios from "axios";


function Sign_in_button_index(props) {

    function logIn() {

        axios.post(`http://localhost:8080/users/auth`, {userName: props.user, userPassword: props.password})

            .then(response => {
                if (response.status === 200) {
                    localStorage.setItem("token", response.data.accessToken);
                    localStorage.setItem("refreshToken", response.data.refreshToken);
                    props.dispatch({type: "LOG_IN", login: response.data.userName, userID: response.data.userID})
                }


            })
            .catch(function (error) {
                alert(error.response.data.message.toString())


            })

    }

    return (

            <button onClick={logIn} className="link_to_main">Login</button>

    );
}

export default Sign_in_button_index;