import ProfilePicture from "../ProfilePicture";

const UserPhotoContainer = ({ profilePictureUrl, targetId }) => {
    return (
        <span className="user-settings-section-outer">
            <div className="user-settings-section-left">
                <p className="user-settings-label">Current Photo</p>
            </div>
            <div className="user-settings-right">
                <div className="user-setting-edit-profile-picture-container">
                    <ProfilePicture
                        targetId={targetId}
                        page={"user-settings"}
                        profilePictureUrl={profilePictureUrl}
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
