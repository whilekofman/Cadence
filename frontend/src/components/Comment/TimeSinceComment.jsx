import ReactTimeAgo from 'react-time-ago'


const TimeSinceComment = ( date ) => {
    return ( 
        <div className="time-since-comment">
            TimeSinceComment: <ReactTimeAgo date={date} locale="en-US" timeStyle={'strava'}/>
        </div>
     );
}
 
export default TimeSinceComment;