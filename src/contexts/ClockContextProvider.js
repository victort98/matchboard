import React, {createContext} from 'react'

export const ClockContext = createContext()

const ClockContextProvider = (props) => {
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

  const values={
    timeStarted,
    timeLeft,
    timeFormatted,
    startClock,
    stopClock,
    sleep
  }
  return (
    <ClockContext.Provider value={values}>
      {props.children}
    </ClockContext.Provider>
  )
}

export default ClockContextProvider
