import React, {createContext} from 'react'

export const ClockContext = createContext()

const ClockContextProvider = (props) => {

  const now = () => {
    return Date.now()
  }
  let startTime;
  if (JSON.parse(localStorage.getItem('startTime')) !== null) {
    startTime = JSON.parse(localStorage.getItem('startTime'));
  }
  let stopTime = 0;
  let pausedTimeDur = 0;


  const checkTime = (i) => {
    if (i < 10) {i = "0" + i};  
    return i;
  }


  const countTime = () => {
    let diff = now() - startTime; 
    let minute = Math.floor(diff/60/1000); 
    let second = Math.floor(diff/1000 - minute*60 ); 
    minute = checkTime(minute); 
    second = checkTime(second); 
    return minute + ":" + second;
  }

  const startClock = ()=>{
    pausedTimeDur = now() - JSON.parse(localStorage.getItem('stopTime'))
    startTime += pausedTimeDur
    countTime()
  }


  const resetClock = () => {
    startTime = 0
    stopTime = 0
    pausedTimeDur = 0
  }

  const values={
    countTime,    
    startClock,
    resetClock
  }

  /* 
  
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

  // let sleep = (ms) => {
  //   return new Promise(res => setTimeout(res, ms));
  // }

  let showClock = () => {
    startClock()
    timeFormatted();
    // sleep(500);
  }

  let clockStarted;
  let startTime = () => {  
    clockStarted = setInterval(showClock, 100)
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
  */

  return (
    <ClockContext.Provider value={values}>
      {props.children}
    </ClockContext.Provider>
  )
}

export default ClockContextProvider
