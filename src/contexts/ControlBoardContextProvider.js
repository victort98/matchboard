import React, {createContext, useState} from 'react'
// import openSocket from 'socket.io-client'

export const ControlBoardContext = createContext()

const ControlBoardContextProvider = (props) => {
  // let socket = openSocket('localhost:3200')
  // const [info, setInfo] = useState([])

  //  const sendData = () => {
  //   let info = {
  //     name: 'Score Board',
  //     date: Date.now()
  //   }
  //   setInfo(info)
  //   socket.emit('info', info)
  // }

  // const values = {
  //   info,
  //   sendData
  // } 
  
  return (
    <ControlBoardContext.Provider>
      {props.children}
    </ControlBoardContext.Provider>
  )
}

export default ControlBoardContextProvider
