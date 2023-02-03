import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSession } from "../../store/session";
import ProfilePicture from "../ProfilePicture";
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
                    <span className="user-settings-section-outer">
                        <div className="user-settings-section-left">
                            <p className="user-settings-label">Current Photo</p>
                        </div>
                        <div className="user-settings-right">
                            <div className="user-setting-edit-profile-picture-container">
                                <ProfilePicture
                                    targetId={id}
                                    page={"user-settings"}
                                    profilePictureUrl={profilePictureUrl}
                                />
                                <span className="material-symbols-outlined user-settings-plus-icon">
                                    add_circle
                                </span>
                            </div>
                            <div className="user-settings-link">Remove</div>
                        </div>
                    </span>
                    <UserValue fname={fname} lname={lname} />

                </div>
            )}
        </div>
    );
}
 
export default UserSettings;