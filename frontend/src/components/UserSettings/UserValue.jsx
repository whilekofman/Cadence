const UserValue = ( { fname, lname, email } ) => {
    const value = fname ? fname + " " + lname : email
    return (
        <>
            <span className="user-settings-section-outer hover-effect">
                <div className="user-settings-section-left">
                    <p className="user-settings-label">Name</p>
                </div>
                <div className="user-settings-right">
                    <p className="user-settings-content">
                        {fname} {lname}
                    </p>
                </div>
            </span>
        </>
    );
}
 
export default UserValue;