import React, {useContext} from 'react'
import {ScoreBoardContext} from '../contexts/ScoreBoardContextProvider'

const ScoreBoard = () => {
  const {scoreData} = useContext(ScoreBoardContext)
  return (
    <div>
      <h2>Score Board</h2>
      {scoreData.name}
    </div>
  )
}

export default ScoreBoard
