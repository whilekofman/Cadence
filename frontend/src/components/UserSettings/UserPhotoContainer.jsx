import { useRef, useState } from "react";
import ProfilePicture from "../ProfilePicture";
import { readFile } from "../utils/readFile";
import { updateUserProfilePicture } from "../../store/users";
import { useDispatch, useSelector } from "react-redux";
import { getSession } from "../../store/session";



const UserPhotoContainer = ({ profilePictureUrl, setPhotoFileUrl, setPhotoFile }) => {
    const inputRef = useRef();
    // const [photoFile, setPhotoFile] = useState(null);
    const currentUser = useSelector(getSession);
    const dispatch = useDispatch();
    const handleClick = ()=> {
        inputRef.current.click();

    };

    const handleFileChange = async (e) => {
        const photo = e.currentTarget.files[0]
        if (!photo){
            return;
        }
        e.target.value = null;
        let imageDataUrl = await readFile(photo)
        setPhotoFile(photo)
        setPhotoFileUrl(imageDataUrl)
    }
    const handleRemovePhoto = () => {
        const formData = new FormData();
        formData.append("user[profile_picture]", "remove");
        dispatch(updateUserProfilePicture(currentUser, formData));
    }
    return (
        <span className="user-settings-section-outer">
            <div className="user-settings-section-left">
                <p className="user-settings-label">Current Photo</p>
            </div>
            <div className="user-settings-right">
                <div
                    onClick={handleClick}
                    className="user-setting-profile-picture-container"
                >
                    <input
                        type="file"
                        className="photo-input-button"
                        ref={inputRef}
                        accepts="image/jpeg, image/png, image/jpg"
                        onChange={handleFileChange}
                    />

                    <img
                        className="profile-pic-user-settings"
                        src={
                            profilePictureUrl ||
                            "https://aa-cadence-dev.s3.amazonaws.com/default.png"
                        }
                    />
                    <span className="material-symbols-outlined user-settings-plus-icon">
                        add_circle
                    </span>
                </div>
                {profilePictureUrl &&
                <div className="user-settings-link" onClick={handleRemovePhoto}>
                    Remove
                </div>}
            </div>
        </span>
    );
};

export default UserPhotoContainer;


