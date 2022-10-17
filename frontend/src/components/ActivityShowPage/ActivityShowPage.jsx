import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchActivity, getActivity } from "../../store/activities";

const ActivityShowPage = () => {
    const { activityId } = useParams();
 
        // id,       
        // // fname,
        // // lname,
        // startTime,
        // title,
        // description,
        // sport,
        // distance,
        // hours,
        // minutes,
        // seconds,
        // intensity,
        // hr,
        // pnotes,
        // tags,
        // purpose 
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
        intensity,
        hr,
        pnotes,
        tags,
        purpose  } = useSelector(getActivity(activityId))
    debugger

    const dispatch = useDispatch()
    // debugger

    useEffect(() => {
        dispatch(fetchActivity(activityId))
    }, [dispatch, activityId])
    
        // const {
        // id,
        // fname,
        // lname,
        // startTime,
        // title,
        // description,
        // sport,
        // distance,
        // hours,
        // minutes,
        // seconds,
        // intensity,
        // hr,
        // pnotes,
        // tags,
        // purpose
        
    // } = activity
    return ( 
        <>
            Am I where I belong? 
            <div className="id">{id}</div>
        </>
     );
}
 
export default ActivityShowPage;