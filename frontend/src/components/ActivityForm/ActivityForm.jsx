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

    // const [fname, setFname]=useState(activity.fname)
    // const [lname, setLname]=useState(activity.lname)
    const [title, setTitle]=useState(activity.title)
    const [description, setDescription]=useState(activity.description)
    const [sport, setSport]=useState(activity.sport)
    const [distance, setDistance]=useState(activity.distance)
    const [hours, setHours]=useState(activity.hours)
    const [minutes, setMinutes]=useState(activity.minutes)
    const [seconds, setSeconds]=useState(activity.seconds)
    const [hr, setHr]=useState(activity.hr)
    const [intensity, setIntensity]=useState(activity.intensity)
    const [pnotes, setPnotes]=useState(activity.pnotes)
    const [tags, setTags]=useState(activity.tags)
    const [purpose, setPurpose]=useState(activity.purpose)
    const [errorsDuration, setErrorsDuration] = useState([])
    // const [createdAt, setCreatedAt]=useState(activity.createdAt)


    useEffect( async => {
        if (!currentUser) 
        <Redirect to="/login" />
    }, [])

    useEffect(() => {
        dispatch(fetchActivity(activityId))
    }, [activityId])

    // let [fname, setFname] = useState(fname)

    // debugger
    if (activity && currentUser && 
        currentUser.id !== activity.athleteId) {
        // debugger
            return <h1 className="Errors">You can't edit someone else activity silly!</h1> 
        } 
    
 

    const [formHeader, activityAction] = activity ? ['Manual Update'] : ['Manual Entry']
    
    // inputSet

    const handleCheckInteger = (e, stateSetter) => {
        const checkEntry = e;
        
        if (checkEntry < 0 ){
            return stateSetter(0)
        } 
        if (stateSetter === setMinutes || stateSetter === setSeconds){
            // debugger
            if (checkEntry > 59) {
                setErrorsDuration(['should be less than 60']) 
                return stateSetter(59)
            }// debugger
        } 
        setErrorsDuration([])
        return stateSetter(checkEntry)
        // } else 
        //     (stateSetter === setMinutes || stateSetter === setSeconds)
        //         if (checkEntry > 59) stateSetter(59)   
        
        //     return stateSetter(checkEntry)
        // }        
    }


    return ( 
        <div className="form-page">
            <h1>{formHeader}</h1>
            <form>
                <div className="top">
                    <div className="distance-form-div">
                        <label className="distance-label">
                            Distance
                            <input className="distance-input"
                                type='number' 
                                value={distance}
                                
                                onChange={ (e) => handleCheckInteger(e.target.value, setDistance) }
                                // onChange={e => setDistance(e.target.value)}    
                            />
                        </label>
                        
                    </div>
                    <div className="duration-form-div">
                        <label className="duration-label">
                            Duration
                            <div className="form-hours">
                                    <input
                                     className="hours-input" type="number" 
                                     value={hours}
                                     onChange=
                                     { (e) => handleCheckInteger(e.target.value, setHours)}
                                     />
                                <div className="input-hours-inner">
                                    hr
                                </div>
                            </div>
                            <div className="form-minutes">
                                <input 
                                type="number" 
                                value={minutes}
                                onChange={(e) => handleCheckInteger(e.target.value, setMinutes)}
                                />
                                <div className="minute-errors">{errorsDuration}</div>
                                <div
                                     className="input-minutes-inner">
                                    min
                                </div>
                            </div>
                            <div className="form-seconds">
                                <input 
                                type="number" 
                                value={seconds}
                                onChange={ (e) => handleCheckInteger(e.target.value, setSeconds)}
                                />
                                <div className="second-errors">{errorsDuration}</div>

                                <div
                                    className="input-seconds-inner">
                                    s
                                </div>
                            </div>
                        </label>

                    </div>
                </div>
            </form>
        </div>
     );
}
 
export default ActivityForm;