import { useSelector } from "react-redux";
import { getSession } from "../../store/session";
import AthleteName from "../AthleteName";
import FollowButton from "../FollowButton";
import ProfilePicture from "../ProfilePicture";

const FollowIndexItem = ({ follow, userId }) => {
    const currentUser = useSelector(getSession);
    const {
        id,
        followerName,
        followingName,
        followerId,
        followingId,
        followerProfilePicture,
        followeeProfilePicture,
    } = follow;
    const displayName = followingName || followerName;
    const fname = displayName.split(" ")[0];
    const lname = displayName.split(" ")[1];
    const profilePicture = followerProfilePicture || followeeProfilePicture;
    const targetId = userId === followingId ? followerId : followingId;
    const page = "follow-index";

    return (
        <>
            <ProfilePicture
                profilePictureUrl={profilePicture}
                page={page}
                targetId={targetId}
            />
            <AthleteName
                fname={displayName.split(" ")[0]}
                lname={displayName.split(" ")[1]}
                targetId={targetId}
            />
            {targetId !== currentUser.id && (
                <FollowButton page={page} id={targetId} />
            )}
            {followerId} {followingId}
        </>
    );
};

export default FollowIndexItem;
