// import { useDispatch } from "react-redux";

import { Link } from "react-router-dom";

const ActivityIndexItem = ( { activity, user } ) => {
    // activity: {
    //     id,
    //         athleteId,
    //         title,
    //         description,
    //         sport,
    //         distance,
    //         hours,
    //         minutes,
    //         seconds,
    //         intensity,
    //         hr,
    //         pnotes,
    //         tags,
    //         purpose,
    //         startTime
    // } 
    const {
        id,
        athleteId,
        // athleteName,
        title,
        description,
        sport,
        distance,
        hours,
        minutes,
        intensity,
        hr,
        pnotes,
        tags,
        purpose,
        startTime
    } = activity
    // const dispatch = useDispatch()
    // const { userId, fname, lname } = user
    // // const athleteId =  
    // const { userId, fname, lname } = user
    // const userFname = userId === athleteId ? user.fname : '' 
    return (
        <>

                <Link to={`/activities`}>{athleteId}</Link>
                {/* <div>does this display {athleteName}</div> */}
                <div>{startTime}</div>
                <div>{title}</div>
                <div>{description}</div>
                <div>{sport}</div>
                <div>{distance} miles</div>
                <div>{hours}:{minutes}</div>
                <div>{intensity}</div>
                <div>{hr}</div>
                <div>{pnotes}</div>
                <div>{tags}</div>
                <div>{purpose}</div>


        </>

     );
}
 
export default ActivityIndexItem;