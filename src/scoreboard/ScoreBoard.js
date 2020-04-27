import React, {useContext} from 'react'
import Clock from '../controlboard/Clock'
import {ScoreBoardContext} from '../contexts/ScoreBoardContextProvider'


const ScoreBoard = () => {
  const {scoreData} = useContext(ScoreBoardContext)

  return (
    <div className="container text-center">
 
      <h1>Score Board</h1>
      <hr/>
      <h1 className="text-secondary">Team One 
        <span className="text-info pl-3">{scoreData.teamOne}</span>
      </h1>
      <h1 className="text-secondary">Team Two 
        <span className="text-info pl-3">{scoreData.teamTwo}</span>
      </h1>

      <Clock/>
    </div>
  )
}

export default ScoreBoard
