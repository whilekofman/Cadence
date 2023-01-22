import ActivityIndexPage from "../ActivityIndexPage";
import UserWidget from "../UserWidget";

const Dashboard = () => {
    return (
        <div className="dashboard-outer-wrapper">
            <div className="dashboard-outer-left">
                <div className="dashboard-left">
                    <UserWidget />
                </div>
            </div>
            <div className="dashboard-middle">
                <ActivityIndexPage />
            </div>
            <div className="dashboard-right">
                <UserWidget />
            </div>
        </div>
    );
}
 
export default Dashboard;