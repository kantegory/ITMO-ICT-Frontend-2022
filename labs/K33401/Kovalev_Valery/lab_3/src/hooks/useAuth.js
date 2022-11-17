import {useReducer} from "react";
import {initialAuthState, userReducer} from "../reducers/userReducer";

export const useAuth = () => {
    const [authState, dispatch] = useReducer(userReducer, initialAuthState)

    return {
        isAuth: !!authState.username, ...authState
    }
}
