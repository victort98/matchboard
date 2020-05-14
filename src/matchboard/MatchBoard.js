import React, {useEffect, useState} from 'react'
import Scoreboard from '../themes/football/Scoreboard'
import Statistics from '../themes/football/Statistics'
import Playerslist from '../themes/football/Playerslist'
import {socket} from '../socket/socket'

const MatchBoard = () => {
  const [screen, setScreen] = useState()

  useEffect(()=>{
    socket.on('board', (data)=>{
      setScreen(data)
    })   
  },[screen])

  return (
    <>        
      {(screen==='statistics')?
        (<Statistics/>):
       (screen==='scoreboard')?
        (<Scoreboard/>):
       (screen==='playerslist')?
        (<Playerslist/>):
        (<Scoreboard/>)
      }
    </>
  )
}

export default MatchBoard
