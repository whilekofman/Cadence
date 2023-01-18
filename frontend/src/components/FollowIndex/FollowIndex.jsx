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

const FollowIndex = ({ userId, fname, loaded }) => {
    const [selectDropDown, setSelectDropDown] = useState("following");

    const [displayFollows, setDisplayFollows] = useState([]);

    const [following, setFollowing] = useState([]);

    const [followers, setFollowers] = useState([]);

    const currentUser = useSelector(getSession);
    const followingStore = useSelector(getFollowing);
    const followersStore = useSelector(getFollowers);

    useEffect(() => {
        setFollowing(followingStore);
        setFollowers(followersStore);
        setSelectDropDown("following");
    }, [userId]);

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

    const athletesFollowingText = !currentUserPage
        ? `${fname} is Following`
        : "I'm Following";

    const athletesFollowersText = !currentUserPage
        ? `Following ${fname}`
        : "Following me";

    useEffect(() => {
        if (selectDropDown === "following") {
            setDisplayFollows(athleteFollowing);
        } else if (selectDropDown === "followers") {
            setDisplayFollows(athleteFollowers);
        } else {
            setDisplayFollows(bothFollowing);
        }
    }, [selectDropDown, followersStore]);

    const followingElements = displayFollows.map((follow) => (
        <div className="follows-index-item" key={follow.id}>
            <FollowIndexItem follow={follow} userId={userId} />
        </div>
    ));


    return (
        <div className="following-wrapper">
            <h3 className="following-title">Following</h3>
            <div className="followers-dropdown-container">
                <select
                    className="followers-dropdown"
                    value={selectDropDown}
                    onChange={(e) => setSelectDropDown(e.target.value)}
                >
                    <option value="following">
                        {`${athletesFollowingText}`}
                    </option>
                    <option value={"followers"}>
                        {`${athletesFollowersText}`}
                    </option>
                    {!currentUserPage && (
                        <option value="both">Athletes you both follow</option>
                    )}
                </select>
            </div>
            <div className="follows">
                {followingElements}
            </div>
            {!displayFollows.length && (
                <div className="no-followers">{noFollowersText()}</div>
            )}
        </div>
    );
};

export default FollowIndex;
