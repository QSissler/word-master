import { useEffect, useState } from "react";

function GameCard({ game }) {
  const [gameWords, setGameWords] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:9292/list/${game.id}`)
      .then((res) => res.json())
      .then(setGameWords);
  }, []);


  return (
    <div className="gameResults">
      <h4>Game Results</h4>
      {gameWords.map((pair) =>
        pair[1] ? (
          <p style={{ color: "green" }}>{pair[0]}</p>
        ) : (
          <p style={{ color: "red" }}>{pair[0]}</p>
        )
      )}
    </div>
  );
}

export default GameCard;
