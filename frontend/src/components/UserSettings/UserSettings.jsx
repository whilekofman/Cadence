import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { getSession } from "../../store/session";
import EditProfilePhoto from "./EditProfilePhoto";
import UserPhotoContainer from "./UserPhotoContainer";
import UserValue from "./UserValue";


const UserSettings = () => {
    const dispatch = useDispatch()
    const currentUser = useSelector(getSession)
    // const [user, setUser] = useState({})
    // const [profilePictureUrlState, setProfilePictureUrlState] = useState('')
    const [photoFile, setPhotoFile] = useState(null);
    const [imageUrl, setImageUrl] = useState(null)
    useEffect(() => {
        if(photoFile){
            const reader = new FileReader();
            const url = reader.readAsDataURL(photoFile);
            setImageUrl(url)
        }
    }, [photoFile])
    console.log(photoFile)
    if (!currentUser) {
        return <Redirect to="/login" />;
    }
        
    const {id, fname, lname, email, profilePictureUrl} = currentUser
    const currentUserArray = Object.values(currentUser).slice(1,-1) 
    return (
        <div className="page-outer-wrapper">
            {currentUser && !photoFile && (
                <div className="user-settings-inner-wrapper">
                    <h1 className="user-settings-title">My Profile</h1>
                    <UserPhotoContainer profilePictureUrl={profilePictureUrl} targetId={id} setPhotoFile={setPhotoFile}/>
                    <UserValue fname={fname} lname={lname} />
                    <UserValue email={email} />
                </div>
            )}
            {currentUser &&
                <div className="user-settings-inner-wrapper">
                    <EditProfilePhoto setPhotoFile={setPhotoFile} photoFile={imageUrl} />
                </div>
            }
        </div>
    );
}
 
export default UserSettings;