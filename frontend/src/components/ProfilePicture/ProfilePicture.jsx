import { Link } from "react-router-dom";

const ProfilePicture = ({ profilePictureUrl, page, targetId }) => {
    const profilePicture = profilePictureUrl;

    const imgCss = `profile-pic-${page} profile-pic`;
    const divCss = `profile-pic-div-${page}`;

    return (
        <div className={divCss}>
            <Link to={`/users/${targetId}`}>
                <img
                    src={profilePicture}
                    alt="User profile image"
                    className={imgCss}
                />
            </Link>
        </div>
    );
};

export default ProfilePicture;
