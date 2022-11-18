import { useState } from "react";
import { useDispatch } from "react-redux";
import * as commentActions from "../../store/comments"

const CommentForm = ({ activity, user }) => {
    const dispatch = useDispatch()
    const [body, setBody] = useState('')
    console.log(activity, user)
    // const userId = user.id
    const hanldeCommentSubmit = e => {
        e.preventDefault();
        
        

            const comment = {
                activity,
                user,
                body
            } 
            console.log(comment)
            dispatch(commentActions.newComment(comment))

        
    }

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