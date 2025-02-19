import React, { useState, useEffect, useContext } from "react";
import Game from "./Game";
import { UserContext } from "../Context/UserProvider";

function Home() {
  let [currentUser, setCurrentUser] = useContext(UserContext);
  const [userName, setUsername] = useState("");
  const [currentGame, setCurrentGame] = useState([]);
  const [allUsers, setAllUsers] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function createUser(e) {
    e.preventDefault();

    const newUser = {
      name: userName,
    };

    fetch("http://localhost:9292/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    })
      .then((res) => res.json())
      .then((data) => setCurrentUser(data));

    setUsername("");
    alert("New user has been created!");
  }

  function createGame() {
    const newGame = {
      score: 0,
      user_id: currentUser.id,
    };

    fetch("http://localhost:9292/games", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newGame),
    })
      .then((res) => res.json())
      .then((data) => setCurrentGame(data));

    setIsLoggedIn(true);
  }

  useEffect(() => {
    fetch("http://localhost:9292/users")
      .then((res) => res.json())
      .then(setAllUsers);
  }, []);

  function updateGame(game) {
    setCurrentGame(game);
  }

  function handleChangeUsers(e) {
    let foundUser = allUsers.find((user) => user.name === e.target.value);
    setCurrentUser(foundUser);
  }

  return (
    <div>
      <div className="wrapper">
      <div><span className="dot"></span></div>
      <div><span className="dot"></span></div>
      <div><span className="dot"></span></div>
      <div><span className="dot"></span></div>
      <div><span className="dot"></span></div>
      <div><span className="dot"></span></div>
      <div><span className="dot"></span></div>
      <div><span className="dot"></span></div>
      <div><span className="dot"></span></div>
      <div><span className="dot"></span></div>
      <div><span className="dot"></span></div>
      <div><span className="dot"></span></div>
      <div><span className="dot"></span></div>
      <div><span className="dot"></span></div>
      <div><span className="dot"></span></div>
      </div>
      {isLoggedIn ? (
        <Game
          currentUser={currentUser}
          currentGame={currentGame}
          updateGame={updateGame}
        />
      ) : (
        <div>
          <div className="header">
            <h1 style={{marginTop:"50px"}}>Become The Next Word Master!</h1>
            <p style={{ lineHeight: "2", fontSize:"20px" }}>
              Do you like learning new vocabulary in English? We have a
              great word game for you to play. <br></br> Have fun playing games and learn
              English at the same time!
            </p>
          </div>
          <div className="userBlock">
            <div className="user">
              <h3>Returning User?</h3>
              <h4>Find Your Name</h4>
              <div className="select">
                <select onChange={(e) => handleChangeUsers(e)}>
                  <option></option>
                  {allUsers.map((user) => (
                    <option key={user.id}>{user.name}</option>
                  ))}
                </select>
                <div className="select_arrow"></div>
              </div>
            </div>
            <div className="user">
              <h3>New User?</h3>
              <h4>Enter Your Name</h4>
              <form onSubmit={(e) => createUser(e)}>
                <input
                  className="input1"
                  value={userName}
                  onChange={(e) => setUsername(e.target.value)}
                  type="text"
                  placeholder="Type your name..."
                ></input>
                <br></br>
                <button
                  className="userButtons"
                  style={{ marginTop: "15px" }}
                  type="submit"
                >
                  Create User
                </button>
              </form>
            </div>
          </div>
          <div className="playButton">
            <button className="glow-on-hover" onClick={createGame}>
              Start Playing
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
