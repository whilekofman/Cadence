import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import plus from '../../assets/logo/plus.png'
import { getSession } from "../../store/session";

const AddActivtyButton = () => {
    const currentUser = useSelector(getSession)

    const addActivtyButton = currentUser ? ( 
    <div className="makeplussmaller">
    <Link to='activities/new' className='plus-link'>
        <img src={plus} alt="plusicon" className="plus-icon"  />
    </Link>
    </div>
     ) : <></>
     return (
        addActivtyButton
     )
}
 
export default AddActivtyButton;