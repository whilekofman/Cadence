import Octocat from "../../assets/logo/Octocat.png";
import li from "../../assets/logo/li.png";
import wellfound from "../../assets/logo/wellfound_white.png";

const Footer = () => {
    return (
        <div className="footer-full-width">
            <div className="footer">
                <div className="github">
                    <a href="https://github.com/whilekofman/Cadence#readme">
                        <img src={Octocat} className="git-logo" />
                    </a>
                </div>
                <div className="linkedin">
                    <a href="https://www.linkedin.com/in/eugenekofman/">
                        <img src={li} className="li-logo" />
                    </a>
                </div>
                <div className="footer-logo">
                    <a href="https://angel.co/u/eugene-kofman" target="_blank">
                        <img
                            src={wellfound}
                            className="wellfound-logo-footer"
                        />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Footer;
