import FollowIndex from "../FollowIndex";

const RightSide = ({ userId, fname, selectDropDown, changeSelectDropDown }) => {
    return (
        <>
            <div className="right-follows">
                <FollowIndex
                    userId={userId}
                    fname={fname}
                    side={"right"}
                    selectDropDown={selectDropDown}
                    changeSelectDropDown={changeSelectDropDown}
                />
            </div>
        </>
    );
};

export default RightSide;
