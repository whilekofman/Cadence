import ActivityIndexPage from "../ActivityIndexPage/ActivityIndexPage";
import FollowIndex from "../FollowIndex";

const LeftSide = ({
    userId,
    fname,
    selectDropDown,
    changeSelectDropDown,
    leftDisplay,
    userShowActivities,
}) => {
    return (
        <>
            {leftDisplay === "follows" && (
                <div className="following">
                    <FollowIndex
                        userId={userId}
                        fname={fname}
                        side={"left"}
                        selectDropDown={selectDropDown}
                        changeSelectDropDown={changeSelectDropDown}
                    />
                </div>
            )}
            {leftDisplay === "activities" && (
                <ActivityIndexPage
                    page="userShow"
                    userId={userId}
                    userShowActivities={userShowActivities}
                />
            )}
        </>
    );
};

export default LeftSide;
