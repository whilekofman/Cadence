// import { useSelector } from "react-redux";
// import { getSession } from "../../store/session";

import { Link } from 'react-router-dom';
import splashbackground from '../../assets/logo/splashbackground.jpeg'
import DemoButton from '../LoginFormPage/DemoButton';

const HomePage = () => {
    // const sessionUser = useSelector(getSession)

    // const page = sessionUser ? "welcome" : "loggedIn"
    // const 
    return ( 
        
        <body className="splash">
            <h1 className="statement">The # app for runners cyclists and skaters</h1>
            <div className='content'>
                <img src={splashbackground} alt="splashimage" />
                <div className="buttons">
                    <DemoButton />
                    <p className='seperator text'>or</p>
                    <Link to={'/signup'}><button className='email-signup'><i class="fa-regular fa-envelope">Sign up with Email</i></button></Link> 
                </div>           
            </div>
        </body>

        
     );
}
 
export default HomePage;