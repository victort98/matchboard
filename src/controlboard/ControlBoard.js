import React, {useContext, useState, useEffect} from 'react'
import Clock from './Clock'
import {ClockContext} from '../contexts/ClockContextProvider'
import {socket} from '../socket/socket';

const ControlBoard = (props) => {
  const $ = x => document.querySelector(x);
  const {timeLeft, startClock, stopClock, sleep, timeFormatted} = useContext(ClockContext)

  const [teamOneScore, setTeamOneScore] = useState(0)
  const [teamTwoScore, setTeamTwoScore] = useState(0)
  const [clockStatus, setClockStatus] = useState(false)

  const sendData = () => {
    let info = {
      teamOne: teamOneScore,
      teamTwo: teamTwoScore,
      timeLeft: timeLeft()
    }  
    socket.emit('scoreInfo', info)
  }

  let showClock = () => {
    startClock()
    $('.clock').innerHTML = timeFormatted();
    sleep(500);
  }

  let startTime = () => {
    if (clockStatus) {
      setInterval(showClock, 100)
      setClockStatus(true)
    }else{
      clearInterval(showClock)
      stopClock()
    }
    
  }

  let stopTime = () =>{
    setClockStatus(true)
    stopClock()
  }

  useEffect(() => {
    stopTime()
  }, [])

  return (
    <div className="container">
      <div className="buttons">
        <button className="btnStyle start">START CLOCK</button>
        <button className="btnStyle stop">STOP CLOCK</button>
        <button className="btnStyle reset">RESET</button>
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
                <input className="inputStyling" type="number" min="0" placeholder="0"></input>
        </div>

        <div className="time">
        <div className="clock">90:00</div>
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
                <input className="inputStyling" type="number" min="0" placeholder="0"></input>
        </div>

      </div>

      <div className="stats">
        <div className="leftcol2">
        <ul className="list">
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
                    <ul className="list2">
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
                    <br />
                <label>SHOTS ON TARGET</label>
                <br />
                <input className="specialWidth inputStyling" type="number" min="0" placeholder="0"></input>
        </div>

        <div className="midcol2">
                <button className="extraTime">SET EXTRA TIME</button>
                <p>SELECT SREEN TO CAST</p>
                <input className="scoreboard" placeholder="SCOREBOARD" type="text"></input>
                <br />
                <br />
                <button className="broadcast">BROADCAST</button>
        </div>

        <div className="rightcol2">
        <ul className="list">
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
                    <ul className="list2">
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
                    <br />
                <label>SHOTS ON TARGET</label>
                <br />
                <input className="specialWidth inputStyling" type="number" min="0" placeholder="0"></input>
        </div>

      </div>

    </div>
  )
}

export default ControlBoard
