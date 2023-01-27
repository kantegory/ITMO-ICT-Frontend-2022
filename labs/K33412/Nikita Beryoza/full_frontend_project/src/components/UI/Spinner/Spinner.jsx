import React from 'react'
import cl from './Spinner.module.css'
import FadeInOut from "../FadeInOut/FadeInOut";

const Spinner = ({isLoading, children}) => {
    return (
        isLoading
            ? <FadeInOut show={isLoading} duration={500}>
                <div className='bg-white bg-gradient bg-opacity-75 spinner overflowHide'>
                    <div className={cl.loader}/>
                </div>
            </FadeInOut>
            : <>{children}</>
    )
}

export default Spinner;