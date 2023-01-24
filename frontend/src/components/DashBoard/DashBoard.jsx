import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchActivities, getActivities } from "../../store/activities";
import { getSession } from "../../store/session";
import ActivityIndexPage from "../ActivityIndexPage";
import DeveloperWidget from "../DeveloperWidget";
import UserWidget from "../UserWidget";

const Dashboard = () => {
    const [loaded, setLoaded] = useState(false);
    const dispatch = useDispatch();
    const activities = useSelector(getActivities);
    const currentUser = useSelector(getSession);
    useEffect(() => {
        dispatch(fetchActivities()).then(() => setLoaded(true));
    }, []);

    const currentUserActivities = activities.filter((activity) => {
        return currentUser.id === activity.athleteId;
    });
    return (
        <div className="dashboard-outer">
            {loaded && (
                <div className="dashboard-inner-wrapper">
                    <div className="dashboard-left">
                        <UserWidget
                            currentUserActivities={currentUserActivities}
                        />
                    </div>
                    <div className="dashboard-middle">
                        <ActivityIndexPage
                            userActivities={currentUserActivities}
                        />
                    </div>
                    <div className="dashboard-right">
                        <DeveloperWidget />
                    </div>
                </div>
            )}
        </div>
    );
};

export default Dashboard;
