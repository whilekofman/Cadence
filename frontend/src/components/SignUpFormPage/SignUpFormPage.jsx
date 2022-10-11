import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import * as sessionActions from '../../store/session'
import { getSession } from "../../store/session";
import bar from '../../assets/loginback/bar.jpeg'




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
        // if (password === confirmPassword) 
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
        <body className="body">
            {/* <img src={bar} className="background" alt="BAR" /> */}
            <div className="formwindow">
                <div className="jointoday-container">
                    <h1 className="jointoday">Join Cadence today, </h1>
                    <h1>it's Free.</h1>
                </div>
                <form onSubmit={handleSubmit} className="signupform">
                    <ul>
                        {errors.map(error => <li key={error}>
                            {error}
                        </li>)}
                    </ul>
                    <span className="email"><label>Email:
                        <input
                            type="email"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            // prefill="Email"
                            required
                        />
                    </label>
                    </span>
                    <label>First Name:
                        <input
                            type="text"
                            value={fname}
                            onChange={e => setFname(e.target.value)}
                            // prefill="First Name"
                            required
                        />
                    </label>
                    <label>Last Name:
                        <input
                            type="text"
                            value={lname}
                            onChange={e => setLname(e.target.value)}
                            // prefill="Last Name"
                            required
                        />
                    </label>
                    <label>Password:
                        <input
                            type="password"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            // prefill="Password"
                            required
                        />
                        <label>Confirm Password:
                            <input
                                type="password"
                                value={confirmPassword}
                                onChange={e => setConfirmPassword(e.target.value)}
                                // prefill="Confirm Password"
                                required
                            />
                        </label>
                    </label>
                    <button type="submit">Sign Up</button>
                </form>
            </div>
        
        </body>
     );
}
 
export default SignUpFormPage