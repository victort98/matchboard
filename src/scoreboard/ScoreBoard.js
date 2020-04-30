import React, {useContext, useState, useEffect} from 'react'
import Clock from './ScoreBoardClock'
import {ScoreBoardContext} from '../contexts/ScoreBoardContextProvider'
import {ScoreBoardClockContext} from '../contexts/ScoreBoardClockContextProvider'
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


  
  const $ = x => document.querySelector(x);
  const {showClock, stopClock, timeInfo, stopInfo} = useContext(ScoreBoardClockContext)
  //const {scoreData} = useContext(ScoreBoardContext)
  const [teamOneScore, setTeamOneScore] = useState(0)
  const [teamTwoScore, setTeamTwoScore] = useState(0)
  const [timeStarted, setTimeStarted] = useState(null)
  // const [timeStarted, setTimeStarted] = useState(null)

  useEffect(()=>{
    console.log(stopInfo.timeStarted);
    
    let startClock
   
    console.log(timeStarted);
    
    if (scoreData.teamOne !== undefined) {
      setTeamOneScore(scoreData.teamOne)
    }
    if (scoreData.teamTwo !== undefined) {
      setTeamTwoScore(scoreData.teamTwo)
    }
    if (timeInfo.timeStarted !== undefined) {
      setTimeStarted(timeInfo.timeStarted)
    }
    if(timeStarted === 0){
      startClock = setInterval(showClock, 100)
    }else if(timeStarted === 1){
      stopClock()  
      clearInterval(startClock)  
      setTimeStarted(0)    
    }
    if (stopInfo.timeStarted === null) {
      setTimeStarted(1) 
      stopClock()
      clearInterval(startClock)    
    }
    
  }, [scoreData, timeInfo, stopInfo, stopClock, showClock, timeStarted])

  return (
    <div className="container-fluid text-center"> 
      <h1>Score Board</h1>
         
      <KonvaCanvas timerActive={scoreData.timerActive} home={scoreData.teamOne} away={scoreData.teamTwo}/>

    </div>
  )
}

export default ScoreBoard
