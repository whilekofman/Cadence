import ActivityIndexPage from "../ActivityIndexPage";
import UserWidget from "../UserWidget";

const Dashboard = () => {
    return (
        <div className="dashboard-outter-wrapper">
            <div className="dashboard-left">
                <UserWidget />
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