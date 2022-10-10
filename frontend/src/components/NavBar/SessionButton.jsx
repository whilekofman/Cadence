import { NavLink, useLocation } from 'react-router-dom';

import { useSelector } from "react-redux";

import { getSession } from "../../store/session";
import { useState } from 'react';

const SessionButton = () => {
    
    const [errors, setErrors] = useState([])

    const sessionUser = useSelector(getSession);
    
    
    const usePath = () => {
        const location = useLocation();
        return location.pathname;
    }
    // const logOutButton = 
    
    const buttonText = usePath() === '/login' ? "Sign Up" : sessionUser ? "Log Out" : "Log In"
    
    // const buttonText = usePath() === '/login' ? "Sign Up" : "Log In"
    const buttonLink = usePath() === '/login' ? "/signup" : "/login"

    const buttonClassName = usePath() === '/login' ? 'signupBut' : 'loginBut' 

    // handleClick = e => {
    //     e.prevent default
    // }
    
    return ( 
        <>
            <NavLink to={buttonLink}>
                <button className={buttonClassName}>{buttonText}</button>
            </NavLink>
        </>
     );
}
 
export default SessionButton;