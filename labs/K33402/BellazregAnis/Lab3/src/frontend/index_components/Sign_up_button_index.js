
import React from "react";
import axios from "axios";


function Sign_up_button_index(props) {

    function signUp() {

        axios.post(`http://localhost:8080/users/register`, {userName: props.user, userPassword: props.password})

            .then(response => {
                if (response.status === 200) {
                    alert("User created")
                }


            })
            .catch(function (error) {
                alert(error.response.data.message.toString())


            })

    }

    return (

            <button onClick={signUp} className="link_to_main">Sign up</button>

    );
}

export default Sign_up_button_index;