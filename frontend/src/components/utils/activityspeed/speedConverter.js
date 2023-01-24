



export const runningSpeed = ( { hours, minutes, seconds, distance }) => {
    const timeInSeconds = (hours * 3600) + (minutes * 60) + seconds
    const runCalc =  ( ( timeInSeconds / distance ) / 60 ) 
    const formatRunMinutes = Math.floor(runCalc)
    const formatRunSeconds = Math.floor(60 * (runCalc - formatRunMinutes)) / 100

    return formatRunMinutes + formatRunSeconds
}



export const speed = ( { hours, minutes, seconds, distance, sport } ) => {
    const timeInSeconds = (hours * 3600) + (minutes * 60) + seconds

    const speed = sport === 'run' ? 

        `${runningSpeed( { hours, minutes, seconds, distance } )}`
    
        :  
    
        ( (distance / ( timeInSeconds / 3600 ) * 100 ) / 100 ).toFixed(2) 
        
    return speed
}

export const durationConvert = ( { hours, minutes, seconds, page } ) => {
        const activityShowMinutes = minutes < 10 ? `0${minutes}` : minutes 
        const activityShowSeconds = seconds < 10 ? `0${seconds}` : seconds;    


        if ( hours > 0 ) {
            return page === "activity-show"
                ? `${hours}:${activityShowMinutes}:${activityShowSeconds}`
                : `${hours} h ${minutes} m`;
        } else {
            return page === "activity-show"
                ? `${activityShowMinutes}:${activityShowSeconds}`
                : `${minutes} m ${seconds} s`;
        }
        
    }


