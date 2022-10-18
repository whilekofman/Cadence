import { Link } from "react-router-dom"

export const ActivityEditButton = ({actId}) => {

    const path = `/activities/${actId}/edit`
    // debugger
    return (
        <Link to={path}><button className="edit-activity-button">EDIT</button></Link>
    )
    
}
