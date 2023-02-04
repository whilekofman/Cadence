import { useRef, useState } from "react";
import ProfilePicture from "../ProfilePicture";

const UserPhotoContainer = ({ profilePictureUrl, setPhotoFile }) => {
    const inputRef = useRef();
    // const [photoFile, setPhotoFile] = useState(null);

    const handleClick = ()=> {
        inputRef.current.click();

    };

    const handleFileChange = e => {
        const photo = e.currentTarget.files[0]
        if (!photo){
            return;
        }
        console.log(photo)
        e.target.value = null;

        setPhotoFile(photo)
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
                    <input type="file" className="photo-input-button" 
                    ref={inputRef}
                    onChange={handleFileChange}
                    />

                    <img
                        className="profile-pic-user-settings"
                        src={profilePictureUrl}
                    />
                    <span className="material-symbols-outlined user-settings-plus-icon">
                        add_circle
                    </span>
                </div>
                <div className="user-settings-link">Remove</div>
            </div>
        </span>
    );
};

export default UserPhotoContainer;
