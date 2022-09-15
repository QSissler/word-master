import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav>
      <NavLink exact to="/">
        Home
      </NavLink>
      <NavLink exact to="/myProfile">
        My Profile
      </NavLink>
      <NavLink exact to="/topScores">
        Top Scores
      </NavLink>
    </nav>
  );
}

export default NavBar;
