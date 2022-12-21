import { useSelector } from "react-redux"
import { getLikes } from "../../store/likes"
import { getSession } from "../../store/session"

const CommentLike = ( { commentId } ) => {

    const currentUser = useSelector(getSession)
    const likes = useSelector(getLikes)
    
    const commentLikes = likes.filter(like => 
        like.likeableType === "Comment" && like.likeableId === commentId)
    
    const userLike = commentLikes.filter(like => like.likerId === currentUser.id)
    // // console.log(likesFiltered)
    // let likeToggle = false
    // const heartClass = likeToggle ? "material-symbols-outlined not-liked" :  "comment-liked-color material-symbols-outlined liked"

    const heartClass = ["material-symbols-outlined not-liked", "comment-liked-color material-symbols-outlined liked"]

    const handleCommentLike = e => {
        e.preventDefault()
        console.log(heartClass)
        // likeToggle = !likeToggle

        console.log(heartClass[0])
        const swapHeartClass = heartClass.shift()
        heartClass.push(swapHeartClass)
        console.log(heartClass[0])

    }

    return ( 
        <div onClick={handleCommentLike} className={heartClass[0]}>favorite</div>
     );
}
 
export default CommentLike;