import { useEffect, useState } from "react";
import CommentIndexItem from "./CommentIndexItem";
// import { deleteComment, fetchComments } from "../../store/comments";
import { useDispatch } from "react-redux";

const CommentIndex = ( { comments, athlete, updater } ) => {
        // const [cts, setCts] = useState(comments)
    // const commentListElements = comments.map((comment) => if (comment.id === activity) {
    // <div className='comment-index-body' key={comment.id}><CommentIndexItem comment={comment} } /></div>)
    const dispatch = useDispatch()

//     console.log(lengthComments)

//     useEffect(() => {
//         dispatch(fetchComments())

//     }, [lengthComments])



//    const handleDeleteComment = (e, id ) => {
//         e.preventDefault()
//         console.log("HELP")
        
//         console.log(id)
//         // updateLength()
//         dispatch(deleteComment(id))
//         // setLengthComments((length) => length--)
//         // setDeleted((val) => !val)
        
//     }

//     const log = () => {
//         setLengthComments(comments.length)
//         console.log(`first ${lengthComments}`)

//         setLengthComments(length => length - 1)
//         console.log(lengthComments)
//         // return true
//     }
//     const deleteCommentById = (id) => {

//     }
    const commentListElements = comments.map((comment) => <div className='comment-index-body' key={comment.id}><CommentIndexItem comment={comment} athlete={athlete} updater={() => updater()}/></div>)






//     const handleDeleteComment = e => {
//         e.preventDefault()
//         dispatch(deleteComment(id))
        
//     }

    return ( 
            <div className='comment-index-body'>
                    {`length: ${commentListElements.length}`}
                    {commentListElements}
            </div>
     );
}
 
export default CommentIndex;