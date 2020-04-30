import React, {useContext, useEffect, useState} from 'react'
import Clock from '../controlboard/Clock'
import {ScoreBoardContext} from '../contexts/ScoreBoardContextProvider'
import {ClockContext} from '../contexts/ClockContextProvider'
import Canvas from './Canvas'
import KonvaCanvas from './KonvaCanvas'
import {socket} from '../socket/socket';

const ScoreBoard = () => {
  // const $ = x => document.querySelector(x);
  // const {timeLeft, startClock, sleep, timeFormatted} = useContext(ClockContext)
  const {scoreData} = useContext(ScoreBoardContext)
  const [scoreboardData, setScoreboardDate] = useState({homeScore: 0, awayScore: 0, timerActive: false})

  useEffect(()=>{
    socket.on('message', (data)=>{
      //setScoreData(data)
      console.log(data);  
    })
  },[])


  

  return (
    <div className="container-fluid text-center"> 
      <h1>Score Board</h1>
         
      <KonvaCanvas timerActive={scoreData.timerActive} home={scoreData.teamOne} away={scoreData.teamTwo}/>

    </div>
  )
}

export default ScoreBoard
