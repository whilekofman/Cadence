import { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { getActivities } from "../../store/activities";
import { getFollowers, getFollowing } from "../../store/follows";
import { getSession } from "../../store/session";
import AthleteName from "../AthleteName";
import ProfilePicture from "../ProfilePicture";
import {
    reducedUsersFollowers,
    reducedUsersFollowing,
} from "../utils/followsreducers";
import dayjs from "dayjs";
import { Link } from "react-router-dom";

const UserWidget = ({ currentUserActivities }) => {
    const currentUser = useSelector(getSession);
    const followingStore = useSelector(getFollowing);
    const followerStore = useSelector(getFollowers);

    const { id, fname, lname, profilePictureUrl } = currentUser;
    const userFollowingCount = Object.values(
        reducedUsersFollowing(followingStore, id)
    ).length;
    const usersFollowersCount = Object.values(
        reducedUsersFollowers(followerStore, id)
    ).length;

    const currentUserActivitiesSorted = currentUserActivities.sort((a, b) => {
        return new Date(b.startTime) - new Date(a.startTime);
    });
    const mostRecentActivity = currentUserActivities[0];

    let mostRecentDate;
    if (currentUserActivitiesSorted.length > 0) {
        mostRecentDate = dayjs(mostRecentDate).format("MMMM D YYYY");
    }
    const handleClickFollows = e => {
        console.log(e.target.id)
    }

    return (
        <>
            <div className="user-widget">
                <div className="pic-container-widget">
                    <ProfilePicture
                        profilePictureUrl={profilePictureUrl}
                        targetId={id}
                        page={"user-widget"}
                    />
                </div>
                <div className="name-and-counts">
                    <AthleteName
                        fname={fname}
                        lname={lname}
                        targetId={id}
                        page="user-widget"
                    />
                    <div className="counts-widget">
                        <div className="count-title-value-container-widget">
                            <div className="count-title-widget">Following</div>
                            <b className="count-value-widget" id="following">
                                {userFollowingCount}
                            </b>
                        </div>
                        <div className="count-title-value-container-widget">
                            <div className="count-title-widget">Followers</div>
                            <b className="count-value-widget" id="followers" onClick={(e) => handleClickFollows(e)}>
                                {usersFollowersCount}
                            </b>
                        </div>
                        <div className="count-title-value-container-widget">
                            <div className="count-title-widget">Activities</div>
                            <b className="count-value-widget">
                                {currentUserActivities.length}
                            </b>
                        </div>
                    </div>
                </div>
                <div className="line-under"></div>
                {currentUserActivitiesSorted.length > 0 && (
                    <div className="most-recent-activity-container">
                        <div className="latest-activity-text">
                            Latest activity
                        </div>
                        <Link
                            className="latest-activity-link"
                            to={`/users/${id}`}
                        >
                            <div className="activity-title-widget">
                                {mostRecentActivity.title}
                                <div>•</div>
                                <div className="activty-start-time-widget">
                                    {mostRecentDate}
                                </div>
                            </div>
                        </Link>
                    </div>
                )}
            </div>
        </>
    );
};

export default UserWidget;
