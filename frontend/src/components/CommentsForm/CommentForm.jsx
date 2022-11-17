import { useState } from "react";

const CommentForm = (activity, user) => {
    
    const [comment, setComment] = useState('')

    return ( 
        <>
            <div className="comment-container">
                <div className="comment-field">
                    <textarea
                        name="comment" 
                        className="comment-input"
                        value={comment}
                        onChange={e => setComment(e.target.value)}
                        />
                </div>
            </div>
        </>
     );
}
 
export default CommentForm;