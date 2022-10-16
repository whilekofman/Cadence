import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchActivities, getActivities } from "../../store/activities";
import ActivityIndexItem from "./ActivityIndexItem";
// import { getSession } from "../../store/session";
// import * as activityActions from '../../store/activities'


const ActivityIndexPage = () => {



    const dispatch = useDispatch();
    const activities = useSelector(getActivities)

    useEffect(() => {
        // dispatch(sessionUser)
        dispatch(fetchActivities())
    }, [dispatch])

    const activityListElements = activities.map((activity) => <li key={activity.id}><ActivityIndexItem activity={activity} /></li>)
    // {activity.title}

    return ( 
        <>
            <li>where am I</li>
            {activityListElements}
        </>

     );
}
 
export default ActivityIndexPage;