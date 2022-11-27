import React from 'react';
import Button from "react-bootstrap/Button";

const AddButton = ({style, className}) => {
    return (
        <Button aria-label="add photo to collection" className={className} variant="secondary" style={{borderRadius:"50%", width:"50px", height:"50px", ...style}}>
            <svg style={{width:"25px", height:"25px",fill:"none", stroke:"var(--background-color)"}}>
                <use xlinkHref="#add"></use>
            </svg>
        </Button>
    );
};

export default AddButton;
