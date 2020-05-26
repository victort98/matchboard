import React, {useEffect, useState} from 'react'
import Scoreboard from '../themes/football/Scoreboard'
import Statistics from '../themes/football/Statistics'
import Playerslist from '../themes/football/Playerslist2'
import Fixtures from '../themes/football/Fixtures'
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
        (screen==='fixtures')?
        (<Fixtures/>):
        (<Scoreboard/>)
      }
    </>
  )
}

export default MatchBoard
