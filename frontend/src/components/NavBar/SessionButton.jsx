import { NavLink, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getSession } from "../../store/session";
import ProfilePicture from "../ProfilePicture";
import { useState } from "react";
import DropDown from "./DropDown";


const SessionButton = () => {
    const currentUser = useSelector(getSession);
    const dispatch = useDispatch();
    const [showDropDown, setShowDropDown] = useState(false);
    const usePath = () => {
        const location = useLocation();
        return location.pathname;
    };
    

    const buttonText = usePath() === "/login" ? "Sign Up" : "Log In";

    const buttonLink = usePath() === "/login" ? "/signup" : "/login";
    const buttonClassName =
        usePath() === "/login"
            ? "signupBut"
            : currentUser
            ? "logoutBut"
            : "loginBut";

    
    const buttonReturned = currentUser ? (
        <div
            className="profile-pic-drop-down-wrapper"
            onMouseEnter={() => setShowDropDown(true)}
            onMouseLeave={() => setShowDropDown(false)}
        >
            <div className="profile-pic-drop-down-inner">
                <ProfilePicture
                    profilePictureUrl={currentUser.profilePictureUrl}
                    targetId={currentUser.id}
                    page="navbar"
                />
                <div className="material-symbols-outlined chevron">
                    expand_more
                </div>
            </div>
            {showDropDown && (
                <div className="drop-down-session">
                    <DropDown currentUser={currentUser} />
                </div>
            )}
        </div>
    ) : (
        <div className="logout-add">
            <NavLink to={buttonLink}>
                <button className={buttonClassName}>{buttonText}</button>
            </NavLink>
        </div>
    );
    return buttonReturned;
};

export default SessionButton;
