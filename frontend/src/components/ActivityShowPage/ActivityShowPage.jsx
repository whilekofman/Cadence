import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { fetchActivity, getActivity } from "../../store/activities";
import {
    fetchComments,
    fetchCommentsActivities,
    getComments,
} from "../../store/comments";
import { getSession } from "../../store/session";
import { speedTypeChange, speedValue } from "../../store/util/speedconverter";
import AthleteName from "../AthleteName";
import { ActivityEditButton, ActivityEditLink } from "./ActivityEditButton";

const ActivityShowPage = () => {
    const { activityId } = useParams();
    const activity = useSelector(getActivity(activityId));
    const currentUser = useSelector(getSession);
    const dispatch = useDispatch();
    const comments = useSelector(getComments);

    useEffect(() => {
        dispatch(fetchActivity(activityId));
    }, [dispatch, activityId]);

    if (!activity) {
        return null;
    }

    const {
        id,
        athleteId,
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
        hr,
        speed,
        athleteProfilePicture,
        // intensity,
        // pnotes,
        // tags,
        // purpose
    } = activity;
    // (<button className="edit-activity-button"><Link to={editPath}>Edit</Link></button>)
    // const editPath = `/activities/${activityId}/edit`
    // const [userAvitar, setUserAvitar] = useState(athleteProfilePicture ? athleteProfilePicture : "https://aa-cadence-dev.s3.amazonaws.com/adyson.jpeg")

    const editButton =
        !currentUser || currentUser.id !== athleteId ? (
            ""
        ) : (
            <ActivityEditButton actId={activityId} />
        );

    const profilePicture = athleteProfilePicture
        ? athleteProfilePicture
        : "https://aa-cadence-dev.s3.amazonaws.com/adyson.jpeg";
    const setDisplayDescription = (desc) => {
        if (!desc && currentUser && currentUser.id === athleteId) {
            return (
                <div className="add-description">
                    <ActivityEditLink
                        className="add-description-link"
                        actId={activityId}
                    ></ActivityEditLink>
                </div>
            );
        } else {
            return <div className="description-show">{desc}</div>;
        }
    };
    const [speedType, append] =
        sport === "run" ? ["Pace", " /mi"] : ["Speed", " mi/h"];

    return (
        <div className="activity-show-wrapper">
            <div className="activity-show-card">
                <div className="activity-show-card-header">
                    <div className="athlete-name-activity-show-container">
                        <AthleteName
                            fname={fname}
                            lname={lname}
                            targetId={athleteId}
                            page="activity-show"
                        />
                        <div className="title-activity-show">- {title}</div>
                    </div>
                    <div className="buttons-activity-show">
                        {editButton}
                    </div>
                </div>
            </div>
        </div>
    );
       
};

export default ActivityShowPage;

