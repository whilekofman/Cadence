const ProfilePicture = ({ url, page }) => {
    const profilePicture = url;

    const imgCss = `profile-pic-${page}`;
    const divCss = `profile-pic-div-${page}`;
    return (
        <div className={divCss}>
            <img
                src={profilePicture}
                alt="User profile image"
                className={imgCss}
            />
        </div>
    );
};

export default ProfilePicture;
