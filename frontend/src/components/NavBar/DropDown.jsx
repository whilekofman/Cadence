import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import * as sessionActions from "../../store/session";

const DropDown = ({ currentUser, location }) => {
    const { id, fname, lname, profilePictureUrl } = currentUser;
    const dispatch = useDispatch();
    const history = useHistory();

    const handleLogout = () => {
        dispatch(sessionActions.logout());
        history.push("/login");
    };

    const sessionLinks = [
        {
            text: "Following",
            to: {
                pathname: `/users/${id}`,
                state: { dashboardFollowers: "following" },
            },
            classNameLink: "session-link-following",
        },
        { text: "My Profile", to: `/users/${id}` },
        { text: "Settings", to: `/settings/profile` },

    ];

    return (
        <>
            <div className="session-drop-down-top">
                <div className="session-drop-down-top-left"></div>

                <div className="session-drop-down-top-right"></div>
            </div>
            {location === "session" && (
                <>
                    {sessionLinks.map((link, idx) => {
                        return (
                            <Link
                                to={link.to}
                                className={link.classNameLink || "session-link"}
                                key={idx}
                            >
                                <div
                                    key={idx}
                                    className="session-drop-down-element"
                                >
                                    {link.text}
                                </div>
                            </Link>
                        );
                    })}
                    <div
                        className="session-drop-down-element"
                        onClick={handleLogout}
                    >
                        <div className="log-out-link">Log Out</div>
                    </div>
                </>
            )}
        </>
    );
};

export default DropDown;
