import React, {useEffect, useState} from 'react'
import Scoreboard from '../themes/football/Scoreboard'
import Statistics from '../themes/football/Statistics'
import Playerslist from '../themes/football/Playerslist2'
import Fixtures from '../themes/football/Fixtures'
import PointTable from '../themes/football/PointTable'
import {socket} from '../socket/socket'
import {AnimatePresence, motion} from "framer-motion"

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
      (<motion.div><Scoreboard/></motion.div>):
      (screen==='playerslist')?
      (<Playerslist/>):
      (screen==='fixtures')?
      (<Fixtures/>):
      (screen==='pointtable')?
      (<PointTable/>):
      (<Scoreboard/>)
      }

    </>
  )
}

export default MatchBoard
