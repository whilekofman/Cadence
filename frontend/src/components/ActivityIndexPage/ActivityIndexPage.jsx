import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { fetchActivities, getActivities } from "../../store/activities";
import { fetchComments, fetchCommentsActivities, getComments } from "../../store/comments";
import { getSession } from "../../store/session";
import ActivityIndexItem from "./ActivityIndexItem";

const ActivityIndexPage = () => {

    
    const dispatch = useDispatch();
    const activities = useSelector(getActivities)
    
    const currentUser = useSelector(getSession)
    
    const comments = useSelector(getComments)
    
    const [commentCount, setCommentCount] = useState(0)

    const [showCommentsModel, setShowCommentsModal] = useState(false)

    useEffect(() => {
        dispatch(fetchActivities())
    }, [])
    const activityListElements = activities
        .sort((a, b) => new Date(b.startTime) - new Date(a.startTime))
        .map((activity) => <div className='activity' key={activity.id}><ActivityIndexItem activity={activity} comments={comments} /></div>)
    
    
    // const [activitiesLoaded, setActivitiesLoaded] = useState(false)
    // const activityIds = Object.keys(activities)//.map(key => activities[key])
    // console.log(activityIds)


    // useEffect(()=> {
    //         dispatch(fetchComments( ))
        
    // }, [commentCount])
    // useEffect(()=> {
    //     if (activities.length > 0) {
    //         const activityIds = activities.map(activity => activity.id)
    //         dispatch(fetchCommentsActivities(activityIds))
            
    //     }
    //     // debugger
        
    // }, [])





    if (!currentUser){
        return (
        <>
            {<Redirect to='/login' />}
        </>
        )
    }
    // updater = {() => setCommentCount(commentCount + 1)} 
    // removed from below 

    return ( 
        <>
            <div className='activity-index-body'>
                <div className="activity-container">
                    {activityListElements}
                </div>
            </div>
        </>

     );
}
 
export default ActivityIndexPage;