
import { Link } from "react-router-dom";
// import inline from '../../assets/logo/skatelogo.png'
import bikelogo from '../../assets/logo/bikelogo.png'
import skatelogo from '../../assets/logo/skatelogo.png'
import runlogo from '../../assets/logo/runlogo.png'
import { useEffect, useState } from "react";
import CommentForm from "../CommentsForm/CommentForm";
import { getSession } from "../../store/session";
import { useDispatch, useSelector } from "react-redux";
import { fetchComments, getComments } from "../../store/comments";
import CommentIndex from "../Comment/CommentIndex";
import { speed, durationConvert } from "../utils/activityspeed/speedConverter";
import Like from "../Like/ActivityLike";

const ActivityIndexItem = ( { activity, comments, activityLikes, userLikesActivity } ) => {
    const currentUser = useSelector(getSession)
    const {
        id,
        fname,
        lname,
        startTime,
        title,
        description,
        sport,
        distance,
        hours,
        minutes,
        seconds,
        athleteProfilePicture,
        likesCount,
        athleteId,        
    } = activity

    
    const [showNewCommentBox, setShowNewCommentBox] = useState('do-not-show-new-comment')
    const [showCommentBox, setShowCommentBox] = useState(false)
    const [showComments, setShowComments] = useState(true)
    const [userAvitar, setUserAvitar] = useState(athleteProfilePicture ? athleteProfilePicture : "https://aa-cadence-dev.s3.amazonaws.com/adyson.jpeg")
    
    const displayTime = new Date(startTime).toLocaleString('en-US', {timeZone: 'UTC', month: '2-digit', day: '2-digit', year: 'numeric',  hour12: true, hour: '2-digit', minute: '2-digit' });

    const displayTimeParsed = displayTime.split(',').join(' at ')

    const sportImg = sport === 'run' ? runlogo : sport === 'inline' ? skatelogo : bikelogo 



    const [speedType, append] = sport === 'run' ? ['Pace', ' /mi'] : ['Speed', ' mi/h']


    const openCommentBox = e => {
        e.preventDefault()

        setShowCommentBox(value => !value)        
    }

    const openComments = e =>{
        e.preventDefault()
        setShowComments(show => !show)    
    }
    return (
        <>

            <div className='top-bar'>
                <div className="profile-pic-div">
                    {/* <i className="fa-solid fa-user"></i> */}
                    <img className="profile-pic" src={userAvitar} />
                </div>
                <div className="athlete-name-start-time-index">
                    <div className="athlete-name-index">
                        {fname} {lname}
                    </div>
                    <div className="start-time-index">
                        {displayTimeParsed}
                    </div>
                </div>
            </div>
            <div className="title">
                <div className="sport">
                    <img className='sport-logo' src={sportImg} />
                </div>
                <div className="title-text-container-index">
                    <Link className="title-link" to={`/activities/${id}`}><div className="title-text-index">{title}</div></Link>
                </div>
            </div>
             
            <div className="description">{description}</div>

             <div className="matrix-index">
                <div className="matrix-box-index">  
                    <div className="matrix-title">Distance</div>  
                    <div className="matrix-value-index">{distance} mi</div>
                </div>
                <div className="matrix-box-index">
                    <div className="matrix-title">{speedType}</div>
                    <div className="matrix-value-index">{speed({ hours, minutes, seconds, distance, sport })}{append}</div>
                </div>
                <div className="matrix-box-index-right">
                    <div className="matrix-title">time</div> 
                    <div className="matrix-value-index">{durationConvert( { hours, minutes, seconds } )}</div>
                </div>
                
             </div>
            <div className="like-count">{activityLikes.length} Kudos</div>

             <div className="comment">
                <Like activity={activity} activityLikes={activityLikes} userLikesActivity={userLikesActivity}></Like>

                <button onClick={openCommentBox} >
                    <div className="material-symbols-outlined add-comment">speaker_notes</div>
                </button>

                <Link className="open-comments" to="" onClick={openComments}><div className="comment-count-index">{`${comments.length} Comments`}</div></Link>
                {showComments && 
                    <CommentIndex comments={comments} athlete={athleteId} />
                    
                }

                {showCommentBox && 
                    <div className={showNewCommentBox}>
                            <CommentForm activityId={id} authorId={currentUser.id} />
                    </div>
                }
             </div>
            
        </>

     );
}
 
export default ActivityIndexItem;


    // const filterdComments = comments.filter((comment) => 
    //     comment.activityId === id
    // )
    // comments.filter((comment) => comment.activityId === id)

    // const filterdComments = comments

    // const filteredActivityLikes = () => {
    //     console.log(activity.id)
    //     let userLikesActivity
    //     const filteredLikes = likes.filter((like) => 
    //         // if (like.likerId === currentUser.id) userLikesActivity = true
    //         like.likeableType ===  "Activity" && like.likeableId === activity.id
    //     )
    //     const currentUserLikesActivity = filteredLikes.some(like => like.likerId === userId)
    //     return { filteredLikes, userLikesActivity}
    // }
    // const filteredActivityLikes = likes//likes.filter((like) => 
            // if (like.likerId === currentUser.id) userLikesActivity = true
    //         like.likeableType ===  "Activity" && like.likeableId === activity.id
    // )
    // const currentUserLikesActivity = likes.some(like => like.likerId === currentUser.id)

    // console.log(currentUserLikesActivity)
    // const activityLikeCount = filteredActivityLikes.length