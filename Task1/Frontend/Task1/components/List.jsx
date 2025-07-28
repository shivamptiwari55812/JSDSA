import {useState} from "react"
import "../cssforComponents/style.css"


//  const resultValue =[resultValue,setresultValue]
export function List(){
    

    return(
        <>
        <div className="outerDiv">
    <h1>List of Players</h1>
    <form action="#" className="form">
    <div className="listdiv">
        <label htmlFor="SelectDiv" id="Label">Select One Player for Bonus</label>
        <select name="SelectDiv" id="select" size="1">
            <option value="Rahul">Rahul</option>
            <option value="Moti">Gautam</option>
            <option value="Pankaj">Pankaj</option>
            <option value="JayDeep">JayDeep</option>
            <option value="Virat">Virat</option>
            <option value="Raman">Raman</option>
            <option value="Arshdeep">Arshdeep</option>
            <option value="Jasprit">Jasprit</option>
            <option value="Rohit">Rohit</option>
            <option value="Shikhar">Shikhar</option>
        </select>
    </div>
    <button className="claimBtn">Claim</button>
    </form>
    <div className="result">
        <h1>You have Got :- 0</h1>
    </div>
    </div>
        </>
    )
}