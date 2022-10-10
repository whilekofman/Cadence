import { NavLink, useLocation } from 'react-router-dom';

import { useDispatch, useSelector } from "react-redux";
import * as sessionActions from '../../store/session'
import { getSession } from "../../store/session";
import { useState } from 'react';

const SessionButton = () => {
    const dispatch = useDispatch()

    
    const [errors, setErrors] = useState([])
    
    const sessionUser = useSelector(getSession);
    
    
    const usePath = () => {
        const location = useLocation();
        return location.pathname;
    }
    // const logOutButton = 
    
    // const buttonText = usePath() === '/login' ? "Sign Up" : sessionUser ? "Log Out" : "Log In"
    const buttonText = usePath() === '/login' ? "Sign Up" : "Log In"

    
    // const buttonText = usePath() === '/login' ? "Sign Up" : "Log In"
    const buttonLink = usePath() === '/login' ? "/signup" : "/login"

    const buttonClassName = usePath() === '/login' ? 'signupBut' : sessionUser ? 'logoutBut' : 'loginBut' 

    const handleSubmit = e => {
        e.preventDefault();

        setErrors([]);
        return dispatch (sessionActions.logout({ }))
            .catch(async (res) => {
                let data;
                try {
                    data = await res.clone().json();
                } catch {
                    data = await res.text();
                }
                if (data?.errors) setErrors([data]);
                else setErrors(["you may have made a mistake"]);
            });
    }
    const buttonReturned = sessionUser ? 
        (
            <form onSubmit={handleSubmit}>
                <button>Log Out</button>
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