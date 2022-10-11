import { useDispatch } from "react-redux";
import { useLocation } from 'react-router-dom';

import * as sessionActions from '../../store/session'

const DemoButton = () => {
    const usePath = () => {
        const location = useLocation();
        return location.pathname;
    }

    const buttonClass = usePath() === '/login' ? 'login-demo' : 'demo-login'
    const dispatch = useDispatch()
    const handleDemoLogin = e => {
        e.preventDefault();
        return dispatch (sessionActions.login({  credential: 'first@new.io', password: 'password' }))
    }

    return ( 
        <button className={buttonClass} type="submit" onClick={handleDemoLogin}>Login Demo User</button>
    );
}
 
export default DemoButton;