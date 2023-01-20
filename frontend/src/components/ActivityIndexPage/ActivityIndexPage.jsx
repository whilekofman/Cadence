import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { fetchActivities, getActivities } from "../../store/activities";
import { getFollowers, getFollowing } from "../../store/follows";
import { getLikes } from "../../store/likes";
import { getSession } from "../../store/session";
import { reducedUsersFollowers, reducedUsersFollowing } from "../utils/followsreducers";
import ActivityIndexItem from "./ActivityIndexItem";

const ActivityIndexPage = ({ page, userId, userShowActivities }) => {
    const dispatch = useDispatch();
    const activities = useSelector(getActivities);

    const currentUser = useSelector(getSession);

    const likes = useSelector(getLikes);

    const followers = useSelector(getFollowers);
    const following = useSelector(getFollowing);

    const [selectDropDown, setSelectDropDown] = useState("");
    const [displayActivities, setDisplayActivities] = useState(activities);
    const [showCommentsModel, setShowCommentsModal] = useState(false);

    const filteredActivityLikes = (activityId) => {
        return likes.filter(
            (like) =>
                like.likeableType === "Activity" &&
                like.likeableId === activityId
        );
    };
    const cssPage = page || "dashboard";

    const reducedFollowing = reducedUsersFollowing(following, currentUser.id);

    const reducedFollowers = reducedUsersFollowers(followers, currentUser.id);

    const currentUserActivities = activities.filter((activity) => {
        return currentUser.id === activity.athleteId;
    });

    const followingActivities = activities.filter((activity) => {
        return activity.athleteId in reducedFollowing;
    });

    const followersActivities = activities.filter((activity) => {
        return activity.athleteId in reducedFollowers;
    });
    // const userShowActivities =
    //     userId === currentUser.id
    //         ? currentUserActivities
    //         : activities.filter((activity) => {
    //               return userId === activity.athleteId;
    //           });

    useEffect(() => {
        if (page !== "userShow") {
            setSelectDropDown("all");
        } else {
            setSelectDropDown("")
        }
        dispatch(fetchActivities());
    }, []);

    useEffect(() => {
        if (page !== "userShow"){
            if (selectDropDown === "all") {
                setDisplayActivities(activities);
            } else if (selectDropDown === "following") {
                setDisplayActivities(followingActivities);
            } else if (selectDropDown === "followers") {
                setDisplayActivities(followersActivities);
            } else if (selectDropDown === "currentUser") {
                setDisplayActivities(currentUserActivities);
        }} else {
            setDisplayActivities(userShowActivities);
        }

    }, [activities, selectDropDown, userId, userShowActivities]);

    const activityListElements = displayActivities
        .sort((a, b) => new Date(b.startTime) - new Date(a.startTime))
        .map((activity) => (
            <div className="activity" key={activity.id}>
                <ActivityIndexItem
                    activity={activity}
                    activityLikes={filteredActivityLikes(activity.id)}
                />
            </div>
        ));
    const handleSelect = (e) => {
        setSelectDropDown(e.target.value);
    };

    if (!currentUser) {
        return <Redirect to="/login" />;
    }

    return (
        <>
            <div className={`activity-index-body-${cssPage}`}>
                <div className="activity-container">
                    {page !== "userShow" && (
                        <div className="index-dropdown">
                            <select
                                className="follow-dropdown"
                                value={selectDropDown}
                                onChange={handleSelect}
                            >
                                <option value="all">All athletes</option>
                                <option value="following">
                                    Athletes your following
                                </option>
                                <option value="followers">
                                    Athletes following you
                                </option>
                                <option value="cuurentUser">
                                    Your activites
                                </option>
                            </select>
                        </div>
                    )}
                    {activityListElements}
                </div>
            </div>
        </>
    );
};

export default ActivityIndexPage;
