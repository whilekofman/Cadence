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
import ProfilePicture from "../ProfilePicture";
import { ActivityEditButton, ActivityEditLink } from "./ActivityEditButton";
import dayjs from "dayjs";
import localizedFormat from "dayjs/plugin/localizedFormat";
import utc from "dayjs/plugin/utc";
import { speed, durationConvert } from "../utils/activityspeed/speedConverter";

dayjs.extend(localizedFormat);
dayjs.extend(utc);

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
        athleteProfilePicture,

    } = activity;

    const daysOfWeek = [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
    ];

    const sportName = sport.slice(0, 1).toUpperCase() + sport.slice(1);
    const formatedDate = dayjs(startTime).utc().format(`LT on dddd LL`);

    const page = "activity-show";
    const editButton =
        !currentUser || currentUser.id !== athleteId ? (
            ""
        ) : (
            <ActivityEditButton actId={activityId} />
        );

    const setDisplayDescription = (desc) => {
        if (!desc && currentUser && currentUser.id === athleteId) {
            return (
                <div className="add-description-activity-show">
                    <ActivityEditLink
                        className="add-description-link"
                        actId={activityId}
                    ></ActivityEditLink>
                </div>
            );
        } else {
            return <div className="description-activity-show">{desc}</div>;
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
                        <div className="sport-activity-show">- {sportName}</div>
                    </div>
                    <div className="buttons-activity-show">{editButton}</div>
                </div>
                <div className="activity-show-details-container">
                    <div className="activity-show-left-side">
                        <div className="athlete-picture-activty-show">
                            <ProfilePicture
                                profilePictureUrl={athleteProfilePicture}
                                page="activity-show"
                                targetId={athleteId}
                            />
                        </div>
                        <div className="time-title-description-activity-show">
                            <time className="start-time-activity-show">
                                {formatedDate}
                            </time>
                            <h3 className="title-activity-show">{title}</h3>
                            <div className="description-activity-show">
                                {setDisplayDescription(description)}
                            </div>
                        </div>
                    </div>
                    <div className="activity-show-right-side">
                        <div className="stat-container-activity-show">
                            <div className="stat-activity-show">
                                {`${distance}`}
                            </div>
                            <div className="stat-label-activity-show">
                                Distance
                            </div>
                        </div>
                        <div className="stat-container-activity-show">
                            <div className="stat-activity-show">
                                {durationConvert({
                                    hours,
                                    minutes,
                                    seconds,
                                    page,
                                })}
                            </div>
                            <div className="stat-label-activity-show">
                                Moving Time
                            </div>
                        </div>
                        <div className="stat-container-activity-show">
                            <div className="stat-activity-show">
                                {speed({
                                    hours,
                                    minutes,
                                    seconds,
                                    distance,
                                    sport,
                                })}
                                <div className="speed-type-activity-show">{`${append}`}</div>
                            </div>
                            <div className="stat-label-activity-show">
                                {`Avg ${speedType} `}
                            </div>
                        </div>
                        {hr > 0 && (
                            <div className="stat-container-activity-show">
                                <div className="stat-activity-show">{hr}</div>
                                <div className="stat-label-activity-show">
                                    Heart Rate
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ActivityShowPage;
