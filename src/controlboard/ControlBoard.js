import React, {useContext, useState} from 'react'
import Clock from './Clock'
import {ClockContext} from '../contexts/ClockContextProvider'
import {socket} from '../socket/socket';

const ControlBoard = (props) => {
  const $ = x => document.querySelector(x);
  const {timeLeft, startClock, stopClock, sleep, timeFormatted} = useContext(ClockContext)

  const [teamOneScore, setTeamOneScore] = useState(0)
  const [teamTwoScore, setTeamTwoScore] = useState(0)

   const sendData = () => {
    let info = {
      teamOne: teamOneScore,
      teamTwo: teamTwoScore,
      timeLeft: timeLeft()
    }  
    socket.emit('info', info)
  }

  let showClock = () => {
    startClock()
    $('.clock').innerHTML = timeFormatted();
    sleep(500);
  }

  let startTime = () => {
    setInterval(showClock, 100)
  }

  let stopTime = () =>{
    stopClock()
    clearInterval(startTime)
  }

  return (
    <div className="container">
    <h1 className="text-center my-2">Control Board</h1>
    <hr/>
     <div className="text-center">
      <Clock className="clock"/>
      <button onClick={()=> startTime()}>Start Clock</button>
      {/* <button onClick={()=>stopTime()}>Stop Clock</button> */}
     </div>
      <div className="row mr-auto">      
        <div className="col-5">
          <form>
            <div className="form-group">
              <label>TEAM 1</label>
              <input type="number" className="form-control" id="team-1"
                min={teamOneScore}
                placeholder={teamOneScore}
                onChange={e=>setTeamOneScore(e.target.value)}/>
            </div>
            <div className="form-group">
              <label>TEAM 2</label>
              <input type="number" className="form-control" id="team-2"
                min={teamTwoScore}
                placeholder={teamTwoScore}
                onChange={e=>setTeamTwoScore(e.target.value)}/>
            </div>
            <button type="button" className="btn btn-success"
             onClick={()=> sendData()}>SEND</button>
          </form> 
        </div> 
      </div>
    </div>
  )
}

export default ControlBoard
