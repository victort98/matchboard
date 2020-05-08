import React, {useEffect} from 'react'

const MasterClock = () => {

  let startTime = Math.floor(Date.now() / 1000);
  const checkTime = (i) => {
    if (i < 10) {i = "0" + i};  
    return i;
  }

  const startTimeCounter = () => {
    let now = Math.floor(Date.now() / 1000); 
    let diff = now - startTime; 
    let m = Math.floor(diff / 60); 
    let s = Math.floor(diff % 60); 
    m = checkTime(m); 
    s = checkTime(s); 
    document.getElementById("clock").innerHTML = m + ":" + s;
    let t = setTimeout(startTimeCounter, 1000); 
  }

  useEffect(()=>{
    startTimeCounter();
  }, [])


  return (
    <div>
      <div id="clock" className="clock"></div>    
    </div>
  )
}

export default MasterClock
