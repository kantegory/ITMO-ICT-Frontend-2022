import React, {useContext, useEffect} from 'react';
import Header from "../components/Header";
import Filter from "../components/Filter/Filter";
import {Context} from "../context";

const BasePage = ({children}) => {
    return (
        <div style={{position:"relative"}}>
            <Header/>
            <Filter/>
            {children}
        </div>
    );
};

export default BasePage;
