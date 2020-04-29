import React, {useContext, useEffect} from 'react'
import Clock from '../controlboard/Clock'
import {ScoreBoardContext} from '../contexts/ScoreBoardContextProvider'
import {ClockContext} from '../contexts/ClockContextProvider'
import Canvas from './Canvas'

const ScoreBoard = () => {
  const $ = x => document.querySelector(x);
  // const {timeLeft, startClock, sleep, timeFormatted} = useContext(ClockContext)
  const {scoreData} = useContext(ScoreBoardContext)

  let timePaused = 0;
  let timeStarted = 0;
  let timePausedSum = 0;

  let timeFormatted = () => {
    let tl = scoreData.timeLeft;
    let minutes = Math.floor(tl / 60 / 1000);
    let seconds = Math.floor(tl / 1000) - minutes * 60;
    return (minutes + '').padStart(2, '0') + ':'
      + (seconds + '').padStart(2, 0);
  }

  let startClock = () => {
    if (!timeStarted) {
      timeStarted = Date.now();
    }
    else if (!timePaused) {
      return;
    }
    else {
      timePausedSum += Date.now() - timePaused;
      timePaused = 0;
    }
  }

  let sleep = (ms) => {
    return new Promise(res => setTimeout(res, ms));
  }

  let showClock = () => {
    startClock()
    $('.clock').innerHTML = timeFormatted();
    sleep(500);
  }

  if (scoreData.timeLeft) {
    showClock()
  }

  return (
    <div className="container-fluid text-center"> 
      <h1>Score Board</h1>
      <hr/>
      <Canvas scoreData={scoreData}/>
      
      <div className="row">
        <div className="col-2">         
        </div>
        <div className="col-3 mt-2">
           <h2 className="text-secondary text-center">Malmö</h2>
           <h1 className="text-info pl-3 text-right display-1">{scoreData.teamOne}</h1>
        </div>
        <div className="col-3">
          <Clock className="clock"/>
        </div>
        <div className="col-3 mt-2">
          <h2 className="text-secondary text-center">Örebro</h2>
          <h1 className="text-info pl-3 text-left display-1">{scoreData.teamTwo}</h1>
        </div>
        <div className="col-2">          
        </div>      
      </div>
    
    </div>
  )
}

export default ScoreBoard
