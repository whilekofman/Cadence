
import { Link } from "react-router-dom";

const ActivityIndexItem = ( { activity } ) => {
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
        athleteId,
        fname,
        lname,
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

   

    return (
        <>

                <Link to={`/activities`}>{athleteId}</Link>
                <div>{fname} {lname}</div>
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