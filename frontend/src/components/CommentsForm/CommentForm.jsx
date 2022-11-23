import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import * as commentActions from "../../store/comments"

const CommentForm = ({ activityId, authorId }) => {
    const dispatch = useDispatch()
    const [body, setBody] = useState('')
    const [submitted, setSubmitted] = useState(false)
    // const activityId = activity
    // const userId = user.id
    const hanldeCommentSubmit = e => {
        e.preventDefault();
        
            

            const comment = {
                activityId,
                authorId,
                body
            } 
            dispatch(commentActions.newComment(comment))
            dispatch(commentActions.fetchComments())

            setBody('')
            setSubmitted((val) => !val)
            

        
    }

    useEffect(()=> {
        dispatch(commentActions.fetchComments())
        
    }, [submitted])

    return ( 
        <>
            <div className="comment-container">
                <form action="" className="comment-form">
                    <div className="comment-field">
                        <textarea
                            name="comment" 
                            className="comment-input"
                            value={body}
                            onChange={e => setBody(e.target.value)}
                            />
                    </div>
                    <button className="submit-comment" onClick={hanldeCommentSubmit}>submit comment</button>
                </form>
            </div>
        </>
     );
}
 
export default CommentForm;