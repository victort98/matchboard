import React from 'react'

const ScoreBoardClock = () => {
  return (
    <div className="bg-success pt-2 rounded-circle mb-3" 
      style={{width: '150px', height: '150px', margin:'0 auto'}}>
      <h1 className="score-clock display-4 pt-4 text-white"
       style={{fontVariantNumeric:'tabular-nums'}}>90:00</h1>      
    </div>
  )
}

export default ScoreBoardClock
