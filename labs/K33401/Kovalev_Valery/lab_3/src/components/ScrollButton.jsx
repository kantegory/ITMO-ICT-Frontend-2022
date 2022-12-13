import React from 'react';
import Button from "react-bootstrap/Button";

const ScrollButton = ({scrollPx, elem, direction, ...props}) => {
    if(!["left", "right"].includes(direction)){
        throw new Error("Only left or right direction")
    }

    let icon = <svg></svg>
    if(direction==="left"){
        icon = (
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                 className="bi bi-chevron-compact-left" viewBox="0 0 16 16">
                <path fillRule="evenodd"
                      d="M9.224 1.553a.5.5 0 0 1 .223.67L6.56 8l2.888 5.776a.5.5 0 1 1-.894.448l-3-6a.5.5 0 0 1 0-.448l3-6a.5.5 0 0 1 .67-.223z"/>
            </svg>
        )
    } else {
        icon = (
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                 className="bi bi-chevron-compact-right" viewBox="0 0 16 16">
                <path fillRule="evenodd"
                      d="M6.776 1.553a.5.5 0 0 1 .671.223l3 6a.5.5 0 0 1 0 .448l-3 6a.5.5 0 1 1-.894-.448L9.44 8 6.553 2.224a.5.5 0 0 1 .223-.671z"/>
            </svg>
            )
    }

    const handleScroll = () =>{
        if(direction==="left"){
            elem.current.scrollLeft -= scrollPx;
        } else {
            elem.current.scrollLeft += scrollPx;
        }
    }

    return (
        <Button onClick={handleScroll} variant="secondary" {...props}>
            {icon}
        </Button>
    );
};

export default ScrollButton;
