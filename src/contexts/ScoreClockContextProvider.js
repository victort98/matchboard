import React, {createContext, useState, useEffect} from 'react'
import {socket} from '../socket/socket';

export const ScoreClockContext = createContext()

const ScoreClockContextProvider = (props) => {

  const [score, setScore] = useState({team1: 0, team2: 0});

  /*
  const updateScore = (title, author) => {
    setBooks([...books, {title, author, id: uuid()}]);
  };
  */
  const updateScore = (team, score) => {
    setScore(state => ({
      ...state,
      [team]: score
  }))
  };

  function handleClick(team, score) {
    setScore(state => ({...state, [team]: score }))
  }
  /*
  const setState = (prevState => ({
    ...prevState,
    fName: 'your updated value here'
  }));
  */

  const values = {
    score,
    setScore,
    updateScore,
    handleClick
  }

  return (
    <ScoreClockContext.Provider value={values}>
      {props.children}
    </ScoreClockContext.Provider>
  )
}

export default ScoreClockContextProvider
