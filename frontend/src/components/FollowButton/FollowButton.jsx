import { useDispatch, useSelector } from "react-redux";
import {
    deleteFollow,
    getFollowers,
    getFollowing,
    newFollow,
} from "../../store/follows";
import { getSession } from "../../store/session";
import { reducedUsersFollowing } from "../utils/reducers";

const FollowButton = ({ location, id }) => {
    const dispatch = useDispatch();
    const currentUser = useSelector(getSession);
    const followers = useSelector(getFollowers);
    const following = useSelector(getFollowing);

    
    const reducedFollowing = reducedUsersFollowing(following, currentUser.id)
    // const reducedFollowing = following.reduce(
        //     (acc, following) => ({ ...acc, [following.followingId]: following }),
        //     {}
        // );
        
    const followButtonCss =
        id in reducedFollowing
            ? `follow-button follow-button-${location} followed-button`
            : `follow-button follow-button-${location}`; 
    
    
    const followText =
        id in reducedFollowing ? "Unfollow" : "Follow";

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

export default FollowButton;
