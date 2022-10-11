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
        <div className="body">
            <div className="formwindow">
                <div className="login-container">
                    <h1>Log In</h1>
                </div>
                    
                    <div className="demodiv">
                        <DemoButton className="demobut" />
                    </div>
                    <form onSubmit={handleSubmit} className='loginform'>
                    <div className="ptext">
                        <p className="alt">Or log in with email
                        </p>
                    </div>

                    <ul>
                        {errors.map(error => <li key={error} className="errors">{error}</li>)}
                    </ul>
                    <span className="form-field">
                        <label>
                            <input
                                className="form-text-box"
                                type="email"
                                value={credential}
                                onChange={e => setCredential(e.target.value)}
                                placeholder="Email"
                                required
                            />
                        </label>
                    </span>
                    <span className="form-field">
                        <label>
                            <input
                                className="form-text-box"
                                type="password"
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                                placeholder="Password"
                                required
                            />
                        </label>
                    </span>
                    <button className="login-but" type="submit">Login</button>
                </form>
            </div>
        </div>
     );
}
 
export default LoginFormPage;