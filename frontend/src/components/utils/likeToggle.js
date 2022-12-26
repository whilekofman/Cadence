import { useDispatch } from "react-redux"
import { deleteLike, newLike } from "../../store/likes";



export const useToggleLike = (usersLike, currentUser, likeableType, likeableId) => {
    const dispatch = useDispatch()
    debugger
    if (usersLike.length) {
        // const likeId = 
        dispatch(deleteLike(usersLike[0].id))
    } else {
        const like = {
            likerId: currentUser.id,
            likeableType: likeableType,
            likeableId: likeableId
        
        }
        dispatch(newLike(like, like.likeableType, like.likeableId))
    }
}