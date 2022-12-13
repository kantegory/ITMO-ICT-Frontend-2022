import React, {useEffect, useMemo} from 'react';
import {useLocation, useNavigate} from "react-router-dom";
import Select from 'react-select';
import Creatable from 'react-select/creatable';
import {useDispatch, useSelector} from "react-redux";
import {clearSelectedFields, fetchFilter, setTone, setKeywords} from "../../store/actions/filterActions";
import chroma from "chroma-js";
import styles from "./Filter.module.css"


const Filter = () => {
    const navigate = useNavigate()

    const dispatch = useDispatch()
    const {keywords, tones, selectedTone, selectedKeywords} = useSelector(state=>state.filter)

    useEffect(()=>{
        dispatch(fetchFilter())
    }, [dispatch])

    const tonesStyles = {
        control: (styles) => ({...styles, backgroundColor:"transperent"}),
        option: (styles, { data, isDisabled, isFocused, isSelected }) => {
            const color = chroma(data.color);
            return {...styles, backgroundColor:color.hex(), color:color.brighten(3).hex(), width:"98%", fontSize:"12px", borderRadius:"4px", height:"50px", marginLeft:"5px", marginBottom:"5px"}
        },
    }

    const keywordStyles = {
        control: (styles) => ({...styles, backgroundColor:"transperent"}),
    }

    const keywordsOptions = useMemo(()=>{
        return keywords.map(e=>({value:e.keyword, label:e.keyword}))
    }, [keywords, tones])

    const tonesOptions = useMemo(()=>{
        return tones.map(e=>({value:e, label:e, color:e}))
    }, [tones, keywords])

    const defaultKeywords = useMemo(()=>{
        return keywordsOptions.filter(e=> selectedKeywords.includes(e.value))
    },[selectedKeywords, keywordsOptions])

    // const defaultColors = useMemo(()=>{
    //     return colorsOptions.filter(e=> selectedColors.includes(e.value))
    // },[colorsOptions, selectedColors])

    const handleKeyword = (selectedOption) => {
        dispatch(setKeywords(selectedOption.map(e=>e.value)))
        navigate("/search")
    }

    const handleTone = (selectedOption) => {
        dispatch(setTone(selectedOption.value))
        navigate("/search")
    }

    return (
        <div className="container-xl">
            <div id={"filter"} className={styles.filter}>
                <Creatable aria-labelledby="choose keyword" defaultValue={defaultKeywords} styles={keywordStyles} options={keywordsOptions} isMulti onChange={handleKeyword}/>
                <Select aria-labelledby="choose tone" options={tonesOptions} onChange={handleTone} styles={tonesStyles}/>
            </div>
        </div>

    )
};

export default Filter;
