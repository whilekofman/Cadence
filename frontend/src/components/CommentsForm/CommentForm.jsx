import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as commentActions from "../../store/comments"
import { getSession } from "../../store/session";

const CommentForm = ({ activityId, authorId }) => {
    const dispatch = useDispatch()
    const [body, setBody] = useState('')
    const [submitted, setSubmitted] = useState(false)
    const currentUser = useSelector(getSession)
    console.log(currentUser)
    const athleteProfilePicture = currentUser.profileUrl

    const [userAvitar, setUserAvitar] = useState(athleteProfilePicture ? athleteProfilePicture : "https://aa-cadence-dev.s3.amazonaws.com/adyson.jpeg")

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
            setSubmitted((val) => !val)

            setBody('')
            

        
    }
    const handleEnterKey = e => {
        if (e.keyCode === 13 && e.shiftKey === false){
            e.preventDefault()
            hanldeCommentSubmit(e)
        }

    } 

    useEffect(()=> {
        dispatch(commentActions.fetchComments())
        
    }, [submitted])

    return ( 
        <>
            <div className="comment-container">
                <form action="" className="comment-form">
                    <div className="comment-form-picture-container">
                        <img className="comment-profile-photo" src={userAvitar}></img>
                    </div>
                    <div className="comment-field">
                        <textarea
                            name="comment" 
                            className="comment-input"
                            value={body}
                            placeholder='Add a comment'
                            onChange={e => setBody(e.target.value)}
                            onKeyDown={handleEnterKey}
                            />
                    </div>
                    <button className="submit-comment" onClick={hanldeCommentSubmit} disabled={!body.length}>Post</button>
                </form>
            </div>
        </>
     );
}
 
export default CommentForm;