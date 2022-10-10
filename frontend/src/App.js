import LoginFormPage from "./components/LoginFormPage";
import { Switch } from "react-router-dom";
import { Route } from "react-router-dom"
import NavBar from "./components/NavBar";



function App() {
  return (
    <>
    <NavBar />
      <Switch>
        <Route exact path="/">
          <h1>Welcome To Cadence</h1>
          <h2>Stay tuned</h2>
          {/* <Link to="/login">Click to login</Link> */}
          <>
            <></>
          </>
        </Route>
        <Route path="/login">
          <LoginFormPage />
        </Route>
      </Switch>
    </>
  );
}

export default App;
