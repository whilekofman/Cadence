import { useCallback, useEffect } from "react";
import { useState } from "react";
import Cropper from "react-easy-crop";
import { useDispatch, useSelector } from "react-redux";
import { getSession } from "../../store/session";
import { getCroppedImg } from "../utils/canvas";

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

    const dispatch = useDispatch()
    const currentUser = useSelector(getSession)
    const {id, fname, lname, email} = currentUser
    console.log(imageAfterCrop);
    const onSaveClick = async (e) => {
      e.preventDefault()
      const {file, url} = await(getCroppedImg(imageUrl, croppedAreaPixels))
      setImageAfterCrop(url)
      // const user = {id, fname, lname, email }




    }

    // console.log(photoFile, "edit")
    const handleCancel = () => {
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

            <div className="after">
                <img src={photoFile} />
            </div>
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
