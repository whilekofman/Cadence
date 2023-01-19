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

const FollowIndex = ({ userId, fname, all, right, displayFollowsStateValue, setDisplayFollowsState }) => {

    const [selectDropDown, setSelectDropDown] = useState(
        "following"
    );

    const [displayFollows, setDisplayFollows] = useState([]);
    const [clickCount, setClickCount] = useState(false)

    const [following, setFollowing] = useState([]);
    // const [athleteFollowing, setAthleteFollowing] = useState([])

    const [followers, setFollowers] = useState([]);

    const currentUser = useSelector(getSession);
    const followingStore = useSelector(getFollowing);
    const followersStore = useSelector(getFollowers);
    console.log(displayFollowsStateValue)
    useEffect(() => {
        // setFollowers(followersStore);
        // setAthleteFollowing(
        //     Object.values(reducedUsersFollowing(followingStore, userId))
        // );
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
    console.log("Athlete Following Store", athleteFollowing);
    console.log("Athlete Followers Store", athleteFollowers);
    console.log("FOLLOWING STORE: ", followingStore);

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
    
    const handleClickFollowCount = () => {
        setClickCount(value => !value)
        setDisplayFollowsState("followers");
        console.log(selectDropDown, clickCount)
    } 

    const athletesFollowingText = !currentUserPage
        ? `${fname} is Following`
        : "I'm Following";

    const athletesFollowersText = !currentUserPage
        ? `Following ${fname}`
        : "Following me";

    useEffect(() => {
        if (selectDropDown === "following") {
            setDisplayFollows(athleteFollowing);
            console.log(athleteFollowing)
        } else if (selectDropDown === "followers") {
            setDisplayFollows(athleteFollowers);
            console.log(athleteFollowing);

        } else {
            setDisplayFollows(bothFollowing);
        }
    }, [selectDropDown, followingStore, clickCount]);

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
                            onChange={(e) => setSelectDropDown(e.target.value)}
                        >
                            <option value="following">
                                {`${athletesFollowingText}`}
                            </option>
                            <option value={"followers"}>
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
                                <div className="following-count" onClick={handleClickFollowCount}>
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
