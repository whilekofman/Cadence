import { useCallback, useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSession } from "../../store/session";
import { updateUserProfilePicture } from "../../store/users";
import Cropper from "react-easy-crop";
import { getCroppedImg } from "../utils/canvas";
const EditProfilePhoto = ({
    photoFile,
    setPhotoFile,
    photoFileUrl,
    setPhotoFileUrl,
}) => {
    const dispatch = useDispatch();
    const currentUser = useSelector(getSession);

    const [crop, setCrop] = useState({ x: 0, y: 0 });
    const [rotation, setRotation] = useState(0);
    const [zoom, setZoom] = useState(1);
    const [imageUrl, setImageUrl] = useState(null);
    const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);
    const [croppedPhotoFile, setCroppedPhotoFile] = useState(null);
    const [croppedPhotoUrl, setCroppedPhotoUrl] = useState(null);

    const onConfirmClick = () => {
        const formData = new FormData();
        const fileToUpload = croppedPhotoFile ? croppedPhotoFile : photoFile;
        formData.append("user[profile_picture]", fileToUpload);
        dispatch(updateUserProfilePicture(currentUser, formData));
        setPhotoFileUrl(null);
        setPhotoFile(null);
    };

    const handleCancel = () => {
        setPhotoFileUrl(null);
        setPhotoFile(null);
    };

    const showCroppedImage = async () => {
        try {
            const { file, url } = await getCroppedImg(
                photoFileUrl,
                croppedAreaPixels
            );
            console.log("donee", { url, file });
            setCroppedPhotoUrl(url);
            setCroppedPhotoFile(file);
        } catch (e) {
            console.error(e);
        }
    };

    const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
        setCroppedAreaPixels(croppedAreaPixels);
    }, []);

    return (
        <>
            <div className="edit-photo-top">
                <h1 className="title">Edit Photo</h1>
                <p className="edit-photo-instructions">
                    Select the portion of the photo you'd like to use by using the mouse wheel or touch pad to zoom in or out, and you can drag the photo to the position you need using your mouse or touchpad. To see a preview of your cropped photo, click "Crop". To save your changes, click "Confirm". To cancel, click "Cancel".  
                </p>
            </div>
            <div className="buttons-edit-photo">
                <button
                    className="save-button-edit-photo"
                    onClick={showCroppedImage}
                >
                    Crop
                </button>
                <button
                    className="save-button-edit-photo"
                    onClick={onConfirmClick}
                >
                    Confirm
                </button>
                <div className="cancel-link" onClick={handleCancel}>
                    Cancel
                </div>
            </div>
            <div className="before-after-container">
                <div className="before-container">
                    <h3 className="crop-preview">Before Crop</h3>
                    <div className="edit-image-container">
                        <Cropper
                            image={photoFileUrl}
                            crop={crop}
                            zoom={zoom}
                            aspect={1 / 1}
                            showGrid={true}
                            onCropComplete={onCropComplete}
                            onZoomChange={setZoom}
                            style={{
                                containerStyle: {
                                    width: "100%",
                                    height: "100%",
                                    background: "#ffffff",
                                },
                            }}
                            onCropChange={setCrop}
                        />
                    </div>
                </div>

                {croppedPhotoUrl && (
                    <div className="after-container">
                    
                        <h3 className="crop-preview-after">After Crop</h3>
                        <img className="after" src={croppedPhotoUrl} />
                    </div>
                )}
            </div>
        </>
    );
};

export default EditProfilePhoto;
