import FollowIndex from "../FollowIndex";

const LeftSide = ({ userId, fname, followsState, setDisplayFollowsState }) => {
    // const displayFollowsStateValue = followsState || "following"
    // console.log(displayFollowsStateValue)
    return (
        <>
            <div className="following">
                <FollowIndex
                    userId={userId}
                    fname={fname}
                    all={true}
                    displayFollowsStateValue={followsState}
                    setDisplayFollowsState={setDisplayFollowsState}
                />
            </div>
        </>
    );
}
 
export default LeftSide;