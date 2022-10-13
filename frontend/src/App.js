import LoginFormPage from "./components/LoginFormPage";
import { Switch } from "react-router-dom";
import { Route } from "react-router-dom"
import NavBar from "./components/NavBar";
import SignUpFormPage from "./components/SignUpFormPage/SignUpFormPage";
import HomePage from "./components/HomePage/HomePage";
import { useSelector } from "react-redux";
import { getSession } from "./store/session";
import UserIndexPage from "./components/UserIndex/UserIndexPage";


function App() {
  const sessionUser = useSelector(getSession)
  const userPath = sessionUser ?  <UserIndexPage /> : <HomePage />
  return (
    <>
    <NavBar />
      <Switch>
        <Route exact path="/">
          {userPath}
          {/* <HomePage /> */}
        </Route>
        <Route path="/login">
          <LoginFormPage />
        </Route>
        <Route path="/signup" >
          <SignUpFormPage />
        </Route>
      </Switch>
    </>
  );
}

export default App;
