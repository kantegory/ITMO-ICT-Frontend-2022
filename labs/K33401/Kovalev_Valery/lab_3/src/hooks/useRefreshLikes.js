import {fetchLike} from "../store/actions/likeActions";
import {useAuth} from "./useAuth";
import {useDispatch} from "react-redux";
import {useEffect} from "react";

export const useRefreshLikes = (refresh) => {
    const dispatch = useDispatch()
    const {token} = useAuth()
    useEffect(()=>{
        dispatch(fetchLike(token))
    }, [dispatch, refresh])
}
