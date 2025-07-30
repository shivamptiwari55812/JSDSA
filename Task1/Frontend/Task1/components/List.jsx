import { useState } from "react";
import "../cssforComponents/style.css";

export function List() {
  const [players, setPlayers] = useState({
    Rahul: 0,
    Moti: 0,
    Pankaj: 0,
    JayDeep: 0,
    Virat: 0,
    Raman: 0,
    Arshdeep: 0,
    Jasprit: 0,
    Rohit: 0,
    Shikhar: 0,
  });
  const [selectedPlayer, setSelectedPlayer] = useState("");
  const [claim, setClaim] = useState(0);

  const handleClaim = (e) => {
    e.preventDefault();

    const randomValue = Math.floor(Math.random() * 10) + 1;
    setClaim(randomValue);

    setPlayers((prevPlayers) => ({
      ...prevPlayers,

      [selectedPlayer]: prevPlayers[selectedPlayer] + randomValue,
    }));
    console.log(randomValue,selectedPlayer);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://localhost:5000/api/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: selectedPlayers,
          score: players[selectedPlayer],

        }),
      });

      const result = await response.json();
      console.log(result.message);
    } catch (error) {}
  };

  return (
    <>
      <div className="outerDiv">
        <h1>List of Players</h1>
        <form action="#" className="form">
          <div className="listdiv">
            <label htmlFor="SelectDiv" id="Label">
              Select One Player for Bonus
            </label>
            <select
              name="SelectDiv"
              id="select"
              size="1"
              onChange={(e) => setSelectedPlayer(e.target.value)}
              value={selectedPlayer}
            >
              {Object.keys(players).map((player) => (
                <option key={player} value={player}>
                  {player}
                </option>
              ))}
                
            </select>
          </div>
          <button className="claimBtn" onClick={handleClaim}>
            Claim
          </button>
        </form>
        <div className="result">
          <h1>You have Got :- {claim}</h1>
        </div>
      </div>
    </>
  );
}
