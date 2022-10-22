import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useParams } from "react-router-dom";
import { fetchActivity, getActivity, newActivity, updateActivity } from "../../store/activities";
import { getSession } from "../../store/session";
import * as activityActions from "../../store/activities"

const NewActivityForm = () => {

    
    // let activity =  useSelector(getActivity(activityId)) 

    const currentUser = useSelector(getSession);
    const dispatch = useDispatch()
    
    // if (!activityId){
        const activity = {

                title: '',
                description: '',
                sport: '',
                distance: 0,
                hours: 0,
                minutes: 0,
                seconds: 0,
                startTime: '',
                hr: 0,
                intensity: 0,
                pnotes: '',
                tags: 0,
                purpose: ''
        }

    const [athleteId, setAthleteId] = useState(currentUser.id)
    const [title, setTitle]=useState('')
    const [description, setDescription]=useState('')
    const [sport, setSport]=useState('')
    const [distance, setDistance]=useState('')
    const [hours, setHours]=useState('')
    const [minutes, setMinutes]=useState('')
    const [seconds, setSeconds]=useState('')
    let [startTime, setStartTime] = useState('')
    // const [htmlStartTime, setHtmlStartTime] = useState(activity.startTime.slice(0, -5))
    const [hr, setHr]=useState('')
    const [intensity, setIntensity]=useState(2)
    const [pnotes, setPnotes]=useState('')
    const [tags, setTags]=useState('')
    const [purpose, setPurpose]=useState('')
    const [errorsDuration, setErrorsDuration] = useState([])
    const [errors, setErrors] = useState([])
    const [success, setSuccess] = useState([])

    useEffect( async => {
        if (!currentUser) 
        <Redirect to="/login" />
    }, [])


    // useEffect( async=> {
    //     if (activityId){
    //     setAthleteId(currentUser.id)
    //     setTitle(activity.title)
    //     setDescription(activity.description)
    //     setSport(activity.sport)
    //     setDistance(activity.distance)
    //     setHours(activity.hours)
    //     setMinutes(activity.minutes)
    //     setSeconds(activity.seconds)
    //     setStartTime(activity.startTime.slice(0, -5))
    //     // // const [htmlStartTime, setHtmlStartTime] = useState(activity.startTime.slice(0, -5))
    //     setHr(activity.hr)
    //     setIntensity(2)
    //     setPnotes(activity.pnotes)
    //     setTags(activity.tags)
    //     setPurpose(activity.purpose)
    //     }
    // }, [] ) 


    //  debugger
    if (!currentUser) {
        return null
    }

    
    

    const [formHeader, buttonText, buttonClass, activityAction] = 

        
            ['Add New Activity', 'Create Activity', 'create-activity', activityActions.newActivity]
    // debugger
    
    const handleClick = e => {
        e.preventDefault();
        startTime = startTime.split('T').join(' ') //.concat('.000Z')
        // debugger
        const activity = { 
                athleteId,
                title,
                description,
                sport,
                distance,
                hours,
                minutes,
                seconds,
                startTime, 
                hr,
                intensity,
                pnotes,
                tags,
                purpose

            } 
            // debugger
        // debugger
        dispatch(activityAction(activity)).catch(async res => {
            let data;
            try {
                data = await res.clone().json();
            } catch {
                data = await res.text();
            }
            if (data?.errors) setErrors(data.errors);
            else setErrors(["Please help"]) 
            
        setSuccess(['You have successfully created this activity'])
        })
    }

    

    const handleCheckInteger = (e, stateSetter) => {
        const checkEntry = e;
        
        if (checkEntry < 0 ){
            return stateSetter(0)
        } 
        if (stateSetter === setMinutes || stateSetter === setSeconds){
            if (checkEntry > 59) {
                setErrorsDuration(['should be less than 60']) 
                return stateSetter(59)
            }
        } 
        setErrorsDuration([])
        return stateSetter(checkEntry)
  
    }
        const handleSubmitDelete = e => {
        e.preventDefault();
        
        dispatch(activityActions.deleteActivity(activity.id))
        
    }
    const handleSelect = e => {
        setSport(e.target.value)
    }
    


    return ( 
        <div className="form-page">
            <h1>{errors}</h1>
            <h1>{success}</h1>
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
                <div className="row-two">
                    <div className="sport-box-form">
                        <label className="sport-text">
                            Sport
                            <select className="sport-dropdown" defaultValue={sport} onChange={handleSelect}>
                                <option value='run' onChange={ e => setSport(e.target.value)}>Run</option>
                                <option value='inline' onChange={ e => setSport(e.target.value)}>Inline Skating</option>
                                <option value='bike' onChange={ e => setSport(e.target.value)}>Bike Ride</option>
                                <option value='ebike' onChange={ e => setSport(e.target.value)}>⚡️⚡️Bike⚡️⚡️</option>
                            </select>
                        </label>
                    </div>
                </div>
                <div className="start-time-box-form">
                    <label className="start-time-label">Date and Time of Activity
                        <input type="datetime-local" 
                            value={startTime}
                            onChange={e => setStartTime(e.target.value)}
                        />
                    </label>
                    <div className="hr-form-box">
                        <label className="hr-form-label">Heart Rate
                            <input type="number"
                                className="hr-input-field"
                                value={hr}
                                onChange={e => setHr(e.target.value)}
                            />
                        </label>
                    </div>
                </div>
                <div className="title-description-box-form">
                    <div className="title-box-form">
                        <label className='title-box-form-label'>Title
                            <input 
                            type="text" 
                            className=
                            "title-form" 
                            value={title}
                            onChange={e => setTitle(e.target.value)}
                            />
                        </label>
                    </div>
                    <div className="description-box-form">
                        <label className="decription-box-form-label">Description
                            <div className="description-form-field">
                                <input type="text" 
                                className="description-form-input" 
                                value={description}
                                onChange={e => setDescription(e.target.value)}
                                />
                            </div>
                        </label>
                    </div>
                </div>
                 <button type="submit"className={buttonClass} onClick={handleClick}>{buttonText}</button>
            </form>

        </div>
     );
}
 
export default NewActivityForm;