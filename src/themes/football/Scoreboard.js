import React, {useContext} from 'react'
import {ScoreBoardContext} from '../../contexts/ScoreBoardContextProvider'
import KonvaCanvas from './KonvaCanvas'

const Scoreboard = () => {
  const {scoreData} = useContext(ScoreBoardContext)

  return (
    <div> 
      <h1>Score Board</h1>         
        <KonvaCanvas 
          timerActive={scoreData.timerActive} 
          home={scoreData.teamOne} 
          away={scoreData.teamTwo}
        />
    </div>
  )
}

export default Scoreboard
