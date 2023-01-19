import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import {
    deleteFollow,
    getFollowers,
    getFollowing,
    newFollow,
} from "../../store/follows";
import { getSession } from "../../store/session";
import { reducedUsersFollowing } from "../utils/followsreducers";

const FollowButton = ({ page, id }) => {
    const dispatch = useDispatch();
    const currentUser = useSelector(getSession);
    const followers = useSelector(getFollowers);
    const following = useSelector(getFollowing);

    const reducedFollowing = reducedUsersFollowing(following, currentUser.id);

    const followButtonCss =
        id in reducedFollowing
            ? `follow-button follow-button-${page} followed-button`
            : `follow-button follow-button-${page}`;

    const followText = id in reducedFollowing ? "Unfollow" : "Follow";

    const handleFollowAction = (e) => {
        e.preventDefault();
        if (!currentUser) {
            <Redirect to="/login" />;
        }
        if (id in reducedFollowing) {
            const removeFollow = reducedFollowing[id].id;
            dispatch(deleteFollow(removeFollow));
        } else {
            const follow = {
                followerId: currentUser.id,
                followingId: id,
            };
            dispatch(newFollow(currentUser.id, follow));
            console.log("reducedFollowing: ", reducedFollowing)
        }
    };

    return (
        <>
            {currentUser.id !== id && (
                <button
                    onClick={handleFollowAction}
                    className={followButtonCss}
                >
                    {followText}
                </button>
            )}
        </>
    );
};

export default FollowButton;
