import React from 'react'

const Clock = (props) => {

  return (
    <div>
      <h1 className="clock" style={{fontVariantNumaric: 'tabular-nums' }}>90:00</h1>

      {/* <button onClick={()=> {setInterval(showClock, 100)}}>Start</button> */}
      
    </div>
  )
}

export default Clock
