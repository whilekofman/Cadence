import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import * as sessionActions from '../../store/session'
import { getSession } from "../../store/session";
import DemoButton from "./DemoButton";



const LoginFormPage = () => { 
    const dispatch = useDispatch()

    const sessionUser = useSelector(getSession);

    const [credential, setCredential] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState([]);
    
    if (sessionUser) return <Redirect to="/" />
    
    const handleSubmit = e => {
        e.preventDefault();

        setErrors([]);
        return dispatch (sessionActions.login({ 
            credential, 
            password  
        })).catch(async (res) => {
                let data;
                try {
                    data = await res.clone().json();
                } catch {
                    data = await res.text();
                    
                }
                if (data?.errors) setErrors(data.errors);
                else setErrors(["you may have made a mistake"]);
                return errors
            });
    }

    // const handleDemoLogin = e => {
    //     e.preventDefault();
    //     return dispatch (sessionActions.login({  credential: 'first@new.io', password: 'password' }))
    // }
    // const demoButton = () => {
    //     <button className='demo-login' type="submit" onClick={handleDemoLogin}>Login Demo User</button>
    // }

    return ( 
        <>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <ul>
                    {errors.map(error => <li key={error}>{error}</li>)}
                </ul>
                <label>Email:
                    <input
                        type="email"
                        value={credential}
                        onChange={e => setCredential(e.target.value)}
                        required
                    />
                </label>
                <label>Password:
                    <input
                        type="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        required
                    />
                </label>
                <button type="submit">Login</button>
                <DemoButton />
                {/* <button className='demo-login' type="submit" onClick={handleDemoLogin}>Login Demo User</button> */}
            </form>
        </>
     );
}
 
export default LoginFormPage;