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
      timerActive: timerActive
    }  
    socket.emit('scoreInfo', info)
  }

  return (
    <div className="container-fluid">
      <div className="container">
      <div className="buttons">
        <button className="btnStyle start" onClick={()=> setTimerActive(true)}>START CLOCK</button>
        <button className="btnStyle stop" onClick={()=> setTimerActive(false)}>STOP CLOCK</button>
        <button className="btnStyle reset">RESET CLOCK</button>
      </div>

      <div className="screenInfo">
        <div className="team1">
          <label>SET TEAM 1</label>
            <br />
            <input className="teamName" placeholder="Name of team 1" type="text"></input>
            <br />
            <br />
            <label>SET SCORE</label>
            <br/>
            <input className="inputStyling" type="number" min="0" 
              placeholder="0"
              onChange={e=>setTeamOneScore(e.target.value)}>
            </input>
        </div>

        <div className="time">
        <Clock />
          <br />
          <div className="overtime">
            <input className="middleInputStyling" type="number" min="0" placeholder="0"></input>
            <input className="middleInputStyling" type="number" min="0" placeholder="0"></input>
          </div>
        </div>

        <div className="team2">
        <label>SET TEAM 2</label>
          <br />
          <input className="teamName" placeholder="Name of team 2" type="text"></input>
          <br />
          <br />
          <label>SET SCORE</label>
          <br/>
          <input className="inputStyling" type="number" min="0"
            placeholder="0"
            onChange={e=>setTeamTwoScore(e.target.value)}>
          </input>
        </div>
      </div>

      <div className="stats">
        <div className="stats-left">
          <div className="team1Stats">
            <ul className="yellowCornerShots">
                <li>
                  <label>YELLOW CARD</label>
                  <br />
                  <input className="inputStyling" type="number" min="0" placeholder="0"></input>
                  </li>
                  <li>
                  <label>CORNERS</label>
                  <br />
                  <input className="inputStyling" type="number" min="0" placeholder="0"></input>
                  </li>
                  <li>
                  <label>SHOTS</label>
                  <br />
                  <input className="inputStyling" type="number" min="0" placeholder="0"></input>
                </li>
            </ul>
            <ul className="redOffsideFouls">
                <li>
                  <label>RED CARD</label>
                  <br />
                  <input className="inputStyling" type="number" min="0" placeholder="0"></input>
                  </li>
                  <li>
                  <label>OFFSIDES</label>
                  <br />
                  <input className="inputStyling" type="number" min="0" placeholder="0"></input>
                  </li>
                  <li>
                  <label>FOULS</label>
                  <br />
                  <input className="inputStyling" type="number" min="0" placeholder="0"></input>
                </li>
            </ul>
          </div>
          {/* <br /> */}
          <div className="onTarget1">
            <label>SHOTS ON TARGET</label>
            <br />
            <input className="specialWidth inputStyling" type="number" min="0" placeholder="0"></input>
          </div>
          
        </div>

        <div className="middleInfo">
          <button className="extraTime">SET EXTRA TIME</button>
          <br />
          <br />
          <div className="screen-selection">
            <label>SELECT SREEN TO CAST</label>
          <br />
            <input className="scoreboard inputStyling" placeholder="SCOREBOARD" type="text"></input>
          </div>
          <br />
          <br />
          <button className="broadcast" onClick={()=> sendData()}>BROADCAST</button>
          <br />
          <br />
        </div>

        <div className="stats-right">
        <div className="team2Stats">
        <ul className="yellowCornerShots">
            <li>
            <label>YELLOW CARD</label>
            <br />
            <input className="inputStyling" type="number" min="0" placeholder="0"></input>
            </li>
            <li>
            <label>CORNERS</label>
            <br />
            <input className="inputStyling" type="number" min="0" placeholder="0"></input>
            </li>
            <li>
            <label>SHOTS</label>
            <br />
            <input className="inputStyling" type="number" min="0" placeholder="0"></input>
            </li>
        </ul>
        <ul className="redOffsideFouls">
          <li>
            <label>RED CARD</label>
            <br />
            <input className="inputStyling" type="number" min="0" placeholder="0"></input>
            </li>
            <li>
            <label>OFFSIDES</label>
            <br />
            <input className="inputStyling" type="number" min="0" placeholder="0"></input>
            </li>
            <li>
            <label>FOULS</label>
            <br />
            <input className="inputStyling" type="number" min="0" placeholder="0"></input>
          </li>
        </ul>
        </div>
        {/* <br/> */}
        <div className="onTarget2">
          <label>SHOTS ON TARGET</label>
          <br />
          <input className="specialWidth inputStyling" type="number" min="0" placeholder="0"></input>
        </div>
      </div>
      </div>

      <svg class="background" viewBox="0 0 1874 1080.446">
        <path fill="rgba(68,149,255,0.651)" stroke="rgba(0,0,0,0.329)" stroke-width="100px" 
          stroke-linejoin="miter" stroke-linecap="butt" stroke-miterlimit="4" shape-rendering="auto" 
          id="Path_4" 
          d="M 416.2294006347656 -2.817545237121521e-07 L 1457.770751953125 -2.817545237121521e-07 C 1687.64794921875 -2.817545237121521e-07 1874.000122070313 192.5970764160156 1874.000122070313 430.1777038574219 L 1874.000122070313 650.2685546875 C 1874.000122070313 887.84912109375 1687.64794921875 1080.4462890625 1457.770751953125 1080.4462890625 L 416.2294006347656 1080.4462890625 C 186.3522338867188 1080.4462890625 7.400896606668539e-07 887.84912109375 7.400896606668539e-07 650.2685546875 L 7.400896606668539e-07 430.1777038574219 C 7.400896606668539e-07 192.5970764160156 186.3522338867188 -2.817545237121521e-07 416.2294006347656 -2.817545237121521e-07 Z">
        </path>
      </svg>
      <svg class="football_field">
        <rect fill="rgba(243,243,243,1)" stroke="rgba(254,254,254,1)" stroke-width="10px" stroke-linejoin="miter" stroke-linecap="butt" stroke-miterlimit="4" shape-rendering="auto" id="football_field" rx="260.25" ry="250.25" x="5%" y="1.5%" width="79%" height="88vh">
        </rect>
      </svg>
    </div>
    </div>
  )
}

export default ControlBoard