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
        // date.getHours() - 5
        date.getHours() - 5,
        date.getMinutes()

    )
    const iso = currentTime.toISOString()
    console.log(`this be current time ${currentTime}, this be ISO ${iso}`)

    useEffect(()=> {
        if (activityId) {
            dispatch(fetchActivity(activityId))
        }
    }, [dispatch, activityId])

    useEffect(()=> {

        if (activity){
            console.log(activity.sport)
        
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
            setTitle('')
            setDescription('')
            setSport('run')
            setDistance(0)
            setHours('')
            setMinutes('')
            setSeconds('')
            // setStartTime(new Date().toISOString().slice(0, -5))
            setStartTime(currentTime.toISOString().slice(0, -5))
            setHr(0)
            setIntensity(2)
            setPnotes('')
            setTags(0)
            setPurpose('')
            setPlaceHolder('00')


        }
        

    }, [activity, activityId])


    // const placeHolderMS = '00'
    // const placeHolder = '1'



    const [athleteId, setAthleteId] = useState(currentUser.id)
    const [title, setTitle] = useState('')
    const [description, setDescription]=useState('')
    const [sport, setSport]=useState('run')
    const [distance, setDistance]=useState('')
    const [hours, setHours]=useState('')
    const [minutes, setMinutes]=useState('')
    const [seconds, setSeconds]=useState('')
    let [startTime, setStartTime] = useState(new Date().toISOString().slice(0, -5))
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

    if (activity && currentUser && 
        currentUser.id !== activity.athleteId) {
        // debugger
            return <h1 className="Errors">You can't edit someone else activity silly!</h1> 
    } 
    
    const [formHeader, buttonText, buttonClass, activityAction] = activity ?
        ['Manual Update', 'Update Activity', 'update-activity', activityActions.updateActivity] : ['Manual Entry', 'Create', 'create-activity', activityActions.newActivity]

    

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
        if (activityId) activity.id = Number(activityId)
        
        dispatch(activityAction(activity, history))

    }
    const cancelButton = e => {
        e.preventDefault();
        history.goBack()
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

                                        />
                                    <div className="minute-errors">{errorsDuration}</div>

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
                                    />
                                    <div className="second-errors">{errorsDuration}</div>
                                </div>
                                
                            <div className="time-text"><p>s</p></div>

                            </div>
                        </div>

                    </div>

                </div>

                <div className="form-details-container">
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
                                    <option value='ebike' onChange={ e => setSport(e.target.value)}>⚡️⚡️Bike⚡️⚡️</option>
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
            

            </form>
            <form onSubmit={handleSubmitDelete}>                
                <button className='delete-activity'>Delete Activity</button>
            </form>
            <button className="cancel-edit-activity" onClick={cancelButton}>Cancel</button>
        </div>
     );
}

//     console.log(title, distance, hours, minutes, seconds, startTime, hr, intensity, pnotes, tags, purpose)
//     return ( 
//         <></>
//      );
// }
 
export default ActivityForm;

// import { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { Redirect, useParams, useHistory } from "react-router-dom";
// import { fetchActivity, getActivity, newActivity, updateActivity } from "../../store/activities";
// import { getSession } from "../../store/session";
// import * as activityActions from "../../store/activities"

// const ActivityForm = () => {
//     const { activityId } = useParams();
//     let activity =  useSelector(getActivity(activityId)) 

//     const currentUser = useSelector(getSession);
//     debugger
//     const dispatch = useDispatch()
//     useEffect(()=> {

//     }, [])
//     useEffect (() => {
//         dispatch(fetchActivity(activityId))
//         if (!activity) return null;

//         console.log(activityId)

//     }, [dispatch, activityId])

//     const [athleteId, setAthleteId] = useState(currentUser.id)
//     const [title, setTitle]=useState(activity.title)
//     const [description, setDescription]=useState(activity.description)
//     const [sport, setSport]=useState(activity.sport)
//     const [distance, setDistance]=useState(activity.distance)
//     const [hours, setHours]=useState(activity.hours)
//     const [minutes, setMinutes]=useState(activity.minutes)
//     const [seconds, setSeconds]=useState(activity.seconds)
//     let [startTime, setStartTime] = useState(activity.startTime.slice(0, -5))
//     const [hr, setHr]=useState(activity.hr)
//     const [intensity, setIntensity]=useState(2)
//     const [pnotes, setPnotes]=useState(activity.pnotes)
//     const [tags, setTags]=useState(activity.tags)
//     const [purpose, setPurpose]=useState(activity.purpose)
//     const [errorsDuration, setErrorsDuration] = useState([])
//     const [errors, setErrors] = useState([])
//     const [success, setSuccess] = useState([])
//     debugger


