import { useState } from "react"
import { useSelector } from "react-redux"
import { getLikes } from "../../store/likes"
import { getSession } from "../../store/session"

const CommentLike = ( { commentId } ) => {
    const [foo, setFoo] = useState(false)
    const currentUser = useSelector(getSession)
    const likes = useSelector(getLikes)
    
    const commentLikes = likes.filter(like => 
        like.likeableType === "Comment" && like.likeableId === commentId)
    
    const userLike = commentLikes.filter(like => like.likerId === currentUser.id)
    
    const commentLikeText = commentLikes.length ? `${commentLikes.length} likes` : ``
    // console.log(userLike)
    // console.log(commentLikes)

    // let likeToggle = false
    const heartClass = !userLike.length ? "material-symbols-outlined not-liked" :  "comment-liked-color material-symbols-outlined liked"

    


    const handleCommentLike = e => {
        e.preventDefault()
        
        setFoo(!foo)
        // console.log(foo, 'foo', heartClass, 'heartClass')

    }

    return (
        <>
            <div onClick={handleCommentLike} className={heartClass}>favorite  {commentLikeText}</div>
       
        </>
     );
}

 
export default CommentLike;