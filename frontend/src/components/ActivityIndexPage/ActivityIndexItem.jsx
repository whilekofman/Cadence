// import { useDispatch } from "react-redux";

import { Link } from "react-router-dom";

const ActivityIndexItem = ( { 
    activity: {
        id,
        athleteId, 
        title, 
        description,
        sport, 
        distance, 
        hours, 
        minutes, 
        seconds, 
        intensity, 
        hr, 
        pnotes, 
        tags,
        purpose,
        startTime
    } 
    }) => {
    // const dispatch = useDispatch()
    
    // const athleteId =  
    
        // const userFname = user.id === athleteId ? fname : '' 

    return (
        <>
            <ul>
                <Link to={`/activities`}>{athleteId}</Link>
                <div>{startTime}</div>
                <div>{title}</div>
                <div>{description}</div>
                <div>{sport}</div>
                <div>{distance} miles</div>
                <div>{hours}:{minutes}</div>
            </ul>
        </>

     );
}
 
export default ActivityIndexItem;