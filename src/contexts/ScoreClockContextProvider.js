import React, {createContext, useState, useEffect} from 'react'
import {socket} from '../socket/socket';

export const ScoreClockContext = createContext()

const ScoreClockContextProvider = (props) => {
  let timePaused = 0;
  let timeStarted = 0;
  let timePausedSum = 0;
  let timeTotal = 90 * 60 * 1000;

  let timeLeft = () => {
    let timeElapsed = timeStarted ?
      Date.now() - timeStarted : 0;
      timeElapsed -= timePausedSum;
      timeElapsed -= timePaused ?
      Date.now() - timePaused : 0;
    return timeTotal - timeElapsed;
  }

  let timeFormatted = () => {
    let tl = timeLeft();
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

  let stopClock = () => {
    if (!timeStarted) { return; }
    timePaused = Date.now();
  }

  let sleep = (ms) => {
    return new Promise(res => setTimeout(res, ms));
  }

  let showClock = () => {
    startClock()
    timeFormatted();
    sleep(500);
  }

  let clockStarted;
  let startTime = () => {  
    clockStarted = setInterval(showClock, 1000)
  }

  let stopTime = () =>{
    stopClock()
    clearInterval(clockStarted)
  }

  const resetTime = () => {
    timeStarted = 0;
    timePaused = 0;
    timePausedSum = 0;
    stopTime()
  }


  const values={
    timeFormatted,
    startTime,
    stopTime,
    resetTime
  }

  return (
    <ScoreClockContext.Provider value={values}>
      {props.children}
    </ScoreClockContext.Provider>
  )
}

export default ScoreClockContextProvider
