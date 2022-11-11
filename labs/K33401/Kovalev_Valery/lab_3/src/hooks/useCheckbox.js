import {useCallback, useEffect, useState} from "react";

export const useCheckbox = (values) =>{
    const [_values, _setValues] = useState([{"value":"", "checked":false, "index":0}])

    useEffect(()=>{
        _setValues(values.map((e, index)=>(
            {"value":e, "checked": false, "index": index}
        )))
    }, [])

    const handleChecked = useCallback(()=>{
        const handleChecked = (position) => {
            _setValues(_values.map((e, index)=>(
                index === position ? e.checked = true : e.checked = false
            )))
        }
    }, [])

    return [_values, handleChecked]
}
