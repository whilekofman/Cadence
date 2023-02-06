import { useCallback, useEffect } from "react";
import { useState } from "react";
import Cropper from "react-easy-crop";
import { getCroppedImage } from "../utils/canvas";

const EditProfilePhoto = ({ photoFile, setPhotoFile }) => {
    const [crop, setCrop] = useState({ x: 0, y: 0 });
    const[rotation, setRotation] = useState(0)
    const [zoom, setZoom] = useState(1);
    const [imageUrl, setImageUrl] = useState(null);
    const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);
    const [croppedImage, setCroppedImage] = useState(null);
    const [imageAfterCrop, setImageAfterCrop] = useState(null)

    const handleUpdateProfilePicture =  () => {
    }

    const onSaveClick = async (e) => {
      e.preventDefault()
      const imgAfterCrop = await(getCroppedImage(imageUrl, croppedAreaPixels))
      console.log(imgAfterCrop)
      setImageAfterCrop(imageAfterCrop)

    }

    // console.log(photoFile, "edit")
    const handleCancel = () => {
        setPhotoFile(null);
    };


      const showCroppedImage = useCallback(async () => {
          try {
              const croppedImage = await getCroppedImage(
                  photoFile,
                  croppedAreaPixels,
                  rotation
              );
              console.log("donee", { croppedImage });
              setCroppedImage(croppedImage);
          } catch (e) {
              console.error(e);
          }
      }, [photoFile, croppedAreaPixels, rotation]);

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
            <div className="edit-image-container">
                {photoFile && (
                    <Cropper
                        image={photoFile}
                        crop={crop}
                        zoom={zoom}
                        rotation={rotation}
                        aspect={1}
                        showGrid={true}
                        onCropChange={setCrop}
                        onCropComplete={onCropComplete}
                        onZoomChange={setZoom}
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
            <img src={imageAfterCrop} />
        </>
    );
};

export default EditProfilePhoto;

function readFile(file) {
    return new Promise((resolve) => {
        const reader = new FileReader();
        reader.addEventListener("load", () => resolve(reader.result), false);
        reader.readAsDataURL(file);
    });
}
