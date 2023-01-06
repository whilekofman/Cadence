import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { fetchActivities, getActivities } from "../../store/activities";
import { fetchComments, fetchCommentsActivities, getComments } from "../../store/comments";
import { getFollowers, getFollowing } from "../../store/follows";
import { getLikes } from "../../store/likes";
import { getSession } from "../../store/session";
import CommentFollowModule from "../CommentFollowModal/CommentFollowModal";
import ActivityIndexItem from "./ActivityIndexItem";

const ActivityIndexPage = () => {

    
    const dispatch = useDispatch();
    const activities = useSelector(getActivities)
    
    const currentUser = useSelector(getSession)
    
    const comments = useSelector(getComments)

    const likes = useSelector(getLikes)

    const followers = useSelector(getFollowers)
    const following = useSelector(getFollowing)

    const [toggleCommentsFollows, setToggleCommentsFollows] = useState(null)

    
    const [showCommentsModel, setShowCommentsModal] = useState(false)

    const filteredActivityLikes = activityId => {
        return likes.filter(like => like.likeableType === 'Activity' && like.likeableId === activityId)

    }

    // filteredActivityFollows = 

    useEffect(() => {
        dispatch(fetchActivities())
    }, [toggleCommentsFollows])


    const activityListElements = activities
        .sort((a, b) => new Date(b.startTime) - new Date(a.startTime))
        .map((activity) => <div className='activity' key={activity.id}><ActivityIndexItem 
            activity={activity} 
            comments={comments.filter((comment) => comment.activityId === activity.id) } 
            activityLikes={filteredActivityLikes(activity.id)} 
            toggleCommentsFollows={setToggleCommentsFollows}
            // userLikesActivity={currentUserLikesActivity(activity.id)}
            />
        </div>)
    


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
                {toggleCommentsFollows ? <CommentFollowModule comments={toggleCommentsFollows}/> : null }
            </div>

        </>

     );
}
 
export default ActivityIndexPage;



