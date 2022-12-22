import {useDispatch, useSelector} from "react-redux";
import {useMemo} from "react";

export const useLikedPhotos = () => {
    const dispatch = useDispatch()
    const {likes} = useSelector(state=>state.like)
    const likedPhotos = useMemo(()=>(likes.map(e=>(e.photo))), [likes])
    return {likes, likedPhotos}
}
