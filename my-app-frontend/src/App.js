import logo from "./logo.svg";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import ScoreBoard from "./components/Scoreboard";
import Home from "./components/Home";
import UserProfile from "./components/UserProfile";
import Game from "./components/Game";
import AllScores from "./components/AllScores";
import { UserProvider } from "./Context/UserProvider";
import NavBar from "./components/Navbar";

function App() {
  return (
    <div>
      <UserProvider>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/topScores">
            <AllScores />
          </Route>
          <Route exact path="/myProfile">
            <UserProfile />
          </Route>
        </Switch>
      </UserProvider>
    </div>
  );
}

export default App;
