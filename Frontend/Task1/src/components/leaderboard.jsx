import {useState ,useEffect} from "react"
import "../cssforComponents/style.css"
import { useNavigate } from "react-router-dom";
export function LeaderBoard(){
    const navigate = useNavigate();
    const [playerData, setPlayerData] = useState([]);
    const  triggerGET =async ()=>{
        try{
        const response = await fetch("http://localhost:7000/api/sendData",{
            method:"GET",
            headers: {
                "Content-Type": "application/json",
              }
        })

        const result = await response.json();
        console.log(result)
        const sortedResult = result.sort((a, b) => b.score - a.score);
        setPlayerData(sortedResult);

    }
    catch(error){
        console.log(error)
    }

    }
    useEffect(() => {
    triggerGET();
  }, []);


    return (
        <>
        <div className="outerDiv1">
        <h1>Leaderboard</h1>
        <div className="formtable">
            <table>
                <thead>
                    <tr>
                        <th>Player Name</th>
                        <th>Points</th>
                    </tr>

                </thead>
                <tbody className="tableBody">
               {playerData.map((player, index) => (
                 <tr key={index}>
                   <td>{player.name}</td>
                   <td>{player.score}</td>
                 </tr>
               ))}
             </tbody>
            </table>
            <button id="backButton" onClick={()=>{navigate("/")}}>Home</button>
        </div>
        </div>
        </>
    )
}