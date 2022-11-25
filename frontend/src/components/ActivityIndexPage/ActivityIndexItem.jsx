
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

const ActivityIndexItem = ( { activity, comments, updater, showModal } ) => {


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
        athleteId
        
    } = activity
    // console.log(comments)
    // const comments = useSelector(getComments)
    // console.log(comments) 
    const filterdComments = comments.filter((comment) => 
        comment.activityId === id
    )
    
    // TESTING
    const actCommentCount = activityId => {
        let count = 0
        const actComment = []
        comments.forEach((comment) =>{ if (comment.activityId === activityId){
            count++
            actComment.push(comment) 
        }})
        return {count, actComment}
    }
    //END

    // const dispatch = useDispatch()

    // useEffect(()=> {
    //     dispatch(fetchComments(id))
        
    // }, [])


    const [showNewCommentBox, setShowNewCommentBox] = useState('do-not-show-new-comment')
    const [showCommentBox, setShowCommentBox] = useState(false)
    const [showComments, setShowComments] = useState(false)
    const [userAvitar, setUserAvitar] = useState(athleteProfilePicture ? athleteProfilePicture : "https://aa-cadence-dev.s3.amazonaws.com/adyson.jpeg")
    


    const displayTime = new Date(startTime).toLocaleString('en-US', {timeZone: 'UTC'});


    
    const durationConvert = ( { hours, minutes, seconds } ) => {
        if ( hours > 0 ) {
            return hours.toString() + ' h ' + minutes.toString() + ' m'
            // return {hours, minutes} 
        } else {
            return minutes.toString() + ' m ' +  seconds.toString() + ' s'
        }

    }
    const sportImg = sport === 'run' ? runlogo : sport === 'inline' ? skatelogo : bikelogo 

    const runningSpeed = ( { hours, minutes, seconds, distance }) => {
        const timeInSeconds = (hours * 3600) + (minutes * 60) + seconds
        const runCalc =  ( ( timeInSeconds / distance ) / 60 ) 
        const formatRunMinutes = Math.floor(runCalc)
        const formatRunSeconds = Math.floor(60 * (runCalc - formatRunMinutes)) / 100

        return formatRunMinutes + formatRunSeconds
    }

    const [speedType, append] = sport === 'run' ? ['Pace', ' /mi'] : ['Speed', ' mi/h']

    const speed = ( {hours, minutes, seconds, distance, sport} ) => {
        const timeInSeconds = (hours * 3600) + (minutes * 60) + seconds

        const speed = sport === 'run' ? 

            runningSpeed( { hours, minutes, seconds, distance } )
            // formatRunMinutes + formatRunSeconds
        
            :  
        
            ( (distance / ( timeInSeconds / 3600 ) * 100 ) / 100 ).toFixed(2) 
            
        return speed
    }
    const openCommentBox = e => {
        e.preventDefault()
        // setShowNewCommentBox('show-new-comment')
        // console.log(showCommentBox)

        setShowCommentBox(value => !value)
        

    }
    const openComments = e =>{
        e.preventDefault()
        setShowComments(show => !show)
        
    }

    // console.log(`ATHLETE ID ${athleteId}`)


    // { hours }: { minutes }: { seconds }
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
             <div className="comment">
                <button onClick={openCommentBox} >
                    <div className="material-symbols-outlined">
                    add_comment
                </div>
                </button>
                
                {/* <div className="comment-count-index">{`Comments ${actCommentCount(id).count}`}</div> */}
                <Link className="open-comments" to="" onClick={openComments}><div className="comment-count-index">{`${actCommentCount(id).count} Comments`}</div></Link>
                {showComments && 
                    <CommentIndex comments={filterdComments} athlete={athleteId} />
                    
                }
                {/* updater={() => updater()} */}
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

