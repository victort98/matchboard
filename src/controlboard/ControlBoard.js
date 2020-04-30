import React, {useContext, useState, useEffect} from 'react'
import Clock from './Clock'
import {ClockContext} from '../contexts/ClockContextProvider'
import {socket} from '../socket/socket';

const ControlBoard = (props) => {

  //const {timeLeft, startClock, stopClock, sleep, timeFormatted} = useContext(ClockContext)

  const [teamOneScore, setTeamOneScore] = useState(0)
  const [teamTwoScore, setTeamTwoScore] = useState(0)
  //const [clockStatus, setClockStatus] = useState(false)
  const [timerActive, setTimerActive] = useState(false)

  const sendData = () => {
    let info = {
      teamOne: teamOneScore,
      teamTwo: teamTwoScore,
      //timeLeft: timeLeft(),
      timerState: timerActive
    }  
    socket.emit('scoreInfo', info)
  }



  return (
    <div className="container">
    <h1 className="text-center my-2">Control Board</h1>
    <hr/>
     
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
             onClick={()=> sendData()}>Update score</button>
            <button type="button" className="btn btn-primary"
             onClick={()=> setTimerActive(true)}>Start clock</button>
            <button type="button" className="btn btn-danger"
             onClick={()=> setTimerActive(false)}>Stop clock</button>
          </form> 
        </div> 
      </div>
    </div>
  )
}

export default ControlBoard
