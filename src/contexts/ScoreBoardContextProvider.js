import React, {createContext, useState, useEffect} from 'react'
import {socket} from '../socket/socket';

export const ScoreBoardContext = createContext()

const ScoreBoardContextProvider = (props) => {
  const [scoreData, setScoreData] = useState({teamOne: 0, teamTwo: 0, timerActive: false})
  const [teamStats, setTeamStats] = useState({
    team1Yellow: 0, team1Red: 0, team1Corners: 0, team1Offsides: 0, team1Shots: 0, team1Fouls: 0, team1OnTarget: 0,
    team2Yellow: 0, team2Red: 0, team2Corners: 0, team2Offsides: 0, team2Shots: 0, team2Fouls: 0, team2OnTarget: 0,
  })
  
  useEffect(()=>{
    socket.on('message', (data)=>{
      setScoreData(data)
      setTeamStats(data)
      console.log(data);    
    })   
  },[])

  const values = {
    scoreData,
    teamStats
  }
  return (
    <ScoreBoardContext.Provider value={values}>
      {props.children}
    </ScoreBoardContext.Provider>
  )
}

export default ScoreBoardContextProvider