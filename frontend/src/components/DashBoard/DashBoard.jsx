import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchActivities, getActivities } from "../../store/activities";
import { getSession } from "../../store/session";
import ActivityIndexPage from "../ActivityIndexPage";
import UserWidget from "../UserWidget";

const Dashboard = () => {

    const [loaded, setLoaded] = useState(false);
    const dispatch = useDispatch()
    const activities = useSelector(getActivities);
    const currentUser = useSelector(getSession)
    useEffect(() => {
        // if (page !== "userShow") {
        //     setSelectDropDown("all");
        // } else {
        //     setSelectDropDown("");
        // }
        dispatch(fetchActivities()).then(()=> setLoaded(true));
    }, [])

      const currentUserActivities = activities.filter((activity) => {
          return currentUser.id === activity.athleteId;
      });
    return (
        <>
            {loaded && (
                <div className="dashboard-outer-wrapper">
                    <div className="dashboard-outer-left">
                        <div className="dashboard-left">
                            <UserWidget />
                        </div>
                    </div>
                    <div className="dashboard-middle">
                        <ActivityIndexPage
                            loaded={loaded}
                            currentUserActivities={currentUserActivities}
                        />
                    </div>
                    <div className="dashboard-right">
                        <UserWidget />
                    </div>
                </div>
            )}
        </>
    );
}
 
export default Dashboard;