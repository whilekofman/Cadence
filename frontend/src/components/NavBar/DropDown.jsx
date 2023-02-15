import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import * as sessionActions from "../../store/session";

const DropDown = ({ currentUser }) => {
    const { id, fname, lname, profilePictureUrl } = currentUser;
    const dispatch = useDispatch();

    const sessionLinks = [
        {
            text: "Following",
            to: {
                pathname: `/users/${id}`,
                state: { dashboardFollowers: "following" },
            },
        },
        { text: "My Profile", to: `/users/${id}` },
        { text: "Settings", to: `/settings/profile` },
        // { text: "Log Out", to: () => dispatch(sessionActions.logout()) },
    ];

    return (
        <>
            <div className="session-drop-down-top">
                <div className="session-drop-down-top-left"></div>

                <div className="session-drop-down-top-right"></div>
            </div>
            <Link
                className="session-link-following"
                to={{
                    pathname: `/users/${id}`,
                    state: { dashboardFollowers: "following" },
                }}
            >
                <div className="session-drop-down-element">Following</div>
            </Link>
            <Link className="session-link" to={`/users/${id}`}>
                <div className="session-drop-down-element">My Profile</div>
            </Link>
            <Link className="session-link" to={`/settings/profile`}>
                <div className="session-drop-down-element">Settings</div>
            </Link>
            <div
                className="session-drop-down-element"
                onClick={() => dispatch(sessionActions.logout())}
            >
                <div className="log-out-link">Log Out</div>
            </div>
            {sessionLinks.map((link, idx) => {
                return (
                    <div key={idx} className="session-drop-down-element">
                        <Link to={link.to} className="session-link">{link.text}</Link>
                    </div>
                );
                })}
        </>
    );
};

export default DropDown;
