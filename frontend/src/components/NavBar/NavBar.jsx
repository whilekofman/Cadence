import { Link, NavLink, useLocation } from 'react-router-dom';
import skatelogo from '../../assets/logo/skatelogo.png'
const NavBar = () => {
    const usePath = () => {
        const location = useLocation();
        return location.pathname;
    }

    // const { login }  = useParams()
    // console.log(useParams())
    // console.log(login)
    // debugger
    const buttonText = usePath() === '/login' ? "Sign Up" : "Log In"
    const buttonLink = usePath() === '/login' ? "/signup" : "/login"

    const buttonClassName = usePath() === '/login' ? 'signupBut' : 'loginBut' 
    

    console.log(buttonText)

    const onClick = e => {
        <Link to={buttonLink}></Link>
    }

    return ( 

        <div className='full-width'>
            <nav className='navbar'>
                {/* <h1 className='cadencetitle'><NavLink  to='/'>Cadence</NavLink></h1> */}
                <NavLink to='/'><img src={skatelogo}alt='cadencelogo' className='logo'></img></NavLink>

                {/* <NavLink activeClassName="orange" to="/login">{buttonText}</NavLink> */}
                <NavLink to={buttonLink}>
                <button className={buttonClassName}>{buttonText}</button></NavLink>

            </nav>
        </div>
     );
}
 
export default NavBar;