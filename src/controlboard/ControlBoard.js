import React, {useContext, useState, useEffect} from 'react'
import Clock from './Clock'
import {ClockContext} from '../contexts/ClockContextProvider'
import {socket} from '../socket/socket';

const ControlBoard = (props) => {
  const {startTime, stopTime} = useContext(ClockContext)

  const [teamOneScore, setTeamOneScore] = useState(0)
  const [teamTwoScore, setTeamTwoScore] = useState(0)

  const sendData = () => {
    let info = {
      teamOne: +teamOneScore,
      teamTwo: +teamTwoScore,
    }  
    socket.emit('scoreInfo', info)
  }

  return (
    <div className="container">
    <h1 className="text-center my-2">Control Board</h1>
    <hr/>
     <div className="text-center">
      <Clock/>
      <button className="btn btn-outline-success mr-2" onClick={()=> startTime()}>Start Clock</button>
      <button className="btn btn-outline-danger ml-2" onClick={()=>stopTime()}>Stop Clock</button>
     </div>
      <div className="row mr-auto mt-5">    
        <div className="col-3"></div>  
        <div className="col-3 mr-0 pr-0">          
          <div className="form-group">
            <label>TEAM 1</label>
              <input type="number" className="form-control text-info" id="team-1"
                style={{fontSize:'28px'}}
                min={teamOneScore}
                placeholder={teamOneScore}
                onChange={e=>setTeamOneScore(e.target.value)}/>
            </div>
          </div> 
           <div className="col-3 ml-0 pr-0">
            <div className="form-group text-right">
              <label>TEAM 2</label>
              <input type="number" className="form-control text-info" id="team-2"
                style={{fontSize:'28px'}}
                min={teamTwoScore}
                placeholder={teamTwoScore}
                onChange={e=>setTeamTwoScore(e.target.value)}/>
            </div>
          </div> 
          <div className="col-3"></div>
            <button type="button" className="btn btn-success mx-auto px-5 mt-3"
             onClick={()=> sendData()}>SEND</button>
      </div>
    </div>
  )
}

export default ControlBoard
