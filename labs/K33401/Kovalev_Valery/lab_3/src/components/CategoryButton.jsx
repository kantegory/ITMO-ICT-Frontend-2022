import React, {useContext, useEffect, useMemo, useState} from 'react';
import Button from "react-bootstrap/Button";
import {useNavigate} from "react-router-dom";
import {Context} from "../context";

const CategoryButton = ({keyword}) => {
    const navigate = useNavigate()
    const context = useContext(Context);
    const [filter, setFilter] = [context.filter, context.setFilter]
    const wordIn = useMemo(()=>(filter.keywords.includes(keyword)), [filter])

    const handleClick= () =>{
        navigate("/search")
        if(wordIn){
            const keywords = filter.keywords.filter(elem=> elem !== keyword)
            setFilter({...filter, "keywords": keywords})
        } else {
            const keywords = [...filter.keywords, keyword]
            setFilter({...filter, "keywords": keywords})
        }
    }

    return (
        <Button style={{textTransform:"capitalize", whiteSpace:"nowrap"}} variant={wordIn ? "light" : "dark"} onClick={()=>{
            handleClick()
        }}>
            {keyword}
        </Button>
    );
};

export default CategoryButton;
