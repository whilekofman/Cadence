import { useSelector } from "react-redux";
import { getActivities } from "../../store/activities";
import { getFollowers, getFollowing } from "../../store/follows";
import { getSession } from "../../store/session";
import AthleteName from "../AthleteName";
import ProfilePicture from "../ProfilePicture";
import {
    reducedUsersFollowers,
    reducedUsersFollowing,
} from "../utils/followsreducers";

const UserWidget = () => {
    const currentUser = useSelector(getSession);
    const followingStore = useSelector(getFollowing);
    const followerStore = useSelector(getFollowers);
    const activities = useSelector(getActivities);

    const { id, fname, lname, profilePictureUrl } = currentUser;
    const userFollowingCount = Object.values(
        reducedUsersFollowing(followingStore, id)
    ).length;
    const usersFollowersCount = Object.values(
        reducedUsersFollowers(followerStore, id)
    ).length;

    const currentUserActivities = activities.filter((activity) => {
        return currentUser.id === activity.athleteId;
    });

    return (
        <>
            <div className="user-widget">
                <div className="pic-container-widget">
                    <ProfilePicture
                        profilePictureUrl={profilePictureUrl}
                        targetId={id}
                        page={"user-widget"}
                    />
                </div>
                <div className="name-and-counts">
                    <AthleteName
                        fname={fname}
                        lname={lname}
                        targetId={id}
                        page="user-widget"
                    />
                    <div className="counts-widget">
                        <div className="count-title-value-container-widget">
                            <div className="count-title-widget">Following</div>
                            <b className="count-value-widget">
                                {userFollowingCount}
                            </b>
                        </div>
                        <div className="count-title-value-container-widget">
                            <div className="count-title-widget">Followers</div>
                            <b className="count-value-widget">
                                {usersFollowersCount}
                            </b>
                        </div>
                        <div className="count-title-value-container-widget">
                            <div className="count-title-widget">Activities</div>
                            <b className="count-value-widget">
                                {currentUserActivities.length}
                            </b>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default UserWidget;
