import React, {useContext, useEffect, useState} from 'react'
import {ScoreBoardContext} from '../contexts/ScoreBoardContextProvider'
import Scoreboard from '../themes/football/Scoreboard'
import Statistics from '../themes/football/Statistics'

import {socket} from '../socket/socket'

const ScoreBoard = () => {
  const {scoreData} = useContext(ScoreBoardContext)

  const [screen, setScreen] = useState()

  useEffect(()=>{
    socket.on('board', (data)=>{
      setScreen(data)
      console.log(data);  
    })   
  },[screen])

  return (
    <div className="container-fluid text-center"> 
      <h1>Score Board</h1>         
        {(screen==='statistics')?(
            <Statistics/>
         ):(<Scoreboard/>)
        }
       
      

    </div>
  )
}

export default ScoreBoard
