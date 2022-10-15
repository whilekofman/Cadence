import { NavLink, useLocation } from 'react-router-dom';

import { useDispatch, useSelector } from "react-redux";
import * as sessionActions from '../../store/session'
import { getSession } from "../../store/session";
// import { useState } from 'react';

const SessionButton = () => {
    const dispatch = useDispatch()

    
    // const [errors, setErrors] = useState([])
    
    const sessionUser = useSelector(getSession);
    
    
    const usePath = () => {
        const location = useLocation();
        return location.pathname;
    }
    // const logOutButton = 
    
    // const buttonText = usePath() === '/login' ? "Sign Up" : sessionUser ? "Log Out" : "Log In"
    const buttonText = usePath() === '/login' ? "Sign Up" : sessionUser ? "Log Out" : "Log In"

    
    // const buttonText = usePath() === '/login' ? "Sign Up" : "Log In"
    const buttonLink = usePath() === '/login' ? "/signup" : "/login"

    const buttonClassName = usePath() === '/login' ? 'signupBut' : sessionUser ? 'logoutBut' : 'loginBut' 

    

    const handleSubmit = e => {
        e.preventDefault();

        return dispatch (sessionActions.logout({ }))

    }
    const buttonReturned = sessionUser ? 
        (
            <form onSubmit={handleSubmit}>
                <button className={buttonClassName}>Log Out</button>
            </form>
        ) 
        
        : 
        
        ( 
    
            <NavLink to={buttonLink}>
                <button className={buttonClassName}>{buttonText}</button>
            </NavLink>

        );
    return buttonReturned
}
 
export default SessionButton;