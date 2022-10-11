import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import * as sessionActions from '../../store/session'
import { getSession } from "../../store/session";




const SignUpFormPage = () => {
    const dispatch = useDispatch()
    const sessionUser = useSelector(getSession);
    
    const [email, setEmail] = useState('');
    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    // const [birthMonth, setBirthMonth] = ('')
    // const [birthDate, setBirthDate] = ('')
    // const [birthYear, setBirthYear] = ('')
    // const [sex, setSex] = ('Prefer Not To Say')
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState([]);
    const [confirmPassword, setConfirmPassword] = useState('');
    
    if (sessionUser) return <Redirect to='/' />
    const handleSubmit = e => {
        e.preventDefault();

        if ( password !== confirmPassword ) {
            setErrors(['Password does not match']) 
            return errors
        }
        setErrors([])
        return dispatch(sessionActions.signup({ 
            email,
            fname,
            lname,
            password
        })).catch(async resp => {
                let data;
                try {
                    data = await resp.clone().json();
                } catch {
                    data = await resp.text();
                    
                }
                if (data?.errors) setErrors(data.errors);
                else setErrors(["Please confirm the information you entered"]);
                // return errors
            });
    }
    

    return ( 
        <div className="body-su">
            {/* <img src={bar} className="background" alt="BAR" /> */}
            <div className="formwindow">
                <div className="jointoday-container">
                    <h1 className="jointoday">Join Cadence today, <br /> it's Free. </h1>
                </div>
                
                <form onSubmit={handleSubmit} className="signupform">
                    <ul>
                        {errors.map(error => <li className="errors" key={error}>
                            {error}
                        </li>)}
                    </ul>
                    <span className="form-field">
                        <label>
                                <input className="form-text-box"
                                type="email"
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                                placeholder="Email"
                                required
                            />
                        </label>
                    </span>
                    <span className="form-field">
                        <label>
                            <input className="form-text-box"
                                type="text"
                                value={fname}
                                onChange={e => setFname(e.target.value)}
                                placeholder="First Name"
                                required
                            />
                        </label>
                    </span>
                    <span className="form-field">
                        <label>
                        <input className="form-text-box"
                            type="text"
                            value={lname}
                            onChange={e => setLname(e.target.value)}
                            placeholder="Last Name"
                            required
                        />
                    </label>
                    </span>
                    <span className="form-field">
                        <label>
                        <input className="form-text-box"
                            type="password"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            placeholder="Password"
                            required
                        />
                    </label>
                    </span>        
                    <span className="form-field">
                        <label>
                            <input className="form-text-box"
                                type="password"
                                value={confirmPassword}
                                onChange={e => setConfirmPassword(e.target.value)}
                                placeholder="Confirm Password:"
                                required
                            />
                        </label>
                    </span>
                    <button className="signup-but" type="submit">Sign Up</button>
                    <div className="signup-disclaimer">
                        <p className="disclaimer">By signing up for Cadence, you agree to maybe possibly consider hiring me for a role at your place of buisnes</p>
                        <p className="alreadymember">Already a member? <Link className="link-text" to='/login'>  Log in  </Link></p>
                    </div>
                </form>
            </div>
        
        </div>
     );
}
 
export default SignUpFormPage