import React, {createContext, useState, useEffect} from 'react'
import {socket} from '../socket/socket';

export const ScoreBoardContext = createContext()

const ScoreBoardContextProvider = (props) => {
  const [score, setScore] = useState({team1: 0, team2: 0});

  const updateScore = (team, score) => {
    setScore(state => ({
      ...state,
      [team]: score
  }))
  };

  function handleClick(team, score) {
    setScore(state => ({...state, [team]: score }))
  }

  const values = {
    score,
    setScore,
    updateScore,
    handleClick
  }

  /*
  const [score, setScore] = useState({team1: 0, team2: 0});
  const [teamStats, setTeamStats] = useState({
    team1Yellow: 0, team1Red: 0, team1Corners: 0, team1Offsides: 0, team1Shots: 0, team1Fouls: 0, team1OnTarget: 0,
    team2Yellow: 0, team2Red: 0, team2Corners: 0, team2Offsides: 0, team2Shots: 0, team2Fouls: 0, team2OnTarget: 0,
  })
  const [overtime, setOvertime] = useState()
  */
  
  /*
  socket.on('timeInfo', (data)=>{
    console.log("data recieved in ScoreBoardContextProvider")
      //setStates(data.actions)
    })
    return () => {
      socket.off('timeInfo') 
    }
    */
    /*
  const values = {
    scoreData,
    teamStats,
    overtime
  }
  */
  return (
    <ScoreBoardContext.Provider value={values}>
      {props.children}
    </ScoreBoardContext.Provider>
  )
}

export default ScoreBoardContextProvider