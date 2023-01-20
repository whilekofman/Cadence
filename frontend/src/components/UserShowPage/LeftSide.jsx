import FollowIndex from "../FollowIndex";

const LeftSide = ({ userId, fname, selectDropDown, changeSelectDropDown }) => {

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