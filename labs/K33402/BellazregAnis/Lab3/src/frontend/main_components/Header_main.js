import React from "react";



function Header_main(props) {

    return (
        <div>
            <div className="header">
                <h2  style={{color: "white"}}> Bellazreg Anis</h2>
            </div>

            <div className="header">
                <h2 style={{color: "white"}}> </h2>
            </div>

            <div className="header">
                <h2  style={{color: "white", paddingRight: "20px"}}> Group: K33402</h2>
            </div>

            <div className="header">
                <h2  style={{color: "white", paddingRight: "20px"}}>User: {props.login} </h2>
            </div>

            <div className="clear">
            </div>
        </div>
    );
}

export default Header_main;