import React, {useEffect, useState} from 'react'
import Scoreboard from '../themes/football/Scoreboard2'
import Statistics from '../themes/football/Statistics'
import Playerslist from '../themes/football/Playerslist2'
import Fixtures from '../themes/football/Fixtures'
import PointTable from '../themes/football/PointTable'
import FieldImage from '../images/football.png'
import {socket} from '../socket/socket'
import {AnimatePresence} from "framer-motion"

const MatchBoard = () => {
  const [screen, setScreen] = useState('')

  useEffect(()=>{
    socket.on('board', (data)=>{
      setScreen(data)
    })     
    return;
  },[screen])

  return (
    <div style={{position: 'relative', background:'green', zIndex:-1, height:'100vh', display: 'flex', justifyContent: 'center'}}>
      <svg className="background" viewBox="0 0 1884.241 1080.446" style={{zIndex:0, height:'100vh'}}>
        <path fill="rgba(0, 179, 0, 0.99)" stroke="rgba(0, 61, 0, 1)" stroke-width="100px" stroke-linejoin="miter" stroke-linecap="butt" 
          stroke-miterlimit="4" shape-rendering="auto" id="Path_4" 
          d="M 418.5040283203125 -2.817545237121521e-07 L 1465.7373046875 -2.817545237121521e-07 C 1696.870727539063 
            -2.817545237121521e-07 1884.241333007813 192.5970764160156 1884.241333007813 430.1777038574219 
            L 1884.241333007813 650.2685546875 C 1884.241333007813 887.84912109375 1696.870727539063 1080.4462890625 
            1465.7373046875 1080.4462890625 L 418.5040283203125 1080.4462890625 C 187.3706207275391 1080.4462890625 
            7.441341836056381e-07 887.84912109375 7.441341836056381e-07 650.2685546875 L 7.441341836056381e-07 
            430.1777038574219 C 7.441341836056381e-07 192.5970764160156 187.3706207275391 -2.817545237121521e-07 
            418.5040283203125 -2.817545237121521e-07 Z">
        </path>      
      </svg>
      <img src={FieldImage} alt="fieldimage" style={{ position: 'absolute', opacity:'0.6', top: '5%', height: '90vh'}} />
      <AnimatePresence>
      <div key={screen} style={{overflowY: 'hidden', position: 'absolute', top: '14vh'}}>
        {(screen==='statistics')?
        (<Statistics key="statistics"/>):
        (screen==='scoreboard')?
        (<Scoreboard key="scoreboard"/>):
        (screen==='playerslist')?
        (<Playerslist key="playerslist"/>):
        (screen==='fixtures')?
        (<Fixtures key="fixtures"/>):
        (screen==='pointtable')?
        (<PointTable key="pointtable"/>):
        (<Scoreboard/>)
        }
      </div>
      </AnimatePresence>
    </div>
  )
}

export default MatchBoard
