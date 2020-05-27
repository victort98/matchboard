import React, {useContext, useState, useEffect} from 'react'
import '../themes/football/football.css'
import ControlClock from './ControlClock'
import {ControlClockContext} from '../contexts/ControlClockContextProvider'
import {socket} from '../socket/socket';
import MasterClock from './MasterClock'
import ClockTimer from '../demo/ClockTimer.js'

const ControlBoard = (props) => {
  const $ = x => document.querySelector(x);
  const {startTime, stopTime, resetTime} = useContext(ControlClockContext)
  const [screen, setScreen] = useState()
  const [teamOneScore, setTeamOneScore] = useState(0)
  const [teamTwoScore, setTeamTwoScore] = useState(0)
  const [overtime, setOvertime] = useState(0)
  
  /* CLOCK */
  const [startDate, setStartDate] = useState(0);
  const [timeElapsed, setTimeElapsed] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [seconds, setSeconds] = useState("00:00");
  /* CLOCK */

  /* STATISTICS */
  const [team1Yellow, setTeam1Yellow] = useState(0)
  const [team1Red, setTeam1Red] = useState(0)
  const [team1Corners, setTeam1Corners] = useState(0)
  const [team1Offsides, setTeam1Offsides] = useState(0)
  const [team1Shots, setTeam1Shots] = useState(0)
  const [team1Fouls, setTeam1Fouls] = useState(0)
  const [team1OnTarget, setTeam1OnTarget] = useState(0)
  
  const [team2Yellow, setTeam2Yellow] = useState(0)
  const [team2Red, setTeam2Red] = useState(0)
  const [team2Corners, setTeam2Corners] = useState(0)
  const [team2Offsides, setTeam2Offsides] = useState(0)
  const [team2Shots, setTeam2Shots] = useState(0)
  const [team2Fouls, setTeam2Fouls] = useState(0)
  const [team2OnTarget, setTeam2OnTarget] = useState(0)
  /* STATISTICS */

  const [timerActive, setTimerActive] = useState(false)
  const sendData = () => {
    let scoreInfo = {
      teamOne: teamOneScore,
      teamTwo: teamTwoScore,
      overtime: overtime,
      //TEAM 1
      team1Yellow: team1Yellow,
      team1Red: team1Red,
      team1Corners: team1Corners,
      team1Offsides: team1Offsides,
      team1Shots: team1Shots,
      team1Fouls: team1Fouls,
      team1OnTarget: team1OnTarget,
      //TEAM 2
      team2Yellow: team2Yellow,
      team2Red: team2Red,
      team2Corners: team2Corners,
      team2Offsides: team2Offsides,
      team2Shots: team2Shots,
      team2Fouls: team2Fouls,
      team2OnTarget: team2OnTarget,
    }  
    socket.emit('scoreInfo', scoreInfo)
  }

  useEffect(()=>{
    socket.on('getTime', (data)=>{ 
      console.log("recieved getTime request")
      socket.emit('fetchTime', [{action: "SET_START_DATE", payload: startDate}, {action: "SET_IS_ACTIVE", payload: isActive},
  {action: "SET_TIME_ELAPSED", payload: timeElapsed }])
    })
    return function cleanup() {
      socket.off('getTime')};
  },)

  function sendTime(){
    console.log("sending time")
    console.log("startdate: " + startDate)
    console.log("is active: " + isActive)
    console.log("time elapsed: " + timeElapsed)
    socket.emit('timeInfo', [{action: "SET_START_DATE", payload: startDate}, {action: "SET_IS_ACTIVE", payload: isActive},
    {action: "SET_TIME_ELAPSED", payload: timeElapsed }])
  }

  function startClock() {
    setStartDate(Date.now())
    socket.emit('timeInfo', [{action: "SET_START_DATE", payload: Date.now()}])
    setIsActive(!isActive)
    socket.emit('timeInfo', [{action: "SET_IS_ACTIVE", payload: true}])
  }

  function pauseClock() {
    let elapsed = Date.now() - startDate
    setIsActive(!isActive)
    socket.emit('timeInfo', [{action: "SET_IS_ACTIVE", payload: false}])
    setTimeElapsed(timeElapsed + elapsed)
    socket.emit('timeInfo', [{action: "SET_TIME_ELAPSED", payload: timeElapsed + elapsed}])
  }

  function resetClock() {
    let elapsed = Date.now() - startDate
    setIsActive(false);
    socket.emit('timeInfo', [{action: "SET_IS_ACTIVE", payload: false}])
    setTimeElapsed(0);
    socket.emit('timeInfo', [{action: "SET_TIME_ELAPSED", payload: 0}])
    setSeconds("00:00");
    socket.emit('timeInfo', [{action: "SET_SECONDS", payload: "00:00"}])
   //setIsActive(false);
  }
  /*
  const startClock = () => {
    socket.emit('timeInfo', 'start')
    // setTimerActive(true)
    startTime()    
    $('.start').classList.add('start-active')
    $('.stop').classList.remove('stop-active')
  }

  const stopClock = () => {
    stopTime()
    // setTimerActive(false)
    $('.start').classList.remove('start-active')
    $('.stop').classList.add('stop-active')
    socket.emit('timeInfo', 'stop')
  }

  const resetClock = () => {
    resetTime()
    $('.start').classList.remove('start-active')
    $('.stop').classList.remove('stop-active')
    socket.emit('timeInfo', 'reset')
  }
  */




  useEffect(()=>{
    if (screen === 'statistics') {
      socket.emit('board', 'statistics')
    } else if(screen === 'scoreboard'){
      socket.emit('board', 'scoreboard')
    } else if (screen === 'playerslist') {
      socket.emit('board', 'playerslist')
    }
  }, [screen])

  return (
    <div className="container-fluid">
      <div className="container-inputs">
      <div className="buttons">
        <button className="btnStyle start" onClick={()=> startClock()}>START</button>
        <button className="btnStyle stop" onClick={()=> pauseClock()}>STOP</button>
        <button className="btnStyle reset" onClick={()=>resetClock()}>RESET</button>
      </div>

      <div className="screenInfo">
        <div className="team1">
          <label>SET TEAM 1</label>
            <br />
            <input className="teamName" placeholder="Name of team 1" type="text"/>
            <br />
            <br />
            <label>SET SCORE</label>
            <br/>
            <input className="inputStyling" type="number" min="0" 
              placeholder="0"
              onChange={e=>setTeamOneScore(e.target.value)}/>
        </div>
        <div className="time">
        {/* <MasterClock/> */}
        <div className="clockComponent">
          <h1 className="clock"
            style={{fontVariantNumeric:'tabular-nums'}}>
              <ClockTimer
              startDate={startDate} setStartDate={setStartDate}
              timeElapsed={timeElapsed} setTimeElapsed={setTimeElapsed}
              isActive={isActive} setIsActive={setIsActive}
              seconds={seconds} setSeconds={setSeconds}
              />
          </h1>
        </div>
        <br />
        </div>
        <div className="team2">
        <label>SET TEAM 2</label>
          <br />
          <input className="teamName" placeholder="Name of team 2" type="text"/>
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
                  <input className="inputStyling" type="number" min="0" placeholder="0"
                  onChange={e=>setTeam1Yellow(e.target.value)}/>
                  </li>
                  <li>
                  <label>CORNERS</label>
                  <br />
                  <input className="inputStyling" type="number" min="0" placeholder="0"
                  onChange={e=>setTeam1Corners(e.target.value)}/>
                  </li>
                  <li>
                  <label>SHOTS</label>
                  <br />
                  <input className="inputStyling" type="number" min="0" placeholder="0"
                  onChange={e=>setTeam1Shots(e.target.value)}/>
                </li>
            </ul>
            <ul className="redOffsideFouls">
                <li>
                  <label>RED CARD</label>
                  <br />
                  <input className="inputStyling" type="number" min="0" placeholder="0"
                  onChange={e=>setTeam1Red(e.target.value)}/>
                  </li>
                  <li>
                  <label>OFFSIDES</label>
                  <br />
                  <input className="inputStyling" type="number" min="0" placeholder="0"
                  onChange={e=>setTeam1Offsides(e.target.value)}/>
                  </li>
                  <li>
                  <label>FOULS</label>
                  <br />
                  <input className="inputStyling" type="number" min="0" placeholder="0"
                  onChange={e=>setTeam1Fouls(e.target.value)}/>
                </li>
            </ul>
          </div>
          <div className="onTarget1">
            <label>SHOTS ON TARGET</label>
            <br />
            <input className="specialWidth inputStyling" type="number" min="0" placeholder="0"
            onChange={e=>setTeam1OnTarget(e.target.value)}/>
          </div>
          
        </div>

        <div className="middleInfo">
        <div className="overtime">
            <input className="middleInputStyling" type="number" min="0" placeholder="0"
            onChange={e=>setOvertime(e.target.value)}></input>
          </div>
          <button className="extraTime" onClick={()=> sendData()}>SET EXTRA TIME</button>
          <br />
          <br />
          <div className="screen-selection">
            <label>SELECT SREEN TO CAST</label>
          <br />
            <select className="screen inputStyling" onChange={e=>setScreen(e.target.value)}>
              <option value="scoreboard">SCORE BOARD</option>
              <option value="statistics">STATISTICS</option>
              <option value="playerslist">PLAYERS LIST</option>
              <option value="pointtable">POINT TABLE</option>
              <option value="leaguetable">LEAGUE TABLE</option>
            </select>
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
            <input className="inputStyling" type="number" min="0" placeholder="0"
            onChange={e=>setTeam2Yellow(e.target.value)}/>
          </li>
          <li>
            <label>CORNERS</label>
            <br />
            <input className="inputStyling" type="number" min="0" placeholder="0"
            onChange={e=>setTeam2Corners(e.target.value)}/>
          </li>
          <li>
            <label>SHOTS</label>
            <br />
            <input className="inputStyling" type="number" min="0" placeholder="0"
            onChange={e=>setTeam2Shots(e.target.value)}/>
          </li>
        </ul>
        <ul className="redOffsideFouls">
          <li>
            <label>RED CARD</label>
            <br />
            <input className="inputStyling" type="number" min="0" placeholder="0"
            onChange={e=>setTeam2Red(e.target.value)}/>
          </li>
          <li>
            <label>OFFSIDES</label>
            <br />
            <input className="inputStyling" type="number" min="0" placeholder="0"
            onChange={e=>setTeam2Offsides(e.target.value)}/>
          </li>
          <li>
            <label>FOULS</label>
            <br />
            <input className="inputStyling" type="number" min="0" placeholder="0"
            onChange={e=>setTeam2Fouls(e.target.value)}/>
          </li>
        </ul>
        </div>
        <div className="onTarget2">
          <label>SHOTS ON TARGET</label>
          <br />
          <input className="specialWidth inputStyling" type="number" min="0" placeholder="0"
          onChange={e=>setTeam2OnTarget(e.target.value)}/>
        </div>
      </div>
      </div>
       </div>

       <div className="container">
        <svg className="background" viewBox="0 0 1874 1080.446">
          <path fill="rgba(68,149,255,0.651)" stroke="rgba(0,0,0,0.329)" strokeWidth="100px" 
            strokeLinejoin="miter" strokeLinecap="butt" strokeMiterlimit="4" shapeRendering="auto" 
            id="Path_4" 
            d="M 416.2294006347656 -2.817545237121521e-07 L 1457.770751953125 -2.817545237121521e-07 C 
              1687.64794921875 -2.817545237121521e-07 1874.000122070313 192.5970764160156 1874.000122070313 
              430.1777038574219 L 1874.000122070313 650.2685546875 C 1874.000122070313 887.84912109375 
              1687.64794921875 1080.4462890625 1457.770751953125 1080.4462890625 L 416.2294006347656 
              1080.4462890625 C 186.3522338867188 1080.4462890625 7.400896606668539e-07 887.84912109375 
              7.400896606668539e-07 650.2685546875 L 7.400896606668539e-07 430.1777038574219 C 
              7.400896606668539e-07 192.5970764160156 186.3522338867188 -2.817545237121521e-07 
              416.2294006347656 -2.817545237121521e-07 Z">
          </path>

          <svg className="football_field">
          <rect fill="rgba(243,243,243,1)" stroke="rgba(254,254,254,1)" strokeWidth="10px" strokeLinejoin="miter" 
            strokeLinecap="butt" strokeMiterlimit="4" shapeRendering="auto" id="football_field" rx="390.25" ry="390.25" 
            x="11%" y="5.5%" width="1460px" height="960px">
            {/* width="79%" height="88vh" */}
          </rect>
        </svg>
        </svg>
      </div>

    </div>
  )
}

export default ControlBoard