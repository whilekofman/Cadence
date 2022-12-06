import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { fetchActivities, getActivities } from "../../store/activities";
import { fetchComments, getComments } from "../../store/comments";
import { getSession } from "../../store/session";
import ActivityIndexItem from "./ActivityIndexItem";

const ActivityIndexPage = () => {

    
    const dispatch = useDispatch();
    const activities = useSelector(getActivities)
    
    const currentUser = useSelector(getSession)
    
    const comments = useSelector(getComments)
    
    const [commentCount, setCommentCount] = useState(0)

    const [showCommentsModel, setShowCommentsModal] = useState(false)



    useEffect(()=> {
            dispatch(fetchComments())
        
    }, [commentCount])

    // useEffect(()=> {
    //     dispatch(fetchComments())
        
    // }, [])

    useEffect(() => {
        dispatch(fetchActivities())
        
    }, [])



    if (!currentUser){
        return (
        <>
            {<Redirect to='/login' />}
        </>
        )
    }
    // updater = {() => setCommentCount(commentCount + 1)} 
    // removed from below 

    const activityListElements = activities
        .sort((a,b) => a.starTime - b.starTime)
        .map((activity) => <div className='activity' key={activity.id}><ActivityIndexItem activity={activity} comments={comments} /></div>)
    
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