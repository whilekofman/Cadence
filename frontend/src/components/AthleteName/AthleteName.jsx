import { Link } from "react-router-dom";

const AthleteName = ({ fname, lname, fullName, targetId, page }) => {
    
    const displayName = `${fname} ${lname}` || fullName;
    return (
        <>
            <Link className="athlete-name-link" to={`/users/${targetId}`}>
                {displayName}
            </Link>
        </>
    );
};

export default AthleteName;
