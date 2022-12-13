import React from 'react';
import Button from "react-bootstrap/Button";
import {AiOutlineFolderAdd} from "react-icons/ai"

const AddButton = ({style, className}) => {
    return (
        <Button aria-label="add photo to collection" className={className} variant="secondary" style={{borderRadius:"50%", width:"50px", height:"50px", ...style}}>
            <AiOutlineFolderAdd size={25}/>
        </Button>
    );
};

export default AddButton;
