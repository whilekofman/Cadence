import { useDispatch } from "react-redux";
import * as sessionActions from '../../store/session'

const DemoButton = () => {
    const dispatch = useDispatch()
    const handleDemoLogin = e => {
        e.preventDefault();
        return dispatch (sessionActions.login({  credential: 'first@new.io', password: 'password' }))
    }

    return ( 
        <button className='demo-login' type="submit" onClick={handleDemoLogin}>Login Demo User</button>
    );
}
 
export default DemoButton;