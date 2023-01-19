import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useParams } from "react-router-dom";
import { fetchUser, getUser } from "../../store/users";
import FollowIndex from "../FollowIndex";
import ProfilePicture from "../ProfilePicture";
import AthleteName from "../AthleteName";
import FollowButton from "../FollowButton";
import { getSession } from "../../store/session";
import LeftSide from "./LeftSide";
import RightSide from "./RightSide";

const UserShowPage = () => {
    const dispatch = useDispatch();
    const { userId } = useParams();
    const user = useSelector(getUser(userId));
    const currentUser = useSelector(getSession);
    const [displayFollowsState, setDisplayFollowsState] = useState("following");
    // const followingStore = 

    const [loaded, setLoaded] = useState(false);

    const [display, setDisplay] = useState()
    
    useEffect(() => {
        dispatch(fetchUser(userId)).then(() => setLoaded(true))//.then(() => setDisplayFollowsState("following")));
    }, [userId]);

    if (!currentUser) {
        return <Redirect to="/login" />;
    }

    if (!user) {
        return null;
    }
    const { id, fname, lname, profilePictureUrl } = user;

    const profilePicture = profilePictureUrl;

    return (
        <div className="user-show-wrapper">
            <div className="user-show-items">
                <ProfilePicture
                    profilePictureUrl={profilePicture}
                    page={"user"}
                    targetId={id}
                />
                <div className="athlete-name-user-show">
                    <AthleteName fname={fname} lname={lname} targetId={id} />
                </div>
                {currentUser.id !== id && (
                    <div className="follow-button-user-show-container">
                        <FollowButton page="user-show" id={id} all={true} />
                    </div>
                )}
                <div className="left-right">
                    <div className="display-buttons-content">
                        <div className="display-buttons">
                            <button className="following-button-user-show">
                                Following
                            </button>
                            <button className="activities-button-user-show">
                                Activities
                            </button>
                        </div>

                        {loaded && (
                            <div className="left-side">
                                <LeftSide
                                    userId={id}
                                    fname={fname}
                                    followsState={displayFollowsState}
                                    displayFollowsState={
                                        setDisplayFollowsState
                                    }
                                />
                            </div>

                            // <div className="following">
                            //     {/* <FollowIndex
                            //         userId={id}
                            //         fname={fname}
                            //         all={true}
                            //     /> */}
                            // </div>
                        )}
                    </div>
                    <div className="right">
                        {loaded && <RightSide userId={id} fname={fname} />}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserShowPage;
