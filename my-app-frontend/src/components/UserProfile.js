import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../Context/UserProvider";
import GameCard from "./GameCard";
import NameForm from "./NameForm";
import { useHistory } from "react-router-dom"

function UserProfile() {
  let [currentUser, setCurrentUser] = useContext(UserContext);
  const [currentUserGames, setCurrentUserGames] = useState([]);
  const [showForm, setShowForm] = useState(false);
  let history = useHistory();

  function handleDeleteUser() {
    fetch(`http://localhost:9292/users/${currentUser.id}`, {
      method: "DELETE",
    });
    alert("Your profile was deleted!");
    setCurrentUser([]);
    history.push("/")
  }

  useEffect(() => {
    fetch(`http://localhost:9292/userGames/${currentUser.id}`)
      .then((res) => res.json())
      .then(setCurrentUserGames);
  }, [currentUser]);

  function handleShowForm() {
    setShowForm((showForm) => !showForm);
  }

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>{currentUser.length === 0 ? "Sign In or Create New User" : `Hi ${currentUser.name}!`}</h1>
      {currentUser.length === 0 ? null :
      <div>
      <div className="profileButtons">
        {showForm ? <NameForm handleShowForm={handleShowForm} /> : null}
        <button className="userButtons" onClick={handleShowForm}>
          {showForm ? "Keep My Name" : "Edit Your Name"}
        </button>
        {showForm ? null : (
          <button className="userButtons" onClick={handleDeleteUser}>
            Delete Your Profile
          </button>
        )}
      </div>
      <div className="allResults">
        {currentUserGames.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </div>
      </div>}
    </div>
  );
}

export default UserProfile;
