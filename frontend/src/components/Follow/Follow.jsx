import { useDispatch, useSelector } from "react-redux";
import {
    deleteFollow,
    getFollowers,
    getFollowing,
    newFollow,
} from "../../store/follows";
import { getSession } from "../../store/session";

const Follow = ({ location, id }) => {
    const dispatch = useDispatch();
    const currentUser = useSelector(getSession);
    const followers = useSelector(getFollowers);
    const following = useSelector(getFollowing);

    const followButtonCss = `follow-button follow-button-${location}`;

    const reducedFollowing = following.reduce(
        (acc, following) => ({ ...acc, [following.followingId]: following }),
        {}
    );

    const followText =
        id !== currentUser.id && id in reducedFollowing ? "Unfollow" : "Follow";

    const handleFollowAction = (e) => {
        e.preventDefault();
        if (id in reducedFollowing) {
            const removeFollow = reducedFollowing[id].id;
            dispatch(deleteFollow(removeFollow));
        } else {
            const follow = {
                followerId: currentUser.id,
                followingId: id,
            };
            dispatch(newFollow(currentUser.id, follow));
        }
    };

    return (
        <>
            <button onClick={handleFollowAction} className={followButtonCss}>
                {followText}
            </button>
        </>
    );
};

export default Follow;
