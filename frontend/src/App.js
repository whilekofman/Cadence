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
import ActivityForm from "./components/EditActivityForm";
import Footer from "./components/Footer/Footer";
import NewActivityForm from "./components/NewActivityForm";


// <UserIndexPage />
function App() {
  const sessionUser = useSelector(getSession)
  
  // const userPath = sessionUser ? <UserIndexPage />  : <HomePage />
  const userPath = sessionUser ? <ActivityIndexPage />  : <HomePage />
  const redirectPath = sessionUser ? <ActivityForm /> : <LoginFormPage />
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
        <Route exact path="/activities/:activityId/edit">
          {redirectPath}
        </Route>
        <Route exact path="/activities/new">
          <NewActivityForm />
        </Route>

        <Route exact path={activityPath}>
          <ActivityShowPage />
        </Route>

        <Route exact path="/activities">
          <ActivityIndexPage />          
        </Route>

        <Route exact path="/signup" >
          <SignUpFormPage />
        </Route>
      </Switch>
    <Footer />

    </>
  );
}

export default App;
