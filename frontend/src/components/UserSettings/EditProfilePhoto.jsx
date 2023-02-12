import { useCallback, useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSession } from "../../store/session";
import { updateUserProfilePicture } from "../../store/users";

const EditProfilePhoto = ({
    photoFile,
    setPhotoFile,
    photoFileUrl,
    setPhotoFileUrl,
}) => {
    const dispatch = useDispatch();
    const currentUser = useSelector(getSession);

    const onSaveClick = () => {
        const formData = new FormData();
        formData.append("user[profile_picture]", photoFile);
        dispatch(updateUserProfilePicture(currentUser, formData));
        setPhotoFileUrl(null);
        setPhotoFile(null);
    };

    const handleCancel = () => {
        setPhotoFileUrl(null);
        setPhotoFile(null);
    };

    return (
        <>
            <div className="edit-photo-top">
                <h1 className="title">Confirm New Profile Photo</h1>
            </div>
            <div className="buttons-edit-photo">
                <button
                    className="save-button-edit-photo"
                    onClick={onSaveClick}
                >
                    Save
                </button>
                <div className="cancel-link" onClick={handleCancel}>
                    Cancel
                </div>
            </div>

            <div className="new-photo-container">
                <img src={photoFileUrl} className="new-photo" />
            </div>
        </>
    );
};

export default EditProfilePhoto;
