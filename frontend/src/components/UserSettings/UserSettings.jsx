import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSession } from "../../store/session";
import ProfilePicture from "../ProfilePicture";

const UserSettings = () => {
    const dispatch = useDispatch()
    const currentUser = useSelector(getSession)
    // const [user, setUser] = useState({})
    const [profilePictureUrlState, setProfilePictureUrlState] = useState('')
    const {id, fname, lname, email, profilePictureUrl} = currentUser
    useEffect(() => {
        setProfilePictureUrlState(currentUser.profilePictureUrl)
    }, [])

    return ( 
        <>
            {currentUser && 
            <>
                <ProfilePicture targetId={id} page={"user"} profilePictureUrl={profilePictureUrl} /> 

            </>
            }
        </>
     );
}
 
export default UserSettings;