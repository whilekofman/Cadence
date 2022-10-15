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
        start_time
    } 
    }, { user }  ) => {
    // const dispatch = useDispatch()
    
    // const athleteId =  
    
        // const userFname = user.id === athleteId ? fname : '' 

    return (
        <>
            <li key={id}>
                <div>{title}</div>
                <div>{description}</div>
                
                <Link to={`/activities`}>{athleteId}</Link>
            </li>
        </>

     );
}
 
export default ActivityIndexItem;