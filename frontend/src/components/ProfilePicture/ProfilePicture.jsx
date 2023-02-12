import { Link } from "react-router-dom";

const ProfilePicture = ({ profilePictureUrl, page, targetId }) => {
    const profilePicture =
        profilePictureUrl ||
        "https://aa-cadence-dev.s3.amazonaws.com/default.png";

    const imgCss = `profile-pic-${page} profile-pic`;

    return (
        <Link to={`/users/${targetId}`}>
            <img
                src={profilePicture}
                alt="User profile image"
                className={imgCss}
            />
        </Link>
    );
};

export default ProfilePicture;