//     useEffect( () => {
//         if (!currentUser) 
//         <Redirect to="/login" />
//     }, [])
    
//     useEffect( () => {
//     if (!activityId) 
//         <Redirect to="/" />
    
//     }, [])

    

//     if (activity && currentUser && 
//         currentUser.id !== activity.athleteId) {
//         // debugger
//             return <h1 className="Errors">You can't edit someone else activity silly!</h1> 
//     } 
    

//     const [formHeader, buttonText, buttonClass, activityAction] = 
//             ['Manual Update', 'Update Activity', 'update-activity', activityActions.updateActivity, athleteId] 
        
//             // ['Manual Entry', 'Create Activity', 'create-activity', activityActions.newActivity]
//     // debugger
    
//     const handleClick = e => {
//         e.preventDefault();
//         startTime = startTime.split('T').join(' ') //.concat('.000Z')
//         // debugger
//         const activity = { 
//                 athleteId,
//                 title,
//                 description,
//                 sport,
//                 distance,
//                 hours,
//                 minutes,
//                 seconds,
//                 startTime, 
//                 hr,
//                 intensity,
//                 pnotes,
//                 tags,
//                 purpose

//             } 
//             // debuggeret
//         if (activityId) activity.id = Number(activityId)
//         // debugger
//         dispatch(activityAction(activity)).catch(async res => {
//             let data;
//             try {
//                 data = await res.clone().json();
//             } catch {
//                 data = await res.text();
//             }
//             if (data?.errors) setErrors(data.errors);
//             else setErrors(["Please help"]) 
            
//         setSuccess(['You have successfully updated this activity'])
//         })
//     }

    

//     const handleCheckInteger = (e, stateSetter) => {
//         const checkEntry = e;
        
//         if (checkEntry < 0 ){
//             return stateSetter(0)
//         } 
//         if (stateSetter === setMinutes || stateSetter === setSeconds){
//             if (checkEntry > 59) {
//                 setErrorsDuration(['should be less than 60']) 
//                 return stateSetter(59)
//             }
//         } 
//         setErrorsDuration([])
//         return stateSetter(checkEntry)
  
//     }
//     const handleSubmitDelete = e => {
//         e.preventDefault();
        
//         dispatch(activityActions.deleteActivity(activity.id)).then(
//             <Redirect to='/' />
//         )
        
//     }

//     const handleSelect = e => {
//         setSport(e.target.value)
//     }
    


//     return ( 
//         <div className="form-page">
//             <h1>{errors}</h1>
//             <h1>{success}</h1>
//             <h1>{formHeader}</h1>
//             <form>
//                 <div className="top">
//                     <div className="distance-form-div">
//                         <label className="distance-label">
//                             Distance
//                             <input className="distance-input"
//                                 type='number' 
//                                 value={distance}
                                
//                                 onChange={ (e) => handleCheckInteger(e.target.value, setDistance) }
 
//                             />
//                         </label>
                        
//                     </div>
//                     <div className="duration-form-div">
//                         <label className="duration-label">
//                             Duration
//                             <div className="form-hours">
//                                     <input
//                                      className="hours-input" type="number" 
//                                      value={hours}
//                                      onChange=
//                                      { (e) => handleCheckInteger(e.target.value, setHours)}
//                                      />
//                                 <div className="input-hours-inner">
//                                     hr
//                                 </div>
//                             </div>
//                             <div className="form-minutes">
//                                 <input 
//                                 type="number" 
//                                 value={minutes}
//                                 onChange={(e) => handleCheckInteger(e.target.value, setMinutes)}
//                                 />
//                                 <div className="minute-errors">{errorsDuration}</div>
//                                 <div
//                                      className="input-minutes-inner">
//                                     min
//                                 </div>
//                             </div>
//                             <div className="form-seconds">
//                                 <input 
//                                 type="number" 
//                                 value={seconds}
//                                 onChange={ (e) => handleCheckInteger(e.target.value, setSeconds)}
//                                 />
//                                 <div className="second-errors">{errorsDuration}</div>

