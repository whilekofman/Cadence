import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteComment, fetchComments } from "../../store/comments";
import { getSession } from "../../store/session";
import CommentLike  from "../Like/CommentLike";
import dayjs from "dayjs"
import relativeTime from "dayjs/plugin/relativeTime"
import FollowButton from "../FollowButton";
// const dayjs = require('dayjs')
// const relativeTime = require('dayjs/plugin/relativeTime')
dayjs.extend(relativeTime)

const CommentIndexItem = ( { comment, athlete } ) => {

    const dispatch = useDispatch()
    const currentUser = useSelector(getSession)
    // const [deleted, setDeleted] = useState(false)
    const {
        id,
        fname,
        lname,
        authorProfilePicture,
        body,
        createdAt,
        activityId,
        authorId
        
    } = comment

    const TimeSinceComment = dayjs().to(dayjs(createdAt))
    const [show, setShow] = useState(false)
    const handleDeleteComment = e => {
        e.preventDefault()
        dispatch(deleteComment(id))   
    }
    const [userAvitar, setUserAvitar] = useState(authorProfilePicture ? authorProfilePicture : "https://aa-cadence-dev.s3.amazonaws.com/adyson.jpeg")

    const time = () => {
        return(
        <div className="time-since-comment">
            {TimeSinceComment}
        </div>)
    }

    const timeDeleteFollow = () => {
        if (athlete === currentUser.id || currentUser.id === authorId){
            return(<>
                    <div className="time-since-comment">
                        {TimeSinceComment}
                    </div>
                    <div className="delete-comment" onClick={handleDeleteComment}> | Delete</div>
                </>
            )}
            else return(
                <div className="time-since-comment">
                    {TimeSinceComment}
                    <FollowButton location="commentIndex" id={authorId} />
                 </div>)
    }
    const [showFollowDelete, setFollowDelete] = useState(time())



    return ( 
        <div className="comment-container">
            <div className="comment-card"
            onMouseEnter={() => setFollowDelete(timeDeleteFollow)}
            onMouseLeave={() => setFollowDelete(time)}>
                <div className="commenter-photo-container">
                    <img src={userAvitar} alt="commenter-photo" className="commenter-photo"/>
                    <div className="commenter-name-container-index">
                        <div className="commenter-name">
                            {`${fname} ${lname} `}
                        </div>
                        <div className="time-delete-follow">
                            {showFollowDelete}
                        </div>
                    </div>
                </div>

                <div className="comment-body">
                        {body} 
                </div>
                <div>
                    <CommentLike commentId={id}/>
                </div>
                
            </div>
        </div>
     );
}
 
export default CommentIndexItem;