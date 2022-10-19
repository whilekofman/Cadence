import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useParams } from "react-router-dom";
import { fetchActivity, getActivity } from "../../store/activities";
import { getSession } from "../../store/session";

const ActivityForm = () => {
    const { activityId } = useParams();
    
    const activity = useSelector(getActivity(activityId))

    const currentUser = useSelector(getSession);
    const dispatch = useDispatch()

    useEffect( async => {
        if (!currentUser) 
        <Redirect to="/login" />
    }, [])

    useEffect(() => {
        dispatch(fetchActivity(activityId))
    }, [activityId])

    let [fname, setFname] = useState(fname)

    // debugger
    if (activity) {
        // debugger
        if (currentUser.id === activity.athleteId){
            // debugger
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
                intensity,
                pnotes,
                tags,
                purpose,
                createdAt,
                updatedAt
            
            } = activity 
        } else {
            return <div className="Errors">You are not allowed to do that</div> 
        } 
    } else {
        let     fname = '',
                lname = '',
                startTime = '',
                title = '',
                description = '',
                sport = '',
                distance = 0,
                hours = 0,
                minutes = 0,
                seconds = 0,
                hr = 0,
                intensity = '',
                pnotes = '',
                tags = '',
                purpose = ''
    }
    const [formHeader, activityAction] = activity ? ['Manual Update', ] : ['Manual Entry']



    return ( 
        <div className="form-page">
            <h1>{formHeader}</h1>
            <form>

            </form>
        </div>
     );
}
 
export default ActivityForm;