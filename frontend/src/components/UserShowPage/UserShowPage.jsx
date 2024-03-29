import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useLocation, useParams } from "react-router-dom";
import { fetchUser, getUser } from "../../store/users";
import ProfilePicture from "../ProfilePicture";
import AthleteName from "../AthleteName";
import FollowButton from "../FollowButton";
import { getSession } from "../../store/session";
import LeftSide from "./LeftSide";
import RightSide from "./RightSide";
import { getActivities } from "../../store/activities";
import { activitiesInLast30 } from "../utils/datetimeparsers";

const UserShowPage = () => {
    const location = useLocation();
    const dispatch = useDispatch();
    const { userId } = useParams();
    const user = useSelector(getUser(userId));
    const activitiesStore = useSelector(getActivities);
    const currentUser = useSelector(getSession);
    const [selectDropDown, setSelectDropDown] = useState("following");
    const [leftDisplay, setLeftDisplay] = useState();
    const [loaded, setLoaded] = useState(false);
    const [display, setDisplay] = useState();
    // // const

    const changeSelectDropDown = (e) => {
        setSelectDropDown(e);
        setLeftDisplay("follows");
    };

    const dashboardFollowers = location.state
        ? location.state.dashboardFollowers
        : null;
    const iniitialState = dashboardFollowers
        ? [dashboardFollowers, "follows"]
        : ["following", "activities"];

    useEffect(() => {
        dispatch(fetchUser(userId)).then(
            () => setLoaded(true),
            setSelectDropDown(iniitialState[0]),
            setLeftDisplay(iniitialState[1])
        );
    }, [userId, location.state]);

    if (!currentUser) {
        return <Redirect to="/login" />;
    }

    if (!user) {
        return null;
    }
    const { id, fname, lname, profilePictureUrl } = user;

    const activitiesButtonCss =
        leftDisplay === "activities"
            ? "display-button-user-show button-active"
            : "display-button-user-show button-inactive-activities";

    const followsButtonCss =
        leftDisplay === "follows"
            ? "display-button-user-show button-active"
            : "display-button-user-show button-inactive-follows";

    const userShowActivities = activitiesStore.filter((activity) => {
        return id === activity.athleteId;
    });

    const activitiesLastMonth = activitiesInLast30(userShowActivities);
    const profilePicture = profilePictureUrl;

    return (
        <div className="user-show-wrapper">
            <div className="user-show-items">
                <div className="user-show-top">
                    <div className="user-show-pic-container">
                        <ProfilePicture
                            profilePictureUrl={profilePicture}
                            page={"user"}
                            targetId={id}
                        />
                    </div>
                    <div className="under-profile-pic-user-show">
                        <div className="name-follow-button-user-show">
                            <div className="athlete-name-user-show">
                                <AthleteName
                                    fname={fname}
                                    lname={lname}
                                    targetId={id}
                                />
                            </div>
                            {currentUser.id !== id && (
                                <div className="follow-button-user-show-container">
                                    <FollowButton
                                        page="user-show"
                                        id={id}
                                        all={true}
                                    />
                                </div>
                            )}
                        </div>
                        <div className="activity-count-container">
                            <h3>Last 4 weeks</h3>
                            <div className="activities-last-mounth-count">
                                {activitiesLastMonth.length}
                            </div>
                            <div className="total-text">Total Activities</div>
                        </div>
                    </div>
                </div>
                <div className="left-right">
                    <div className="display-buttons-content">
                        <div className="display-buttons">
                            <button
                                className={activitiesButtonCss}
                                // className="diplay-button-user-show"
                                value={"activities"}
                                onClick={(e) => setLeftDisplay(e.target.value)}
                            >
                                Activities
                            </button>

                            <button
                                className={followsButtonCss}
                                value={"follows"}
                                onClick={(e) => setLeftDisplay(e.target.value)}
                            >
                                Following
                            </button>
                        </div>

                        {loaded && (
                            <div className="left-side">
                                <LeftSide
                                    userId={id}
                                    fname={fname}
                                    selectDropDown={selectDropDown}
                                    changeSelectDropDown={changeSelectDropDown}
                                    leftDisplay={leftDisplay}
                                    userShowActivities={userShowActivities}
                                />
                            </div>
                        )}
                    </div>
                    <div className="right">
                        {loaded && (
                            <RightSide
                                userId={id}
                                fname={fname}
                                selectDropDown={selectDropDown}
                                changeSelectDropDown={changeSelectDropDown}
                            />
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserShowPage;
