import FollowIndex from "../FollowIndex";

const RightSide = ({ userId, fname }) => {
    return (
        <>
            <div className="right-follows">
                <FollowIndex userId={userId} fname={fname} right={true} />
            </div>
        </>
    );
};
 
export default RightSide;