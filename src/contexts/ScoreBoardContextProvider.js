import React, {createContext, useState, useEffect} from 'react'
import openSocket from 'socket.io-client'

export const ScoreBoardContext = createContext()

const ScoreBoardContextProvider = (props) => {
  const [scoreData, setScoreData] = useState([])
  let socket = openSocket('/')
  const sendData = () => {
    let info = {
      name: 'Score Board',
      date: Date.now()
    }
    socket.emit('info', info)
  }

  useEffect(()=>{
    sendData()
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