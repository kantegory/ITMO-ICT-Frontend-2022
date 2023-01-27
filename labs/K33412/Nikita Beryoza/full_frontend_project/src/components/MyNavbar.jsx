import React from 'react';
import Sidebar from "./Sidebar/Sidebar";

const MyNavbar = ({children}) => {

    return (
        <div className={'d-flex w-100'}>
            <Sidebar/>
            {children}
        </div>
    );
};

export default MyNavbar;