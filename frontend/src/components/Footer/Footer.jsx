import { Link } from "react-router-dom";
import Octocat from '../../assets/logo/Octocat.png'
import li from '../../assets/logo/li.png'

const Footer = () => {
    return ( 
        <div className="footer-full-width">
            <div className="footer">
                <div className="github">
                <a href='https://github.com/whilekofman/Cadence#readme'>
                        <img src={Octocat} className='git-logo'/>
                    </a>
                </div>
                <div className="linkedin">
                    <a href='https://www.linkedin.com/in/eugene-kofman-1119aa189/'>
                        
                        <img src={li} className='li-logo'/>
                    </a>

                </div>
            </div>
            <div className="plus-icon-credit">
                <a target="_blank" href="https://icons8.com/icon/103162/plus">Plus</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>" 
            </div>
         </div>
     );
}
 
export default Footer;