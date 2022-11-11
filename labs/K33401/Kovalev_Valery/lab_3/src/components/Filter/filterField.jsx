import React, {useRef, useState} from 'react';
import styles from "./filterField.module.css"
import {useOutsideClick} from "../../hooks/useOutsideClick"
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Button from "react-bootstrap/Button";


const FilterField = ({name, children}) => {
    const [isOpen, setIsOpen] = useState(false)
    const ref = useOutsideClick(()=>{setIsOpen(false)})

    return (
        <div className={styles.filter_field}>
            <Button variant="dark" onClick={()=>{setIsOpen(!isOpen)}}>{name} &#9660;</Button>
            <div ref={ref} className={isOpen ? styles.opened_filter_menu : styles.closed_filter_menu}>
                {children}
            </div>
        </div>
    );
};

export default FilterField;
