import {useEffect} from "react";

export const useOnKeyDown = (callback, targetKey) => {
    useEffect(() => {
        const keyHandler = (event) => {
            if (event.key === targetKey) {
                callback()
            }
        }
        window.addEventListener('keydown', keyHandler)
        return () => window.removeEventListener('keydown', keyHandler)
    }, [callback, targetKey])
}