import {useContext, useDebugValue} from "react";
import AuthContext from "../context/AuthProvider";

const useAuth = () => {
    const { auth } = useContext(AuthContext);
    useDebugValue(auth, auth => auth?.user ? "Вошел" : "Вышел")
    return useContext(AuthContext);
}

export default useAuth;