import React, {useContext, useState, useEffect} from 'react'
import Clock from './ScoreBoardClock'
import {ScoreBoardContext} from '../contexts/ScoreBoardContextProvider'
import {ScoreBoardClockContext} from '../contexts/ScoreBoardClockContextProvider'
import Canvas from './Canvas'

const ScoreBoard = () => {
  const $ = x => document.querySelector(x);
  const {showClock, stopClock, timeInfo, stopInfo} = useContext(ScoreBoardClockContext)
  const {scoreData} = useContext(ScoreBoardContext)
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
      <hr/>
      {/* <Canvas scoreData={scoreData}/> */}
      
      <div className="row">
        <div className="col-1">         
        </div>
        <div className="col-3 mt-2">
           <h2 className="text-secondary text-center">Malmö</h2>
           <hr/>
           <h1 className="text-info pl-3 text-center display-1">{teamOneScore}</h1>
        </div>
        <div className="col-4">
          <Clock/>
        </div>
        <div className="col-3 mt-2">
          <h2 className="text-secondary text-center">Örebro</h2>
          <hr/>
          <h1 className="text-info pl-3 text-center display-1">{teamTwoScore}</h1>
        </div>
        <div className="col-2">          
        </div>      
      </div>
    
    </div>
  )
}

export default ScoreBoard
