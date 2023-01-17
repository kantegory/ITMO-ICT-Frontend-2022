import React, {useContext, useEffect} from 'react';
import Header from "../components/Header";
import Filter from "../components/Filter/Filter";

const BasePage = ({children}) => {
    return (
        <div style={{position:"relative"}}>
            <Header/>
            {children}
        </div>
    );
};

export default BasePage;
