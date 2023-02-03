import { useState } from "react";

const UserValue = ( { fname, lname, email } ) => {
    const [showEdit, setShowEdit] = useState(false)
    const value = fname ? fname + " " + lname : email
    const label = fname ? "Name" : "Email"

    return (
        <>
            <span className="user-settings-section-outer hover-effect">
                <div className="user-settings-section-left">
                    <p className="user-settings-label">{label}</p>
                </div>
                <div className="user-settings-right">
                    <p className="user-settings-content">
                        {value}
                    </p>
                </div>
            </span>
        </>
    );
}
 
export default UserValue;