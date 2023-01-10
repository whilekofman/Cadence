import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchUser, getUser } from "../../store/users";
import ProfilePicture from "../ProfilePicture";

const UserShowPage = () => {
    const dispatch = useDispatch() 
    const { userId } = useParams()
    const user = useSelector(getUser(userId))
    const [loaded, setLoaded] = useState(false) 

    
    
    
    useEffect(() => {
        dispatch(fetchUser(userId))
        setLoaded(true)
    }, [userId])
    
    if (!user) {
        return null;
    }
    const { id, fname, lname, profileurl } = user;

    

    return (  
        <>
            <ProfilePicture url={profileurl} page={"user"} />
            {fname} {lname}

        </>
    );
}
 
export default UserShowPage;