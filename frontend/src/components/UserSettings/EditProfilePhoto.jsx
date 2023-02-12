import { useCallback, useEffect } from "react";
import { useState } from "react";
import Cropper from "react-easy-crop";
import { useDispatch, useSelector } from "react-redux";
import { getSession } from "../../store/session";
import { updateUserProfilePicture } from "../../store/users";
import ProfilePicture from "../ProfilePicture";
import { getCroppedImg } from "../utils/canvas";

const EditProfilePhoto = ({ photoFile, setPhotoFile, photoFileUrl, setPhotoFileUrl }) => {
    const [crop, setCrop] = useState({ x: 0, y: 0 });
    const [rotation, setRotation] = useState(0);
    const [zoom, setZoom] = useState(1);
    const [imageUrl, setImageUrl] = useState(null);
    const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);
    const [croppedImage, setCroppedImage] = useState(null);
    const [imageAfterCrop, setImageAfterCrop] = useState(null);

    const handleUpdateProfilePicture = () => {};

    const dispatch = useDispatch();
    const currentUser = useSelector(getSession);

    const onSaveClick = () => {

        const formData = new FormData();
        formData.append("user[profile_picture]", photoFile);
        dispatch(updateUserProfilePicture(currentUser, formData));
    };

    const handleCancel = () => {
        setPhotoFileUrl(null);
        setPhotoFile(null);
    };

    const showCroppedImage = useCallback(async () => {
        try {
            const croppedImage = await getCroppedImg(
                photoFile,
                croppedAreaPixels,
                rotation
            );
            console.log("donee", { croppedImage });
            setCroppedImage(croppedImage);
        } catch (e) {
            console.error(e);
        }
    }, [photoFile, croppedAreaPixels, rotation, imageAfterCrop]);

    const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
        console.log(croppedArea, croppedAreaPixels);
        setCroppedAreaPixels(croppedAreaPixels);
    }, []);
    return (
        <>
            <div className="edit-photo-top">
                <h1 className="title">Edit Photo</h1>
                <p className="edit-photo-instructions">
                    Select the portion of the photo you'd like to use.
                </p>
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

            <div className="after">
                <img src={photoFileUrl} />
            </div>

        </>
    );
};

export default EditProfilePhoto;


