import { useState } from "react";
import ActivityIndexPage from "../ActivityIndexPage";
import UserWidget from "../UserWidget";

const Dashboard = () => {

    const [loaded, setLoaded] = useState(false);

    return (
        <div className="dashboard-outer-wrapper">
            <div className="dashboard-outer-left">
                {loaded &&
                <div className="dashboard-left">
                    <UserWidget loaded={loaded}/>
                </div>}
            </div>
            <div className="dashboard-middle">
                <ActivityIndexPage setLoaded={setLoaded}/>
            </div>
            <div className="dashboard-right">
                <UserWidget />
            </div>
        </div>
    );
}
 
export default Dashboard;