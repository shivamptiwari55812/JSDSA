import { useState } from 'react'
import './App.css'
import {List} from "../components/List.jsx"
import { LeaderBoard } from '../components/leaderboard.jsx'
import{createBrowserRouter, RouterProvider} from "react-router-dom"

const router = createBrowserRouter([
  
  {
    path:"/LeaderBoard",
    element:<LeaderBoard/>

  },
  {
    path:"/",
    element:<List/>
  }
])
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
<RouterProvider router ={router}/>
    </div>
    </>
  )
}

export default App