//                                 <div
//                                     className="input-seconds-inner">
//                                     s
//                                 </div>
//                             </div>
//                         </label>

//                     </div>
//                 </div>
//                 <div className="row-two">
//                     <div className="sport-box-form">
//                         <label className="sport-text">
//                             Sport
//                             <select className="sport-dropdown" defaultValue={sport} onChange={handleSelect}>
//                                 <option value='run' onChange={ e => setSport(e.target.value)}>Run</option>
//                                 <option value='inline' onChange={ e => setSport(e.target.value)}>Inline Skating</option>
//                                 <option value='bike' onChange={ e => setSport(e.target.value)}>Bike Ride</option>
//                                 <option value='ebike' onChange={ e => setSport(e.target.value)}>⚡️⚡️Bike⚡️⚡️</option>

//                             </select>
//                         </label>
//                     </div>
//                 </div>
//                 <div className="start-time-box-form">
//                     <label className="start-time-label">Date and Time of Activity
//                         <input type="datetime-local" 
//                             value={startTime}
//                             onChange={e => setStartTime(e.target.value)}
//                         />
//                     </label>
//                     <div className="hr-form-box">
//                         <label className="hr-form-label">Heart Rate
//                             <input type="number"
//                                 className="hr-input-field"
//                                 value={hr}
//                                 onChange={e => setHr(e.target.value)}
//                             />
//                         </label>
//                     </div>
//                 </div>
//                 <div className="title-description-box-form">
//                     <div className="title-box-form">
//                         <label className='title-box-form-label'>
//                             <input 
//                             type="text" 
//                             className=
//                             "title-form" 
//                             value={title}
//                             onChange={e => setTitle(e.target.value)}
//                             />
//                         </label>
//                     </div>
//                     <div className="description-box-form">
//                         <label className="decription-box-form-label">Description
//                             <div className="description-form-field">
//                                 <input type="text" 
//                                 className="description-form-input" 
//                                 value={description}
//                                 onChange={e => setDescription(e.target.value)}
//                                 />
//                             </div>
//                         </label>
//                     </div>
//                 </div>
//                  <button type="submit"className={buttonClass} onClick={handleClick}>{buttonText}</button>
//             </form>
//             <form onSubmit={handleSubmitDelete}>                
//                 <button className='delete-activity'>Delete Activity</button>
//             </form>
//         </div>
//      );
// }
 
// export default ActivityForm;


//     // if (!activityId){
//     //      activity = {

//     //             title: '',
//     //             description: '',
//     //             sport: '',
//     //             distance: 0,
//     //             hours: 0,
//     //             minutes: 0,
//     //             seconds: 0,
//     //             startTime: 0,
//     //             hr: 0,
//     //             intensity: 0,
//     //             pnotes: '',
//     //             tags: 0,
//     //             purpose: '',
//     //             createdAt: '',
//     //             updatedAt: ''
//     //     }
//     // }

// //  debugger


//     // useEffect( async=> {
//     //     if (activityId){
//     //     setAthleteId(currentUser.id)
//     //     setTitle(activity.title)
//     //     setDescription(activity.description)
//     //     setSport(activity.sport)
//     //     setDistance(activity.distance)
//     //     setHours(activity.hours)
//     //     setMinutes(activity.minutes)
//     //     setSeconds(activity.seconds)
//     //     setStartTime(activity.startTime.slice(0, -5))
//     //     // // const [htmlStartTime, setHtmlStartTime] = useState(activity.startTime.slice(0, -5))
//     //     setHr(activity.hr)
//     //     setIntensity(2)
//     //     setPnotes(activity.pnotes)
//     //     setTags(activity.tags)
//     //     setPurpose(activity.purpose)
//     //     }
//     // }, [] ) 


//     // useDispatch(() => {
        
//     // })

//     // let [fname, setFname] = useState(fname)

//     // debugger
