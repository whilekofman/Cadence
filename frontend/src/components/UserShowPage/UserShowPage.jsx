import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getFollowers, getFollowing } from "../../store/follows";
import { fetchUser, getUser } from "../../store/users";
import FollowIndexItem from "../FollowIndex/FollowIndexItem";
import FollowIndex from "../FollowIndex";
import ProfilePicture from "../ProfilePicture";
import { reducedUsersFollowers, reducedUsersFollowing } from "../utils/reducers";

const UserShowPage = () => {
    const dispatch = useDispatch() 
    const { userId } = useParams()
    const [userFollowing, setUserFollowing] = useState([])
    const user = useSelector(getUser(userId))
  
    const [loaded, setLoaded] = useState(false) 

    
    useEffect(() => {
        dispatch(fetchUser(userId)).then(()=> setLoaded(true))
        // setLoaded(true)
    }, [userId])
    

    if (!user) {
        return null;
    }
    
    const { id, fname, lname, profileurl } = user;

    // const userFollowers = reducedUsersFollowers(followers, id)

    // console.log("User Followers: ", userFollowers);






    return (
        <>
            <ProfilePicture url={profileurl} page={"user"} />
            {fname} {lname}
            {loaded &&
            <div className="following">
                <FollowIndex
                    userId={id}
                    fname={fname}
                    // loaded={loaded}
                />
            </div>
            }
        </>
    );
}
 
export default UserShowPage;