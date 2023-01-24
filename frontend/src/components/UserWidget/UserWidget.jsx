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

    return (
        <>
            <div className="widget">
                <div className="pic-container-widget">
                    <ProfilePicture
                        profilePictureUrl={profilePictureUrl}
                        targetId={id}
                        page={"user-widget"}
                    />
                </div>
                <div className="below-pic-widget-container">
                    <AthleteName
                        fname={fname}
                        lname={lname}
                        targetId={id}
                        page="user-widget"
                    />
                    <div className="stats-widget">
                        <div className="stat-title-value-widget">
                            <div className="stat-title-widget">Following</div>
                            <Link
                                className="user-show-link-followers"
                                to={{
                                    pathname: `/users/${id}`,
                                    state: { dashboardFollowers: "following" },
                                }}
                            >
                                <b
                                    className="count-value-widget"
                                >
                                    {userFollowingCount}
                                </b>
                            </Link>
                        </div>
                        <div className="stat-title-value-widget">
                            <div className="stat-title-widget">Followers</div>
                            <Link
                                className="user-show-link-followers"
                                to={{
                                    pathname: `/users/${id}`,
                                    state: { dashboardFollowers: "followers" },
                                }}
                            >
                                <b
                                    className="count-value-widget"
                                    id="followers"
                                >
                                    {usersFollowersCount}
                                </b>
                            </Link>
                        </div>
                        <div className="stat-title-value-widget">
                            <div className="stat-title-widget">Activities</div>
                            <Link
                                className="user-show-link-followers"
                                to={`/users/${id}`}
                            >
                                <b className="count-value-widget">
                                    {currentUserActivities.length}
                                </b>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="line-under"></div>
                {currentUserActivitiesSorted.length > 0 && (
                    <div className="widget-bottom">
                        <div className="widget-bottom-text">
                            Latest activity
                        </div>
                        <Link
                            className="latest-activity-link"
                            to={`/activities/${mostRecentActivity.id}`}
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
