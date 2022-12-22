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
    // // console.log(likesFiltered)
    // let likeToggle = false
    const heartClass = foo ? "material-symbols-outlined not-liked" :  "comment-liked-color material-symbols-outlined liked"

    

    // const heartClass = ["material-symbols-outlined not-liked", "material-symbols-outlined comment-liked-color  liked"]
    

    const handleCommentLike = e => {
        e.preventDefault()
        // likeToggle = !likeToggle

        // console.log(heartClass[0])
        // const swapHeartClass = heartClass.shift()
        // heartClass.push(swapHeartClass)
        // console.log(heartClass[0])

        setFoo(!foo)
        // console.log(foo, 'foo', heartClass, 'heartClass')

    }

    return ( 
        <button onClick={handleCommentLike} className={heartClass}>favorite</button>
     );
}
 
export default CommentLike;