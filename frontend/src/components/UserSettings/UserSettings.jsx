import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSession } from "../../store/session";
import UserPhotoContainer from "./UserPhoto";
import UserValue from "./UserValue";

const UserSettings = () => {
    const dispatch = useDispatch()
    const currentUser = useSelector(getSession)
    // const [user, setUser] = useState({})
    const [profilePictureUrlState, setProfilePictureUrlState] = useState('')
    const {id, fname, lname, email, profilePictureUrl} = currentUser
    useEffect(() => {
        setProfilePictureUrlState(currentUser.profilePictureUrl)
    }, [])

    const currentUserArray = Object.values(currentUser).slice(1,-1) 
    console.log(currentUserArray)
    return (
        <div className="page-outer-wrapper">
            {currentUser && (
                <div className="user-settings-inner-wrapper">
                    <h1 className="user-settings-title">My Profile</h1>
                    <UserPhotoContainer profilePictureUrl={profilePictureUrl} targetId={id}/>
                    <UserValue fname={fname} lname={lname} />
                    <UserValue email={email} />
                </div>
            )}
        </div>
    );
}
 
export default UserSettings;