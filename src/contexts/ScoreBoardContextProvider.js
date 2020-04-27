import React, {createContext, useState, useEffect} from 'react'
import openSocket from 'socket.io-client'

export const ScoreBoardContext = createContext()

const ScoreBoardContextProvider = (props) => {
  const [scoreData, setScoreData] = useState([])
  
  useEffect(()=>{
    let socket = openSocket('/')
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