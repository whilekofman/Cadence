import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { fetchActivity, getActivity } from "../../store/activities";
import { getSession } from "../../store/session";
import { speedTypeChange, speedValue } from "../../store/util/speedconverter";
import { ActivityEditButton, ActivityEditLink } from "./ActivityEditButton";

const ActivityShowPage = () => {
    const { activityId } = useParams();

    const activity = useSelector(getActivity(activityId))
    // debugger
    const currentUser = useSelector(getSession)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchActivity(activityId))

    }, [dispatch, activityId] )

    if (!activity) {
        return null
    }
    
    const {
        id,
        athleteId,
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
        hr,
        speed
        // intensity,
        // pnotes,
        // tags,
        // purpose
        
    } = activity
// (<button className="edit-activity-button"><Link to={editPath}>Edit</Link></button>)
    // const editPath = `/activities/${activityId}/edit`
    
    const editButton = !currentUser || currentUser.id !== athleteId ?
       '' :  <ActivityEditButton actId={activityId} />
    // debugger

    const setDisplayDescription = (desc) => { 
        // debugger
        if (!desc && currentUser && (currentUser.id === athleteId)) {
            
            return <div className='add-description'>
                <ActivityEditLink className='add-description-link'actId={activityId}></ActivityEditLink>
                
                </div>
            } else {
                debugger 

            return <div className='description-show'>{desc}</div>
            }
    }
    const [speedType, append] = sport === 'run' ? ['Pace', ' /mi'] : ['Speed', ' mi/h']
    
    return ( 
        <div className='activity-show'>
            <div className='activity-show-box'>
                <div className="topbar">
                    <div className="athlete-name">{fname} {lname}</div>
                    <div className="dash">-</div>
                    <div className="sport">{sport}</div>
                </div>
                <div className="topbox">
                    <div className="title-box-left">
                        <div className="profile-pic-show"></div>
                            <div className="inner-title-box">
                                <div className="activity-start">{startTime}
                                <div className="activity-title">{title}</div>
                                {setDisplayDescription(description)}
                            </div>
                        </div>
                    </div>
                    <div className="details-box-right">
                        <div className="distance-show-box">
                            <div className="distance-show-value">
                                {distance} mi
                            </div>
                            <div className="distance-word">
                                Distance
                            </div>
                        </div>
                        <div className="moving-time-box">
                            <div className="moving-time-value">
                                {hours}:{minutes}:{seconds}
                            </div>
                            <div className="moving-time-word">
                                Moving Time
                            </div>
                        </div>
                        <div className="speed-box-show">
                            <div className="speed-value">
                                {speedValue({hours, minutes, seconds, distance, sport})} 
                            </div>
                            <div className="speed-text">
                                {append}
                            </div>
                        </div>
                        <div className="hr-box">
                            <div className="hr-value">
                                {hr}
                            </div>
                            <div className="hr-word">
                                Heart Rate
                            </div>
                        </div>
                        
                    {editButton}
                    </div>
                </div>
                {/* {intensity} intensity
                {pnotes}
                {tags}
                {purpose}  */}
            </div>
        </div>
     );
}
 
export default ActivityShowPage;