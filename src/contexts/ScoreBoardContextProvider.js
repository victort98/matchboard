import React, {createContext, useState, useEffect} from 'react'
import {socket} from '../socket/socket';

export const ScoreBoardContext = createContext()

const ScoreBoardContextProvider = (props) => {
  const [scoreData, setScoreData] = useState([])
  
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