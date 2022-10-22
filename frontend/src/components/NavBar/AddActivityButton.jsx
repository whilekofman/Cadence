import { Link } from "react-router-dom";
import plus from '../../assets/logo/plus.png'

const AddActivtyButton = () => {
    return ( 
    <div className="makeplussmaller">
    <Link to='activities/new' className='plus-link'>
        <img src={plus} alt="plusicon" className="plus-icon"  />
    </Link>
    </div>
     );
}
 
export default AddActivtyButton;