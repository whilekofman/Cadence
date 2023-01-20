import { Link } from "react-router-dom";

const AthleteName = ({ fname, lname, fullName, targetId, page }) => {
    const displayName = `${fname} ${lname}` || fullName;
    return (
        <>
            <Link className="athlete-name-link" to={`/users/${targetId}`}>
                <div className={`athlete-name-${page}`}>{displayName}</div>
            </Link>
        </>
    );
};

export default AthleteName;
