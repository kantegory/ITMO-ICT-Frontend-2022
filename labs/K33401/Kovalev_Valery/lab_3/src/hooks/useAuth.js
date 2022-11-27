import {useEffect, useMemo, useReducer} from "react";
import {useDispatch, useSelector} from "react-redux";
import {initLogin} from "../store/actions/authActions";


export const useAuth = () => {
    const {user, isLoading, token, error, isAuth} = useSelector(state=>state.auth)
    return {isAuth, isLoading, token, user, error}
}
