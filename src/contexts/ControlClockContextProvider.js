import React, {createContext} from 'react'
import {socket} from '../socket/socket';

export const ControlClockContext = createContext()

const ControlClockContextProvider = (props) => {
  const $ = x => document.querySelector(x);
  let timePaused = 0;
  let timeStarted = 0;
  let timePausedSum = 0;
  let timeTotal = 0;

  let timeLeft = () => {
    let timeElapsed = timeStarted ?
      Date.now() - timeStarted : 0;
      timeElapsed -= timePausedSum;
      timeElapsed -= timePaused ?
      Date.now() - timePaused : 0;
    return timeTotal + timeElapsed;
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

  let showClock = () => {
    startClock()
    $('.clock').innerHTML = timeFormatted();
  }

  let clockStarted;
  let startTime = () => {  
    clockStarted = setInterval(showClock, 100)
    let timeInfo = {
      timeStarted: timeStarted,
      timeLeft: timeLeft()
    }
    socket.emit('timeInfo', timeInfo)
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
    $('.clock').innerHTML = '00:00';
  }

  const values={
    startTime,
    stopTime,
    resetTime
  }
  return (
    <ControlClockContext.Provider value={values}>
      {props.children}
    </ControlClockContext.Provider>
  )
}

export default ControlClockContextProvider
