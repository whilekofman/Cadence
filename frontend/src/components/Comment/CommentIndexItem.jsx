import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteComment, fetchComments } from "../../store/comments";
import { getSession } from "../../store/session";

const CommentIndexItem = ( { comment, athlete, updater } ) => {

    const dispatch = useDispatch()
    const currentUser = useSelector(getSession)
    const [deleted, setDeleted] = useState(false)
    // console.log(athlete)
    const {
        id,
        fname,
        lname,
        authorProfilePicture,
        body,
        activityId,
        authorId
        
    } = comment
    // debugger
    const handleDeleteComment = e => {
        e.preventDefault()
        // updateLength()
        console.log('dlete')
        dispatch(deleteComment(id))
        updater()
        // setLengthComments((length) => length--)
        // setDeleted((val) => !val)
        
    }

    // useEffect(()=> {
    //     dispatch(fetchComments())
    // }, [deleted])


    return ( 
        <div className="comment-container">
            <div className="comment-card">
                <div className="commenter-photo-container">
                    <img src={authorProfilePicture} alt="commenter-photo" className="commenter-photo"/>
                </div>
                <div className="commenter-name">
                    {`${fname} ${lname} `}
                </div>
                <div className="comment-body">
                    {`${body}`}
                </div>
                <div className="delete">
                    {athlete === authorId &&
                        <Link onClick={handleDeleteComment} className="delete-comment-link" to="">Delete</Link>
                    }
                </div>
            </div>
        </div>
     );
}
 
export default CommentIndexItem;