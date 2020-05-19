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

  return (
    <ClockContext.Provider value={values}>
      {props.children}
    </ClockContext.Provider>
  )
}

export default ClockContextProvider
