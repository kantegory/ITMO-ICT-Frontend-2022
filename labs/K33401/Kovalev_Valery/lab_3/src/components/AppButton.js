import React from 'react';
import Button from "react-bootstrap/Button";

const AppButton = ({children, onClick, className, ariaLabel}) => {
    return (
        <Button aria-label={ariaLabel} className={className} onClick={onClick} style={{background:"var(--primary-color)", border:"1px solid var(--border-color)", borderRadius:"4px", color:"var(--background-color)"}}>
            {children}
        </Button>
    );
};

export default AppButton;
