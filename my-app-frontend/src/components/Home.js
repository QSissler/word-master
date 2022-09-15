import React, { useState, useEffect, useContext } from "react";
import Game from "./Game";
import { UserContext } from "../Context/UserProvider";

function Home() {
  let [currentUser, setCurrentUser] = useContext(UserContext);
  // const [currentUser, setCurrentUser] = useState([]);
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
      {isLoggedIn ? (
        <Game
          currentUser={currentUser}
          currentGame={currentGame}
          updateGame={updateGame}
        />
      ) : (
        <div>
          <div className="header">
            <h1>Become The Next Word Master!</h1>
            <p style={{ lineHeight: "2" }}>
              Do you like learning new vocabulary in English? We have lots of
              great word games for you to play. <br></br> You can choose from
              lots of different topics and have fun playing games and learning
              English at the same time.
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
            <button className="startButton" onClick={createGame}>
              Start Playing
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
