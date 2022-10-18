    export const runningSpeed = ( { hours, minutes, seconds, distance }) => {
        const timeInSeconds = (hours * 3600) + (minutes * 60) + seconds
        const runCalc =  ( ( timeInSeconds / distance ) / 60 ) 
        const formatRunMinutes = Math.floor(runCalc)
        const formatRunSeconds = Math.floor(60 * (runCalc - formatRunMinutes)) / 100

        return formatRunMinutes + formatRunSeconds
    }
   
    export const speedTypeChange = sport => {
        const [speedType, append] = sport === 'run' ? ['Pace', ' /mi'] : ['Speed', ' mi/h']
        return [speedType, append]
    }

   export const speedValue = ( {hours, minutes, seconds, distance, sport} ) => {
        const timeInSeconds = (hours * 3600) + (minutes * 60) + seconds

        const speed = sport === 'run' ? 

            runningSpeed( { hours, minutes, seconds, distance } )
            // formatRunMinutes + formatRunSeconds
        
            :  
        
            ( (distance / ( timeInSeconds / 3600 ) * 100 ) / 100 ).toFixed(2) 
            
        // debugger
        return speed
    }