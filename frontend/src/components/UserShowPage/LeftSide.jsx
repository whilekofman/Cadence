import FollowIndex from "../FollowIndex";

const LeftSide = ({ userId, fname, selectDropDown, changeSelectDropDown }) => {
    // const displayFollowsStateValue = followsState || "following"
    // console.log("leftSide: ", followsState);
    console.log("left:" ,changeSelectDropDown)
    // debugger

    return (
        <>
            <div className="following">
                <FollowIndex
                    userId={userId}
                    fname={fname}
                    all={true}
                    selectDropDown={selectDropDown}
                    changeSelectDropDown={changeSelectDropDown}
                />
            </div>
        </>
    );
};
 
export default LeftSide;