import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getActivity } from "../../store/activities";
import { getSession } from "../../store/session";

const ActivityForm = () => {
    const { activityId } = useParams();
    
    const activity = useSelector(getActivity(activityId))

    const currentUser = useSelector(getSession);
    debugger
    if (activity) {
        debugger
        if (currentUser.id === activity.athleteId){
            debugger
            const {
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
                speed,
                intensity,
                pnotes,
                tags,
                purpose
            
            } = activity 
        } else {
            return <div className="Errors">You are not allowed to do that</div> 
        }
    }

    const [formType, action, typeText] = activity ? ['Manual Update', ] : ['Manual Entry']

    return ( 
        <div className="form-page">
            <h1>Add a new Activity</h1>
        </div>
     );
}
 
export default ActivityForm;