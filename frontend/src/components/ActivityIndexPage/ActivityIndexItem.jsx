
import { Link } from "react-router-dom";
import inline from '../../assets/logo/skatelogo.png'
import bike from '../../assets/logo/bikelogo.png'

const ActivityIndexItem = ( { activity } ) => {

    const {
        id,
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

        
    } = activity
    

    
    const durationConvert = ( { hours, minutes, seconds } ) => {
        if ( hours > 0 ) {
            return hours.toString() + ' h ' + minutes.toString() + ' m'
            // return {hours, minutes} 
        } else {
            return minutes.toString() + ' m ' +  seconds.toString() + ' s'
        }

    }

    const runningSpeed = ( { hours, minutes, seconds, distance }) => {
        const timeInSeconds = (hours * 3600) + (minutes * 60) + seconds
        const runCalc =  ( ( timeInSeconds / distance ) / 60 ) 
        const formatRunMinutes = Math.floor(runCalc)
        const formatRunSeconds = Math.floor(60 * (runCalc - formatRunMinutes)) / 100

        return formatRunMinutes + formatRunSeconds
    }

    const [speedType, append] = sport === 'run' ? ['Pace', ' /mi'] : ['Speed', ' mi/h']

    const speed = ( {hours, minutes, seconds, distance, sport} ) => {
        const timeInSeconds = (hours * 3600) + (minutes * 60) + seconds

        const speed = sport === 'run' ? 

            runningSpeed( { hours, minutes, seconds, distance } )
            // formatRunMinutes + formatRunSeconds
        
            :  
        
            ((distance / ( timeInSeconds / 3600 ) * 100 ) / 100 ).toFixed(2) 
            
        // debugger
        return speed
    }





    // { hours }: { minutes }: { seconds }
    return (
        <>

            <div className='top-bar'>
                <div className="athlete-name-activity">
                    <div className="profile-pic">
                        <i className="fa-solid fa-user"></i>
                    </div>
                    <div className="name">
                        {fname} {lname}<br />
                        {startTime}
                    </div>
                    
                    
                    
                </div>
            </div>
            <div className="title">
                <div className="sport">{sport}</div>
                <Link className="title-link" to={`/activities/${id}`}>{title}</Link>
            </div>
             
            <div className="description">{description}</div>
             <div className="matrix">
                <div className="distance">  
                    Distance<br></br>   
                    {distance} mi
                </div>
                <div className="speedbox">
                    <div className="speed-type">{speedType}</div>
                    <div className="speed">{speed({ hours, minutes, seconds, distance, sport })}{append}</div>
                </div>
                <div className="time">
                    time <br />
                    {durationConvert( { hours, minutes, seconds } )}
                </div>
             </div>
            
            <div></div>



        </>

     );
}
 
export default ActivityIndexItem;

    // activity: {
    //      id,
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

                {/* <div>{intensity}</div>
            <div>{hr}</div>
            <div>{pnotes}</div>
            <div>{tags}</div>
            <div>{purpose}</div> */}

                    // intensity,
        // hr,
        // pnotes,
        // tags,
        // purpose

                // const runCalc =  ( ( timeInSeconds / distance ) / 60 ) 
        // const formatRunMinutes = Math.floor(runCalc)
        // const formatRunSeconds = Math.floor(60 * (runCalc - formatRunMinutes)) / 100
        // debugger  
            // things that show on index: { fname, lname, date, distance, speed, duration } 

    // const icons = {
    //     run: <i className="fa-thin fa-person-running"></i>,
    //     inline: <image src={inline} alt='inline logo'></image>, 
    //     bike: <image src={bike} alt='bike logo'></image>
    // }

    // const icon = sport === 'run' ? 
    //         <i className="fa-thin fa-person-running"></i> 
    
    //     :
    //         <image src={inline} alt='inline logo'></image> 
    // // icons.run : icons.inline