import { NavLink } from 'react-router-dom';
import skatelogo from '../../assets/logo/skatelogo.png'
import SessionButton from './SessionButton';
const NavBar = () => {

    
    
    return ( 

        <div className='full-width'>
            <nav className='navbar'>
                {/* <h1 className='cadencetitle'><NavLink  to='/'>Cadence</NavLink></h1> */}
                <NavLink to='/'><img src={skatelogo}alt='cadencelogo' className='logo'></img></NavLink>
                <SessionButton />

            </nav>
        </div>
     );
}
 
export default NavBar;