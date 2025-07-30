import {useState } from "react"
import "../cssforComponents/style.css"
export function LeaderBoard(){
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
                        <tr>
                            <td>Hello</td>
                            <td>50</td>
                        </tr>
                </tbody>
            </table>
        </div>
        </div>
        </>
    )
}