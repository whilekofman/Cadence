
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
        fname,
        lname,
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
        startTime,
        
    } = activity
    
    
    const durationConvert = ( { hours, minutes, seconds } ) => {
        if ( hours > 0 ) {
            return hours.toString() + ' h ' + minutes.toString() + ' m'
            // return {hours, minutes} 
        } else {
            return minutes.toString() + ' m ' +  seconds.toString() + ' s'
        }

    }





    // { hours }: { minutes }: { seconds }
    return (
        <>

            <div className='top-bar'>
                <Link to={`/activities`}><i className="fa-solid fa-user"></i></Link>
                <span className="athlete-name-activity">
                <div>{fname} {lname}</div>
                </span>
                <div>{startTime}</div>
            </div>
            <div>{title}</div>
            <div>{durationConvert( {hours, minutes, seconds} )}</div>
            <div>{description}</div>
            <div>{sport}</div>
            <div>{distance} miles</div>
            <div>{intensity}</div>
            <div>{hr}</div>
            <div>{pnotes}</div>
            <div>{tags}</div>
            <div>{purpose}</div>


        </>

     );
}
 
export default ActivityIndexItem;