import { Link } from "react-router-dom";

const AthleteName = ({ fname, lname, fullName, targetId, page }) => {
    const displayName = `${fname} ${lname}` || fullName;
    const cssPage = page || "default"
    return (
        <>
            <Link className="athlete-name-link" to={`/users/${targetId}`}>
                <div className={`athlete-name-${cssPage}`}>{displayName}</div>
            </Link>
        </>
    );
};

export default AthleteName;
