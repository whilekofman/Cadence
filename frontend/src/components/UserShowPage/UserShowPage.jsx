import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getFollowers, getFollowing } from "../../store/follows";
import { fetchUser, getUser } from "../../store/users";
import FollowIndexItem from "../FollowIndex/FollowIndexItem";
import FollowIndex from "../FollowIndex";
import ProfilePicture from "../ProfilePicture";
import AthleteName from "../AthleteName";
import FollowButton from "../FollowButton";

const UserShowPage = () => {
    const dispatch = useDispatch();
    const { userId } = useParams();
    const user = useSelector(getUser(userId));
    const currentUser = useSelector(getSelection);

    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        dispatch(fetchUser(userId)).then(() => setLoaded(true));
        // setLoaded(true)
    }, [userId]);

    if (!user) {
        return null;
    }
    const { id, fname, lname, profilePictureUrl } = user;

    return (
        <div className="user-show-wrapper">
            <div className="user-show-items">
                <ProfilePicture
                    profilePictureUrl={profilePictureUrl}
                    page={"user"}
                    targetId={id}
                />
                {/* {fname} {lname} */}
                <div className="athlete-name-user-show">
                    <AthleteName fname={fname} lname={lname} targetId={id} />
                </div>
                {currentUser.id !== id && (
                    <div className="follow-button-user-show-container">
                        <FollowButton page="user-show" id={id} />
                    </div>
                )}
                {loaded && (
                    <div className="following">
                        <FollowIndex
                            userId={id}
                            fname={fname}
                            loaded={loaded}
                        />
                    </div>
                )}
            </div>
        </div>
    );
};

export default UserShowPage;
