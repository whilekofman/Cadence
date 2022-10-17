import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchActivities, getActivities } from "../../store/activities";
// import { getUsers } from "../../store/users";
import ActivityIndexItem from "./ActivityIndexItem";
// import { getSession } from "../../store/session";
// import * as activityActions from '../../store/activities'


const ActivityIndexPage = () => {



    const dispatch = useDispatch();
    const activities = useSelector(getActivities)
    // const users = useSelector(getUsers)
    // console.log(users)
    
    useEffect(() => {
        // dispatch(sessionUser)
        dispatch(fetchActivities())
    }, [dispatch])

    const activityListElements = activities.map((activity) => <div className='activity' key={activity.id}><ActivityIndexItem activity={activity} /></div>)
    // {activity.title}
    
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