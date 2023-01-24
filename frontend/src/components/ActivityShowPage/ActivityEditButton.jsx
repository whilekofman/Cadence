import { Link } from "react-router-dom"

export const ActivityEditButton = ({actId}) => {

    const path = `/activities/${actId}/edit`
    return (
        <Link to={path}>
            <button className="edit-activity-button">
                <span className="material-symbols-outlined">edit</span>
            </button>
        </Link>
    );
    
}

export const ActivityEditLink = ({ actId }) => {
    const path = `/activities/${actId}/edit`
    return (
        <Link to={path} >
            <button className="activity-add-description">
                
                Add a description
            </button>
        </Link>
    );
}
