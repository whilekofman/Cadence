import { NavLink } from 'react-router-dom';
import skatelogo from '../../assets/logo/skatelogo.png'
import SessionButton from './SessionButton';
import li from '../../assets/logo/li.png'
import AddActivtyButton from './AddActivityButton';

const NavBar = () => {

    
    
    return ( 
        
        <div className='full-width'>
            {/* <div className='test'>TEST</div> */}
            <nav className='navbar'>
                {/* <h1 className='cadencetitle'><NavLink  to='/'>Cadence</NavLink></h1> */}
                <div className="nav-logo">
                    <NavLink to='/'><img src={skatelogo}alt='cadencelogo' 
                className='logo'></img></NavLink>
                </div>
                <div className="session-button-div">
                    <SessionButton />
                    <AddActivtyButton />
                </div>

            </nav>
        </div>
     );
}
 
export default NavBar;