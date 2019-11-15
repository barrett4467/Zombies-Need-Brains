import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/Nav";
import Home from "./pages/Home";
import Badges from "./pages/Badges";
import LogIn from "./pages/LogIn";
import SignUp from "./pages/SignUp";
import Spelling from "./pages/Spelling";
import MathGame from "./components/games/Math/MathGame";
import NoMatch from "./pages/NoMatch";
import FirstPage from "./pages/FirstPage"


function App() {
  return (
    <Router>
      <>
        <NavBar/>
        <Switch>
          <Route exact path={"/"} component={FirstPage}/>
          <Route exact path={"/home"} component={Home}/>
          <Route exact path={"/badges"} component={Badges} />
          <Route exact path={"/login"} component={LogIn} />
          <Route exact path={"/signup"} component={SignUp} />
          <Route exact path={"/spelling"} component={Spelling} />
          <Route path={"/math"} component={MathGame} />
          <Route component={NoMatch}/>
        </Switch>
      </>
    </Router>
  );
}

export default App;
