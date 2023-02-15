import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import * as sessionActions from "../../store/session";

const DropDown = ({ currentUser }) => {
    const { id, fname, lname, profilePictureUrl } = currentUser;
    const dispatch = useDispatch();
    const history = useHistory();

    const handleLogout = () => {
        dispatch(sessionActions.logout());
        history.push("/login");
    
    };

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
                onClick={handleLogout}
            >
                <div className="log-out-link">Log Out</div>
            </div>
        </>
    );
};

export default DropDown;
