import React, {createContext} from 'react'

export const ControlBoardContext = createContext()

const ControlBoardContextProvider = (props) => {
  
  return (
    <ControlBoardContext.Provider>
      {props.children}
    </ControlBoardContext.Provider>
  )
}

export default ControlBoardContextProvider
