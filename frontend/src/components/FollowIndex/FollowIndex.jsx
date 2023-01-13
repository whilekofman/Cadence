import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { getFollowers, getFollowing } from "../../store/follows";
import { getSession } from "../../store/session";
import { getUser } from "../../store/users";
import {
    reducedUsersFollowers,
    reducedUsersFollowing,
} from "../utils/reducers";
import FollowIndexItem from "./FollowIndexItem";

const FollowIndex = ({ userId, fname }) => {
    const [selectDropDown, setSelectDropDown] = useState("");
    
    const [displayFollows, setDisplayFollows] = useState([]);

    const currentUser = useSelector(getSession);
    const followingStore = useSelector(getFollowing);
    const followersStore = useSelector(getFollowers);
    const athleteFollowing = Object.values(
        reducedUsersFollowing(followingStore, userId)
    );
    const athleteFollowers = Object.values(
        reducedUsersFollowers(followersStore, userId)
    );
    const currentUserFollowing = Object.values(
        reducedUsersFollowing(followingStore, currentUser.id)
    );

    const athletesFirstName = userId !== currentUser.id ? fname : "I'm" 

    
    useEffect(() => {
        if (selectDropDown === "following") {
            setDisplayFollows(athleteFollowing);
        } else if (selectDropDown === "followers") {
            console.log("work")
            setDisplayFollows(athleteFollowers);
        } else {
            setDisplayFollows(currentUserFollowing);
        }
    }, [selectDropDown]);

    const test = "test";
  
    const followingElements = displayFollows.map((follow) => (
        <div className="follows-index-item" key={follow.id}>
            <FollowIndexItem follow={follow} test={test} />
        </div>
    ));

    if (displayFollows.length !== 0) {
        return (
            <div className="following-wrapper">
                <h1 className="following-title">Following</h1>
                <div className="followers-dropdown-container">
                    <select
                        className="followers-dropdown"
                        value={selectDropDown}
                        onChange={(e) => e.target.value}
                    >
                        <option value="following">
                            {`${athletesFirstName} is Following`}
                        </option>
                        <option value={"followers"}>
                            {`Following ${athletesFirstName}`}
                        </option>
                    </select>

                    {followingElements}
                </div>
            </div>
        );
    } else {
        return <div>noFollowers</div>;
    }
};

export default FollowIndex;
