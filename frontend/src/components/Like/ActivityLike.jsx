import { useDispatch, useSelector } from "react-redux";
import { deleteLike, newLike } from "../../store/likes";
import { getSession } from "../../store/session";

const ActivityLike = ( { activity, activityLikes } ) => {
    const currentUser = useSelector(getSession)


    const dispatch = useDispatch()



    const usersLike = activityLikes.filter(like => like.likerId === currentUser.id)

        
    const thumbCss = !usersLike.length ? "material-symbols-outlined thumbs-up thumbs-not-liked" : "material-symbols-outlined thumbs-up thumbs-liked thumbs-liked-color"


    const toggleLike = e => {
        e.preventDefault()
        
        if (usersLike.length) {
            // const likeId = 
            dispatch(deleteLike(usersLike[0].id))
        } else {
            const like = {
                likerId: currentUser.id,
                likeableType: "Activity",
                likeableId: activity.id
            
            }
            dispatch(newLike(like, like.likeableType, like.likeableId))
        }

    }
    
    return ( 
        <>
        <button onClick={toggleLike}>
            <div className={thumbCss}>thumb_up</div>
        </button>
        </>
     );
}
 
export default ActivityLike;

