import React from "react";
import { NavLink } from "react-router-dom";

function ScoreBoard({ currentGame }) {
  return (
    <div className="gameOver">
      <h2>GAME OVER!!!</h2>
      <h4>Your score is: {currentGame.score}</h4>
      <p style={{ marginBottom: "40px" }}>Good job!</p>
      <NavLink
        style={{
          textDecoration: "none",
          color: "#103258",
          border: "solid #103258",
          padding: "10px",
          backgroundColor: "white"
        }}
        className="navLink"
        exact
        to="/myProfile"
      >
        To see your results click here!
      </NavLink>
    </div>
  );
}

export default ScoreBoard;
