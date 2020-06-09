import React, {useEffect} from 'react'

const MasterClock = () => {

  let startTime = Date.now();
  const checkTime = (i) => {
    if (i < 10) {i = "0" + i};  
    return i;
  }

  let updateTime;
  const countTime = () => {
    let now = Date.now(); 
    let diff = now - startTime; 
    let minute = Math.floor(diff/60/1000); 
    let second = Math.floor(diff/1000 - minute*60 ); 
    minute = checkTime(minute); 
    second = checkTime(second); 
    document.getElementById("clock").innerHTML = minute + ":" + second;
    updateTime = setTimeout(countTime, 1000); 
  }

  const startClock = () => {
    countTime()
  }

  const stopClock = () => {
    clearTimeout(updateTime)
  }

  const resetClock = () => {
    
  }

  return (
    <div style={{textAlign:'center'}}>
      <div id="clock" className="clock">00:00</div> 

      <br/>

      <button style={{padding: '5px 20px', margin: '15px 5px'}}
        onClick={()=>{startClock()}}
      >Start
      </button>
      <button style={{padding: '5px 20px', margin: '15px 5px'}}
        onClick={()=>{stopClock()}}
      >Stop
      </button>   
      <button style={{padding: '5px 20px', margin: '15px 5px'}}
        onClick={()=>{resetClock()}}
      >Reset
      </button>   
    </div>
  )
}

export default MasterClock
