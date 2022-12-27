import { useDispatch, useSelector } from "react-redux";
import { deleteLike, newLike } from "../../store/likes";
import { getSession } from "../../store/session";

const ActivityLike = ( { activity, activityLikes, firstLike} ) => {
    const currentUser = useSelector(getSession)


    const dispatch = useDispatch()

    
    const usersLike = activityLikes.filter(like => like.likerId === currentUser.id)
    
    
    const thumbCss = !usersLike.length ? "material-symbols-outlined thumbs-up thumbs-not-liked material-index" : "material-symbols-outlined thumbs-up thumbs-liked thumbs-liked-color material-index"
    


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
    if (firstLike) {
        return(
            <div className='first-like-index' onClick={toggleLike}>Be the first to give kudos!</div>
        ) 
    }
    
    return ( 
        <>
            <button className="button-index" onClick={toggleLike}>
                <div className={thumbCss}>thumb_up</div>
            </button>
        </>
     );
}
 
export default ActivityLike;

