import LoginFormPage from "./components/LoginFormPage";
import { Switch } from "react-router-dom";
import { Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import SignUpFormPage from "./components/SignUpFormPage";
import HomePage from "./components/HomePage";
import { useSelector } from "react-redux";
import { getSession } from "./store/session";
import UserIndexPage from "./components/UserIndex/UserIndexPage";
import ActivityIndexPage from "./components/ActivityIndexPage";
import ActivityShowPage from "./components/ActivityShowPage";
import ActivityForm from "./components/EditActivityForm";
import Footer from "./components/Footer";
import CommentForm from "./components/CommentsForm";
import UserShowPage from "./components/UserShowPage";
import Dashboard from "./components/DashBoard";
import UserSettings from "./components/UserSettings";

// <UserIndexPage />
function App() {
    const sessionUser = useSelector(getSession);

    // const userPath = sessionUser ? <UserIndexPage />  : <HomePage />
    const userPath = sessionUser ? <Dashboard /> : <HomePage />;
    const redirectPath = sessionUser ? <ActivityForm /> : <LoginFormPage />;
    // const editPath =`/activities/${activityId}/edit`
    const activityPath = "/activities/:activityId";

    return (
        <div className="app">
            <NavBar />
            <Switch>
                <Route exact path="/">
                    {userPath}
                    {/* <HomePage /> */}
                </Route>
                <Route exact path="/login">
                    <LoginFormPage />
                </Route>
                <Route exact path="/activities/:activityId/edit">
                    {redirectPath}
                </Route>
                <Route exact path="/activities/new">
                    {/* <NewActivityForm /> */}
                    {redirectPath}
                </Route>
                <Route exact path="/activities/:activityId">
                    <ActivityShowPage />
                </Route>
                <Route exact path="/signup">
                    <SignUpFormPage />
                </Route>
                <Route exact path="/users/:userId">
                    <UserShowPage />
                </Route>
                <Route exact path="/settings/profile">
                    <UserSettings />
                </Route>
                <Route exact path="/Dashboard">
                    <Dashboard />
                </Route>
                <Route path="*">
                    This page does not exist
                </Route>
            </Switch>
            {!sessionUser && <Footer />}
        </div>
    );
}

export default App;
