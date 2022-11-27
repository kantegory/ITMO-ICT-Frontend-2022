import React, {useEffect, useMemo} from 'react';
import {useLocation, useNavigate} from "react-router-dom";
import Select from 'react-select';
import Creatable from 'react-select/creatable';
import {useDispatch, useSelector} from "react-redux";
import {clearSelectedFields, fetchFilter, setColors, setKeywords} from "../../store/actions/filterActions";
import chroma from "chroma-js";
import styles from "./Filter.module.css"


const Filter = () => {
    const navigate = useNavigate()

    const dispatch = useDispatch()
    const {keywords, colors, selectedColors, selectedKeywords} = useSelector(state=>state.filter)

    useEffect(()=>{
        dispatch(fetchFilter())
    }, [dispatch])

    const colorStyles = {
        control: (styles) => ({...styles, backgroundColor:"transperent"}),
        option: (styles, { data, isDisabled, isFocused, isSelected }) => {
            const color = chroma(data.color);
            return {...styles, backgroundColor:color.hex(), color:color.brighten(3).hex(), width:"98%", fontSize:"12px", borderRadius:"4px", height:"50px", marginLeft:"5px", marginBottom:"5px"}
        },
        multiValue: (styles, {data}) => {
            return {...styles, backgroundColor: data.color, height:"25px"}
        }

    }

    const keywordStyles = {
        control: (styles) => ({...styles, backgroundColor:"transperent"}),
    }

    const keywordsOptions = useMemo(()=>{
        return keywords.map(e=>({value:e.keyword, label:e.keyword}))
    }, [keywords, colors])

    const colorsOptions = useMemo(()=>{
        return colors.map(e=>({value:e.color, label:e.color, color:e.color}))
    }, [colors, keywords])

    const defaultKeywords = useMemo(()=>{
        return keywordsOptions.filter(e=> selectedKeywords.includes(e.value))
    },[selectedKeywords, keywordsOptions])

    const defaultColors = useMemo(()=>{
        return colorsOptions.filter(e=> selectedColors.includes(e.value))
    },[colorsOptions, selectedColors])

    const handleKeyword = (selectedOption) => {
        dispatch(setKeywords(selectedOption.map(e=>e.value)))
        navigate("/search")
    }

    const handleColor = (selectedOption) => {
        dispatch(setColors(selectedOption.map(e=>e.value)))
        navigate("/search")
    }

    return (
        <div className="container-xl">
            <div id={"filter"} className={styles.filter}>
                <Creatable aria-labelledby="choose keyword" defaultValue={defaultKeywords} styles={keywordStyles} options={keywordsOptions} isMulti onChange={handleKeyword}/>
                <Select aria-labelledby="choose color" defaultValue={defaultColors} options={colorsOptions} isMulti onChange={handleColor} styles={colorStyles}/>
            </div>
        </div>

    )
};

export default Filter;
