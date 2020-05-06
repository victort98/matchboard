import React, {useEffect, useState} from 'react'
import Scoreboard from '../themes/football/Scoreboard'
import Statistics from '../themes/football/Statistics'
import Playerslist from '../themes/football/Playerslist'
import {socket} from '../socket/socket'

//import url from "'https://konvajs.org/assets/lion.png"

const MatchBoard = () => {
  const [screen, setScreen] = useState()

  //import useImage from 'use-image'

  const lion = require("../images/lion.png");

  useEffect(()=>{
    socket.on('board', (data)=>{
      setScreen(data)
      console.log(data);  
    })   
  },[screen])

  return (
    <div>
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
    </div>

  )
}

export default MatchBoard
