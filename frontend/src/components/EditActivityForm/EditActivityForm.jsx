import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Redirect, useHistory, useLocation } from "react-router-dom";
import { fetchActivity, getActivity } from "../../store/activities";
import { getSession } from "../../store/session";
import * as activityActions from "../../store/activities"


const ActivityForm = () => {
    const { activityId } = useParams();
    const activity = useSelector(getActivity(activityId))
    const location = useLocation()
    const currentUser = useSelector(getSession)
    const history = useHistory()
    const dispatch = useDispatch()

    const date = new Date();
    // const isoNow = iso.hh - 5
    // const iso = date.toISOString()
    const currentTime = new Date(
        date.getFullYear(),
        date.getMonth(),
        date.getDate(),
        date.getHours() - 5,
        date.getMinutes()
    )

    // if (date.getHours() > 12 && date.getHours() < 17) {
    //     console.log('Its the afternoon')
    // }

    const titler = (hour, sport) => {
        if (sport !== 'run') {
            sport = 'ride'
        } else sport = 'run';

        if(hour >= 22 || hour < 6){
            return `Night ${sport}`
        }
        else if (hour >= 6 && hour < 10) {
            return `Morning ${sport}`
        } 
        else if (hour >= 10 && hour < 14) {
            return `Lunch ${sport}`
        }
        else if (hour >= 10 && hour < 14) {
            return `Lunch ${sport}`
        }
        else if (hour >= 14 && hour < 18) {
            return `Afternoon ${sport}`
        }
        else {
            return `Night ${sport}`
        }

    }
    // const iso = currentTime.toISOString()
    // console.log(`this be current time ${currentTime}, this be ISO ${iso}`)
    useEffect(()=> {
        if (activityId) {
            dispatch(fetchActivity(activityId))
        }
    }, [dispatch, activityId])



    useEffect(()=> {

        if (activity){
            // console.log(activity.sport)
        
            setTitle(activity.title)
            setDescription(activity.description)
            setSport(activity.sport)
            setDistance(activity.distance)
            setHours(activity.hours)
            setMinutes(activity.minutes)
            setSeconds(activity.seconds)
            setStartTime(activity.startTime.slice(0, -5))
            setHr(activity.hr)
            setIntensity(activity.intensity)
            setPnotes(activity.pnotes)
            setTags(activity.tags)
            setPurpose(activity.purpose)

        } else {
            setTitle(titler(date.getHours(), sport))
            setDescription('')
            setSport('run')
            setDistance(0)
            setHours(0)
            setMinutes(0)
            setSeconds(0)
            // setStartTime(new Date().toISOString().slice(0, -5))
            setStartTime(currentTime.toISOString().slice(0, -5))
            setHr(0)
            setIntensity(2)
            setPnotes('')
            setTags(0)
            setPurpose('')
            setPlaceHolder('00')


        }
        

    }, [activityId])



    const [athleteId, setAthleteId] = useState(currentUser.id)
    const [sport, setSport]=useState('run')
    const [title, setTitle] = useState(titler(date.getHours()), sport)
    const [description, setDescription]=useState('')
    const [distance, setDistance]=useState('')
    const [hours, setHours]=useState(0)
    const [minutes, setMinutes]=useState(0)
    const [seconds, setSeconds]=useState(0)
    let [startTime, setStartTime] = useState(currentTime.toISOString().slice(0, -5))
    const [hr, setHr]=useState('')
    const [intensity, setIntensity]=useState(2)
    const [pnotes, setPnotes]=useState('')
    const [tags, setTags]=useState('')
    const [purpose, setPurpose]=useState('')
    const [placeHolder, setPlaceHolder] = useState('00') 
    const [errorsDuration, setErrorsDuration] = useState([])
    const [errors, setErrors] = useState([])
    const [success, setSuccess] = useState([])
    const [redirectPage, setRedirectPage] = useState('')

    useEffect(() => {
        if(!activity){
            const currentHour = new Date(startTime).getHours()
            setTitle(titler(currentHour, sport))
            // setTitle(titler(dateObject.getHours(), sport))

        }

    }, [sport, startTime])

    if (activity && currentUser && 
        currentUser.id !== activity.athleteId) {
        // debugger
            return <h1 className="Errors">You can't edit someone else activity silly!</h1> 
    } 
    
    const [formHeader, buttonText, activityAction] = activity ?
        ['Manual Update', 'Update Activity', activityActions.updateActivity] : ['Manual Entry', 'Create',  activityActions.newActivity]

    const handleFocus = e => {
        e.target.select()
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
        
        dispatch(activityActions.deleteActivity(activity.id))//.then(
        // dispatch(activityActions.fetchActivities)
            // <Redirect to='/' />
        // )
        history.push(`/activities`)

        
    }

    const handleSelect = e => {
        setSport(e.target.value)
    }
    const handleClick = e => {
        e.preventDefault();
        // console.log(startTime)
        // startTime = startTime.split('T').join(' ') //.concat('.000Z')
        // console.log(startTime.hh)
        // debugger
        // if (distance === 0) {
        //     setErrors(['Distance can not be zero, sitting still is not an activity'])
        //     return
        // }
        // if (isNaN(hours)) {
        //     setHours(0)
        // }
        // if (isNaN(minutes)){
        //     setMinutes(0)
        // }
        // if (isNaN(seconds)) setSeconds((sec) => sec = 0)
        debugger

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
        if (activityId) activity.id = Number(activityId)
        
        dispatch(activityAction(activity, history))

    }
    const cancelButton = e => {
        e.preventDefault();
        history.goBack()
    }

    const renderDelete = () => {
        if (activity){
            return (        
                <form onSubmit={handleSubmitDelete}>                
                    <button className='delete-activity'>Delete Activity</button>
                </form>
            )
        }
    }

    return ( 
        <div className="form-page">
            {/* <h1>{errors}</h1> */}
            {/* <h1>{success}</h1> */}
            <form className="form-container">
                <div className="title-container">
                    <h1 className="form-header">{formHeader}</h1>
                </div>

                <div className="top-container">
                    <div className="distance-form-container">
                        <div className="distance-form-label">
                            <label className="dist-label">Distance</label>
                        </div>

                        <div className="distance-form-entry">
                            <input 
                                className="distance-input"
                                type='number'
                                name="distance" 
                                value={distance}
                                onFocus={handleFocus}
                            
                                onChange={ (e) => handleCheckInteger(e.target.value, setDistance) }

                            />
                            <div className="unit"><p>miles</p></div>

                        </div>
                        
                    </div>
                    <div className="duration-form-container">
                        <div className="duration-form-label">
                            <label className="dur-label">Duration</label>
                        </div>
                        <div className="duration-inputs">
                            <div className="time-form-box">
                                <div className="time-input">
                                    <input 
                                        type="number" 
                                        value={hours}
                                        onChange = { (e) => handleCheckInteger(e.target.value, setHours)}
                                        placeholder={placeHolder}
                                        onFocus={handleFocus}


                                        />
                                </div>

                                <div className="time-text"><p>hr</p></div>
                            </div>
                            <div className="time-form-box">
                                <div className="time-input">
                                    <input 
                                        type="number"
                                        value={minutes}
                                        onChange={(e) => handleCheckInteger(e.target.value, setMinutes)}
                                        placeholder={placeHolder}
                                        onFocus={handleFocus}

                                        />

                                </div>
                                
                                <div className="time-text"><p>min</p></div>
                            </div>
                            <div className="time-form-box">
                                <div className="time-input">
                                    <input 
                                    type="number" 
                                    value={seconds}
                                    placeholder={placeHolder}
                                    onChange={ (e) => handleCheckInteger(e.target.value, setSeconds)}
                                    onFocus={handleFocus}

                                    />
                                    {/* <div className="second-errors">{errorsDuration}</div> */}
                                </div>
                                
                                <div className="time-text"><p>s</p></div>

                            </div>

                        </div>

                        <div className="minute-errors">{errorsDuration}</div>
                    </div>

                </div>

                <div className="form-details-container">
                    <div className="sport-time-container">
                        <div className="form-detail-container">
                            
                            <div className="form-detail-label-container">
                                <label className="form-detail-label">Sport
                                </label>
                            </div>

                                <div className="sport-dropdown">
                                    <select className="sport-dropdown" value={sport} onChange={handleSelect} >
                                        {/* {console.log(sport)} */}
                                        <option value='run' onChange={ e => setSport(e.target.value)}>Run</option>
                                        <option value='inline' onChange={ e => setSport(e.target.value)}>Inline Skating</option>
                                        <option value='bike' onChange={ e => setSport(e.target.value)}>Bike Ride</option>
                                        <option value='ebike' onChange={ e => setSport(e.target.value)}>eBike</option>
                                    </select>
                                </div>

                        </div>
                            <div className="form-detail-container">
                            
                            <div className="form-detail-label-container">
                                <label className="form-detail-label">Date & Time
                                </label>
                            </div>
                            <div className="form-detail-start-time">
                                <input type="datetime-local" className="form-date-field" 
                                value={startTime}
                                onChange={e => setStartTime(e.target.value)}
                                />
                            </div>

                        </div>
                    </div>
                    <div className="form-detail-title-container">
                        
                        <div className="form-detail-label-container">
                            <label className="form-detail-label">Title
                            </label>
                        </div>
                        <div className="form-detail-title">
                            <input 
                            type="text" 
                            className=
                            "title-form" 
                            value={title}
                            onChange={e => setTitle(e.target.value)}
                            />
                        </div>
                        <div className="form-detail-label-container">
                            <label className="form-detail-label">Description
                            </label>
                        </div>
                        <div className="description-form-field">
                                <textarea type="textarea" 
                                className="description-form-input"
                                placeholder="How'd it go?  Share more information about your activity." 
                                value={description}
                                onChange={e => setDescription(e.target.value)}
                                />
                        </div>
                    
                    </div>
                    

                </div>
                <div className="action-button">
                    <button type="submit"className='activity-action-button' onClick={handleClick}>{buttonText}</button>
                </div>

            </form>
            <div className="cancel-delete-buttons">
                <button className="cancel-edit-activity" onClick={cancelButton}>Cancel</button>
                <div className="delete-button">
                    {renderDelete()}
                </div>
                

            </div>
        </div>
     );
}


 
export default ActivityForm;

