import { useCallback } from "react";
import { useState } from "react";
import Cropper from "react-easy-crop";

const EditProfilePhoto = ({ photoFile, setPhotoFile }) => {
    const [crop, setCrop] = useState({ x: 0, y: 0 });
    const [zoom, setZoom] = useState(1);
    console.log(photoFile)
    const handleCancel = () => {
        setPhotoFile(null);
    };
    const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
          console.log(croppedArea, croppedAreaPixels);
      }, []);
    // const 
    return (
        <>
            <div className="edit-photo-top">
                <h1 className="title">Edit Photo</h1>
                <p className="edit-photo-instructions">
                    Select the portion of the photo you'd like to use.
                </p>
            </div>
            <div className="buttons-edit-photo">
                <button className="save-button-edit-photo">Save</button>
                <div className="cancel-link" onClick={handleCancel}>
                    Cancel
                </div>
            </div>
            <div className="edit-image-container">
                {photoFile && (
                    <Cropper
                        image={photoFile}
                        crop={crop}
                        zoom={zoom}
                        aspect={1 / 1}
                        showGrid={true}
                        style={{
                        containerStyle: {
                            width: "100%",
                            height: "80%",
                            backgroundColor: "#fff",
                            },
                        }}
                    />
                )}
            </div>
        </>
    );
};

export default EditProfilePhoto;
