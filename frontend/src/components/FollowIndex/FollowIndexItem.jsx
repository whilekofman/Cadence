import { useSelector } from "react-redux";
import { getSession } from "../../store/session";
import AthleteName from "../AthleteName";
import FollowButton from "../FollowButton";
import ProfilePicture from "../ProfilePicture";

const FollowIndexItem = ({ follow, userId, side }) => {
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
    if (side === "left"){
    return (
        <>
            <div className={`profile-picture-name-container-${page}`}>
                <div className={`profile-picture-${page}`}>
                    <ProfilePicture
                        profilePictureUrl={profilePicture}
                        page={page}
                        targetId={targetId}
                    />
                </div>
                <div className={`athlete-name-${page}`}>
                    <AthleteName
                        fname={displayName.split(" ")[0]}
                        lname={displayName.split(" ")[1]}
                        targetId={targetId}
                    />
                </div>
            </div>
            {targetId !== currentUser.id && (
                <FollowButton page={page} id={targetId} />
            )}

        </>
    )} else {return (
        <div className={`profile-picture-${page}-${side}`}>
            <ProfilePicture
                profilePictureUrl={profilePicture}
                page={page}
                targetId={targetId}
            />
        </div>
    );
    }
    
};

export default FollowIndexItem;
