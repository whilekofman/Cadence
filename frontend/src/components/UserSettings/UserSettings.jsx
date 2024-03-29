import { useState } from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { getSession } from "../../store/session";
import EditProfilePhoto from "./EditProfilePhoto";
import UserPhotoContainer from "./UserPhotoContainer";
import UserValue from "./UserValue";


const UserSettings = () => {
    const currentUser = useSelector(getSession)
    const [photoFile, setPhotoFile] = useState(null);
    const [photoFileUrl, setPhotoFileUrl] = useState(null);


    if (!currentUser) {
        return <Redirect to="/login" />;
    }
    console.log()
    const {id, fname, lname, email, profilePictureUrl} = currentUser
    const currentUserArray = Object.values(currentUser).slice(1,-1) 
    return (
        <div className="page-outer-wrapper">
            <div className="user-settings-inner-wrapper">

            {!photoFile ? 
                <>
                    <h1 className="user-settings-title">My Profile</h1>
                    <UserPhotoContainer profilePictureUrl={profilePictureUrl} targetId={id} setPhotoFile={setPhotoFile} setPhotoFileUrl={setPhotoFileUrl}/>
                    <UserValue fname={fname} lname={lname} />
                    <UserValue email={email} />
                </>
            :
                <>
                    <EditProfilePhoto setPhotoFile={setPhotoFile} photoFile={photoFile} photoFileUrl={photoFileUrl} setPhotoFileUrl={setPhotoFileUrl} />
                </>
            }
            </div>
        </div>

    );
}
 
export default UserSettings;
