import axios from "../http/index";
import useAuth from "./useAuth";

const useLogout = () => {

    const { setAuth } = useAuth();

    return async () => {
        setAuth({})
        try {
            const response = await axios('/logout', {
                withCredentials: true
            });

        } catch (err) {
            console.error(err);
        }
    };
}

export default useLogout;