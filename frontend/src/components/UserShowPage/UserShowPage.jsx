import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getFollowers, getFollowing } from "../../store/follows";
import { fetchUser, getUser } from "../../store/users";
import ProfilePicture from "../ProfilePicture";
import { reducedUsersFollowers, reducedUsersFollowing } from "../utils/reducers";

const UserShowPage = () => {
    const dispatch = useDispatch() 
    const { userId } = useParams()
    const user = useSelector(getUser(userId))
    const following = useSelector(getFollowing)
    const followers = useSelector(getFollowers)
    const [loaded, setLoaded] = useState(false) 

    console.log(following)
    
    
    useEffect(() => {
        dispatch(fetchUser(userId))
        // setLoaded(true)
    }, [userId])
    
    if (!user) {
        return null;
    }
    const { id, fname, lname, profileurl } = user;
    
    const userFollowing = reducedUsersFollowing(following, id)

    const userFollowers = reducedUsersFollowers(followers, id)

    console.log("User Followers: ", userFollowers);

    console.log("User Following: ", userFollowing);




    return (  
        <>
            <ProfilePicture url={profileurl} page={"user"} />
            {fname} {lname}

        </>
    );
}
 
export default UserShowPage;