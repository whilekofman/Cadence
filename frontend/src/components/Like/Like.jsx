import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteLike, newLike } from "../../store/likes";
import { getSession } from "../../store/session";

const Like = ( { activity, activityLikes, userLikesActivity } ) => {
    const currentUser = useSelector(getSession)
    const [likeStyle, setLikeStyle] = useState(false)
    // console.log(userLikesActivity, activity.id)
    // for(let i = 0; i < likes.length; i++){
    //     if (currentUser.id === likes[i].likerId) setLikeStyle(true)//console.log('You like this') 
    // }
    // console.log(likes[0].likerId)
    // if(likes[0].likerId === currentUser.id) setLikeStyle(true)//console.log("YOU LIKE THIS")
    // if(currentUser.id === likes. )
    const dispatch = useDispatch()
    
    useEffect(() => {
        // if(userLikesActivity) setLikeStyle(userLikesActivity)
        
    }, [likeStyle])

    // useEffect(() => {
    //     dispatch(deleteLike)
    // }, [])
    
    const thumbCss = likeStyle === userLikesActivity ? "material-symbols-outlined thumbs-up thumbs-not-liked" : "material-symbols-outlined thumbs-up thumbs-liked thumbs-liked-color"
    // console.log(likeStyle, userLikesActivity, thumbCss, activity.id)

    const usersLike = activityLikes.filter(like => like.likerId === currentUser.id)

    const toggleLike = e => {
        e.preventDefault()
        // console.log('Click', usersLike[0].id)
        
        if (userLikesActivity) {
            const likeId = 
            dispatch(deleteLike(usersLike[0].id))
        } else {
            const like = {
                likerId: currentUser.id,
                likeableType: "Activity",
                likeableId: activity.id
            
            }
            dispatch(newLike(like))
        }
        setLikeStyle((like) => !like)



    }
    
    
    return ( 
        <>
        <button onClick={toggleLike}>
            <div className={thumbCss}>thumb_up</div>
        </button>
        </>
     );
}
 
export default Like;

// "material-symbols-outlined thumbs-up thumbs-not-liked"