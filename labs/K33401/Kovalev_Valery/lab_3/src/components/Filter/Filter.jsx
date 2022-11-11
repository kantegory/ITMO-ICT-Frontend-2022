import React, {useContext, useEffect, useMemo, useRef} from 'react';
import styles from "./Filter.module.css"
import {useLocation, useNavigate} from "react-router-dom";
import {Context} from "../../context";
import CategoryButton from "../CategoryButton";
import ScrollButton from "../ScrollButton";
import FilterField from "./filterField";


const Filter = () => {
    const context = useContext(Context);
    const [filter, setFilter] = [context.filter, context.setFilter]
    const setPhotos = context.setPhotos
    const location = useLocation()
    const navigate = useNavigate()

    useEffect(()=>{
        if(location.pathname !== "/search") setFilter({keywords: [], colors: []})
    },[location, setFilter])


    // useMemo(()=>{
    //     if (filter.keywords.length || filter.colors.length){
    //         navigate("/search")
    //     }
    // },[location])

    const categories = useRef(null)

    return (
        <div className={styles.filter + " container-xl"}>
            {
            !context.isFilterLoading && (
                    <div className={styles.filters}>
                        <ScrollButton scrollPx={300} elem={categories} direction={"left"}/>
                        <div ref={categories} className={styles.categories}>
                            {
                                context.keywords.map(({keyword, count}, index)=>(
                                    <CategoryButton key={index} keyword={keyword}/>
                                ))
                            }
                        </div>
                        <ScrollButton scrollPx={300} elem={categories} direction={"right"}/>
                        <FilterField name={"Colors"}>
                            {context.colors.map((color,index) => (
                                <div key={color} className={styles.colorCheckBox}>
                                    <input
                                        type="checkbox"
                                        id={`color-checkbox-${color}`}
                                        value={color}
                                        // checked={filter.colors.includes(color)}
                                        name={color}
                                    />
                                    <label htmlFor={`color-checkbox-${index}`}>{color}</label>
                                    <div className={styles.colorSquare} style={{background:color}}/>
                                </div>
                            ))}
                        </FilterField>
                    </div>
                )
        }
        </div>
    )
};

export default Filter;
