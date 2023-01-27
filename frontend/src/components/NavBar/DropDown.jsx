import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import * as sessionActions from "../../store/session";

const DropDown = ({ currentUser }) => {
    const { id, fname, lname, profilePictureUrl } = currentUser;
    const dispatch = useDispatch();

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
            <div
                className="session-drop-down-element"
                onClick={() => dispatch(sessionActions.logout())}
            >
                <div className="log-out-link">Log Out</div>
            </div>
        </>
    );
};

export default DropDown;
