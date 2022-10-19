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

    // let [fname, setFname] = useState(fname)

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
            
            } = activity ? { activity } :
 
export default ActivityForm;

const [description, setDescription]=useState(activity.description)
const [hours, setHours]=useState(activity.hours)
const [minutes, setMinutes]=useState(activity.minutes)
const [seconds, setSeconds]=useState(activity.seconds)
const [sport, setSport]=useState(activity.sport)
const [title, setTitle]=useState(activity.title)
    const [distance, setDistance]=useState(activity.distance)
    const [hr, setHr]=useState(activity.hr)
    const [intensity, setIntensity]=useState(activity.intensity)
    const [pnotes, setPnotes]=useState(activity.pnotes)
    const [tags, setTags]=useState(activity.tags)
    const [purpose, setPurpose]=useState(activity.purpose)
onChan                                      {setHours((e.target.value) => handleCheckHours})}

onChange={(e) => (setHours(handleCheckHours(e.target.value))) }
        // if (checkEntry + 1 === 1) return stateSetter(0) 
// Number(checkEntry) === NaN
// typeof( checkEntry )!== 'number' 
// !Number( checkEntry ) || 