import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { getFollowers, getFollowing } from "../../store/follows";
import { getSession } from "../../store/session";
import { getUser } from "../../store/users";
import {
    bothUsersFollow,
    reducedUsersFollowers,
    reducedUsersFollowing,
} from "../utils/followsreducers";
import FollowIndexItem from "./FollowIndexItem";

const FollowIndex = ({
    userId,
    fname,
    all,
    right,
    selectDropDown,
    changeSelectDropDown,
}) => {
    // const [selectDropDown, setSelectDropDown] = useState(followsState);

    const [displayFollows, setDisplayFollows] = useState([]);
    const [clickCount, setClickCount] = useState(false);

    const [following, setFollowing] = useState([]);
    // const [athleteFollowing, setAthleteFollowing] = useState([])

    const [followers, setFollowers] = useState([]);

    const currentUser = useSelector(getSession);
    const followingStore = useSelector(getFollowing);
    const followersStore = useSelector(getFollowers);
    // console.log("Index:", followsState)
    // console.log("dropdown:", selectDropDown);

    // useEffect(() => {
    //     // setFollowers(followersStore);
    //     // setAthleteFollowing(
    //     //     Object.values(reducedUsersFollowing(followingStore, userId))
    //     // );
    //     setSelectDropDown(followsState || "following");
    // }, [userId]);

    console.log(changeSelectDropDown);
    // const cfs = changeSelectDropDown;

    const currentUserPage = userId === currentUser.id;

    const athleteFollowing = Object.values(
        reducedUsersFollowing(followingStore, userId)
    );
    const athleteFollowers = Object.values(
        reducedUsersFollowers(followersStore, userId)
    );
    const bothFollowing = Object.values(
        bothUsersFollow(followingStore, currentUser.id, userId)
    );
    // console.log("Athlete Followers Store", athleteFollowers);
    // console.log("FOLLOWING STORE: ", followingStore);

    const noFollowersText = () => {
        if (selectDropDown === "following") {
            return !currentUserPage
                ? `${fname} is not following any athletes yet`
                : "You are not following any athletes yet";
        } else if (selectDropDown === "folllowers") {
            return !currentUser
                ? `${fname} does not have any athletes following them`
                : "You do not have any athletes following you";
        } else {
            return "You do not follow any of the same athletes";
        }
    };
    // debugger;

    const handleClickFollowCount = (e) => {
        // setClickCount((value) => !value);
        // debugger;
        // console.log(e.target.id, clickCount);
        // console.log(cthishangeFollowsState);
        console.log(e.target)
        // changeSelectDropDown(e);
    };

    const athletesFollowingText = !currentUserPage
        ? `${fname} is Following`
        : "I'm Following";

    const athletesFollowersText = !currentUserPage
        ? `Following ${fname}`
        : "Following me";

    // console.log("DROP DOWN: ", selectDropDown);
    useEffect(() => {
        if (selectDropDown === "following") {
            setDisplayFollows(athleteFollowing);
        } else if (selectDropDown === "followers") {
            setDisplayFollows(athleteFollowers);
        } else {
            setDisplayFollows(bothFollowing);
        }
    }, [selectDropDown, followingStore, clickCount]);
    // console.log("display", displayFollows);
    const followingElements = displayFollows.map((follow) => (
        <div className="follows-index-item" key={follow.id}>
            <FollowIndexItem follow={follow} userId={userId} />
        </div>
    ));

    return (
        <div className="following-wrapper">
            {all && (
                <>
                    <h3 className="following-title">Following</h3>

                    <div className="followers-dropdown-container">
                        <select
                            className="followers-dropdown"
                            value={selectDropDown}
                            onChange={(e) =>
                                changeSelectDropDown(e.target.value)
                            }
                        >
                            <option value="following">
                                {`${athletesFollowingText}`}
                            </option>
                            <option value="followers">
                                {`${athletesFollowersText}`}
                            </option>
                            {!currentUserPage && (
                                <option value="both">
                                    Athletes you both follow
                                </option>
                            )}
                        </select>
                    </div>
                    <div className="follows">{followingElements}</div>
                    {!displayFollows.length && (
                        <div className="no-followers">{noFollowersText()}</div>
                    )}
                </>
            )}
            {right && (
                <>
                    <div className="social-stats-container">
                        <h3 className="social-stats">Social Stats</h3>
                        <div className="follows-followers-count-container">
                            <div className="follows-single-count-container">
                                <div className="follow-count-text">
                                    Following
                                </div>
                                <div className="following-count">
                                    {athleteFollowing.length}
                                </div>
                            </div>
                            <div className="follows-single-count-container">
                                <div className="follow-count-text">
                                    Followers
                                </div>
                                <div
                                    className="following-count"
                                    key="followers"
                                    value="x"
                                    onClick={() => changeSelectDropDown("followers")}
                                >
                                    {athleteFollowers.length}
                                </div>
                            </div>
                        </div>

                        <h3 className="both-following">Both Following</h3>
                    </div>
                </>
            )}
        </div>
    );
};

export default FollowIndex;
