import React from 'react'

const Clock = (props) => {
  // console.log(props);
  return (
    <div className="mb-3 pt-2" 
      style={{width: '150px', height: '150px', margin:'0 auto'}}>
      <h1 className="clock display-4 pt-4 text-white"
       style={{fontVariantNumeric:'tabular-nums'}}>90:00</h1>      
    </div>
  )
}

export default Clock
