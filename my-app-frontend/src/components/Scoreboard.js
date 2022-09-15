import React from "react";
import { NavLink } from "react-router-dom";

function ScoreBoard({ currentGame }) {
  return (
    <div>
      <h2>GAME OVER!!!</h2>
      <h4>Your score is: {currentGame.score} Congrats!</h4>
      <NavLink exact to="/myProfile">
        To see your results click here
      </NavLink>
    </div>
  );
}

export default ScoreBoard;
