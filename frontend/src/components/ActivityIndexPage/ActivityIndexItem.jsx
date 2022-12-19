
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

const ActivityIndexItem = ( { activity, comments, likes } ) => {

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
        commentsCount
        
    } = activity

    const filterdComments = comments.filter((comment) => 
        comment.activityId === id
    )
        
    const [showNewCommentBox, setShowNewCommentBox] = useState('do-not-show-new-comment')
    const [showCommentBox, setShowCommentBox] = useState(false)
    const [showComments, setShowComments] = useState(false)
    const [userAvitar, setUserAvitar] = useState(athleteProfilePicture ? athleteProfilePicture : "https://aa-cadence-dev.s3.amazonaws.com/adyson.jpeg")
    const [likeStyle, setLikeStyle] = useState("material-symbols-outlined thumbs-up")
    

    const displayTime = new Date(startTime).toLocaleString('en-US', {timeZone: 'UTC'});

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
                <div className="athlete-name-activity">
                    <div className="profile-pic-div">
                        {/* <i className="fa-solid fa-user"></i> */}
                        <img className="profile-pic" src={userAvitar} />
                    </div>
                    <div className="name">
                        {fname} {lname}<br />
                        {displayTime}
                    </div>
                    
                    
                    
                </div>
            </div>
            <div className="title">
                {/* <div className="sport">{sport}</div> */}
                {commentsCount}
                <div className="sport"><img src={sportImg} className='sport-logo'/></div>

                <Link className="title-link" to={`/activities/${id}`}>{title}</Link>
            </div>
             
            <div className="description">{description}</div>
             <div className="matrix">
                <div className="distance">  
                    Distance<br></br>   
                    {distance} mi
                </div>
                <div className="speedbox">
                    <div className="speed-type">{speedType}</div>
                    <div className="speed">{speed({ hours, minutes, seconds, distance, sport })}{append}</div>
                </div>
                <div className="time">
                    time <br />
                    {durationConvert( { hours, minutes, seconds } )}
                </div>
                
             </div>
            <div className="like-count">{likesCount} Kudos</div>

             <div className="comment">
                <button>
                    <div className="material-symbols-outlined thumbs-up thumbs-not-liked">thumb_up</div>
                </button>
                <button onClick={openCommentBox} >
                    <div className="material-symbols-outlined add-comment">speaker_notes</div>
                </button>

                <Link className="open-comments" to="" onClick={openComments}><div className="comment-count-index">{`${filterdComments.length} Comments`}</div></Link>
                {showComments && 
                    <CommentIndex comments={filterdComments} athlete={athleteId} />
                    
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

