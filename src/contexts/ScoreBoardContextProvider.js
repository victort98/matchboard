import React, {createContext, useState, useEffect} from 'react'
import {socket} from '../socket/socket';

export const ScoreBoardContext = createContext()

const ScoreBoardContextProvider = (props) => {
  const [scoreData, setScoreData] = useState({teamOne: 0, teamTwo: 0, timerActive: false})

  /*

        teamOne: teamOneScore,
      teamTwo: teamTwoScore,
      //timeLeft: timeLeft(),
      timerActive: timerActive

  */
  
  useEffect(()=>{
    socket.on('message', (data)=>{
      setScoreData(data)
      console.log(data);  
    })
  },[])

  const values = {
    scoreData
  }
  return (
    <ScoreBoardContext.Provider value={values}>
      {props.children}
    </ScoreBoardContext.Provider>
  )
}

export default ScoreBoardContextProvider