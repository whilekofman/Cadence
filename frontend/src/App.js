import LoginFormPage from "./components/LoginFormPage";
import { Switch } from "react-router-dom";
import { Route } from "react-router-dom"
import NavBar from "./components/NavBar";
import SignUpFormPage from "./components/SignUpFormPage/SignUpFormPage";
import HomePage from "./components/HomePage/HomePage";
import { useSelector } from "react-redux";
import { getSession } from "./store/session";
import UserIndexPage from "./components/UserIndex/UserIndexPage";
import ActivityIndexPage from "./components/ActivityIndexPage";
import ActivityShowPage from "./components/ActivityShowPage";

// <UserIndexPage />
function App() {
  const sessionUser = useSelector(getSession)
  
  const userPath = sessionUser ? <UserIndexPage />  : <HomePage />
  // debugger
  const activityPath = "/activities/:activityId"
  // debugger

  return (
    <>
    <NavBar />
      <Switch>
        <Route exact path="/">
          
          {userPath}
          {/* <HomePage /> */}
        </Route>
        <Route exact path="/login">
          <LoginFormPage />
        </Route>
        <Route exact path="/activities">
          <ActivityIndexPage />          
        </Route>
        <Route exact path={activityPath}>
          <ActivityShowPage />
        </Route>
        <Route exact path="/signup" >
          <SignUpFormPage />
        </Route>
      </Switch>
    </>
  );
}

export default App;
