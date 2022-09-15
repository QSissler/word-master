import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../Context/UserProvider";
import GameCard from "./GameCard";
import NameForm from "./NameForm";

function UserProfile() {
  let [currentUser, setCurrentUser] = useContext(UserContext);
  const [currentUserGames, setCurrentUserGames] = useState([]);
  const [showForm, setShowForm] = useState(false);

  function handleDeleteUser() {
    fetch(`http://localhost:9292/users/${currentUser.id}`, {
      method: "DELETE",
    });
    alert("Your profile was deleted!");
    setCurrentUser([]);
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
      <h1 style={{textAlign:"center"}}>Hi {currentUser.name}!</h1>
      <div className="profileButtons">
      {showForm ? <NameForm handleShowForm={handleShowForm} /> : null}
      <button onClick={handleShowForm}>
        {showForm ? "Keep My Name" : "Edit Your Name"}
      </button>
      <button onClick={handleDeleteUser}>Delete Your Profile</button>
      </div>
      <div className="allResults">
      {currentUserGames.map((game) => (
        <GameCard key={game.id} game={game} />
      ))}
      </div>
    </div>
  );
}

export default UserProfile;
