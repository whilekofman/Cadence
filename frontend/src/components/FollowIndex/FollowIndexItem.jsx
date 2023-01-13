const FollowIndexItem = ({ follow }) => {

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

    return (
        <>
            <img src={followeeProfilePicture} alt="follower" />
            {displayName}
            {followerId} {followerId}
        </>
    );
};

export default FollowIndexItem;
