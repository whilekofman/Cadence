



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

        runningSpeed( { hours, minutes, seconds, distance } )
        // formatRunMinutes + formatRunSeconds
    
        :  
    
        ( (distance / ( timeInSeconds / 3600 ) * 100 ) / 100 ).toFixed(2) 
        
    return speed
}

export const durationConvert = ( { hours, minutes, seconds } ) => {
        if ( hours > 0 ) {
            return hours.toString() + ' h ' + minutes.toString() + ' m'
            // return {hours, minutes} 
        } else {
            return minutes.toString() + ' m ' +  seconds.toString() + ' s'
        }

    }


//REMOVED FROM ACTIVITY INDEX ITEM 85 - 107runningSpeed

