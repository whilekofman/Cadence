import { Link } from "react-router-dom"

export const ActivityEditButton = ({actId}) => {

    const path = `/activities/${actId}/edit`
    return (
        <Link to={path}><button className="edit-activity-button">EDIT</button></Link>
    )
    
}

export const ActivityEditLink = ({ actId }) => {
    const path = `/activities/${actId}/edit`
    return (
        <Link className='activity-add-description' to={path}>Add a description</Link>
    )
}
