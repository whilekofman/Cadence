import devphototo from "../../assets/devphoto.jpeg";
import Octocat from "../../assets/logo/octcat.png";
import li from "../../assets/logo/li.png";
import wellfound from "../../assets/logo/wellfound.png";

const DeveloperWidget = () => {
    return (
        <div className="widget">
            <div className="pic-container-widget">
                <a href="https://www.eugenekofman.com" target="_blank">
                    <img
                        src={devphototo}
                        alt="me"
                        className="profile-pic-user-widget profile-pic"
                    />
                </a>
            </div>
            <div className="below-pic-widget-container">
                <a href="https://www.eugenekofman.com" target="_blank">
                    <div className="athlete-name-user-widget">
                        Eugene Kofman
                    </div>
                </a>
                <div className="stats-widget">
                    <div className="stat-title-value-widget">
                        <div className="stat-title-widget">Github</div>
                        <div className="profesional-links">
                            <a
                                href="https://github.com/whilekofman/"
                                target="_blank"
                            >
                                <img
                                    src={Octocat}
                                    className="git-logo-widget"
                                />
                            </a>
                        </div>
                    </div>
                    <div className="stat-title-value-widget">
                        <div className="stat-title-widget">LinkedIn</div>
                        <div className="profesional-links linked-in-logo">
                            <a
                                href="https://www.linkedin.com/in/eugene-kofman-1119aa189/"
                                target="_blank"
                            >
                                <img src={li} className="li-logo-widget" />
                            </a>
                        </div>
                    </div>
                    <div className="stat-title-value-widget">
                        <div className="stat-title-widget">Angel List</div>
                        <div className="profesional-links">
                            <a
                                href="https://angel.co/u/eugene-kofman"
                                target="_blank"
                            >
                                <img
                                    src={wellfound}
                                    className="wellfound-logo-widget"
                                />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="line-under"></div>
                <div className="widget-bottom dev-bottom-widget">
                    <a
                        href="https://github.com/whilekofman/Cadence#readme"
                        target="_blank"
                    >
                        Project Git Repository
                    </a>
                </div>
            </div>
        </div>
    );
};

export default DeveloperWidget;
