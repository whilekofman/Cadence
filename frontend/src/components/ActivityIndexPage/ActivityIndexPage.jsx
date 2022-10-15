import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchActivities, getActivities } from "../../store/activities";
import { getSession } from "../../store/session";
import * as activityActions from '../../store/activities'


const ActivityIndexPage = () => {



    const dispatch = useDispatch();
    const activities = useSelector(getActivities)
    // // debugger
    const sessionUser = useSelector(state => state.session.user)

    useEffect(() => {
        // dispatch(sessionUser)
        dispatch(fetchActivities())
    }, [])

    const activityListElements = activities.map((activity) => <li key={activity.id}>{activity.title}</li>)

    return ( 
        <ul>
            <li>where am I</li>
            {activityListElements}
        </ul>
     );
}
 
export default ActivityIndexPage;