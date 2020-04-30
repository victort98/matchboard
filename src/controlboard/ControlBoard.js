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
      <div className="buttons">
        <button className="btnStyle start" onClick={()=> startTime()}>START CLOCK</button>
        <button className="btnStyle stop" onClick={()=> stopTime()}>STOP CLOCK</button>
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
                    <br />
                    <div className="onTarget">
                <label>SHOTS ON TARGET</label>
                <br />
                <input className="specialWidth inputStyling" type="number" min="0" placeholder="0"></input>
                </div>
        </div>

        <div className="middleInfo">
                <button className="extraTime">SET EXTRA TIME</button>
                <br />
                <br />
                <label>SELECT SREEN TO CAST</label>
                <br />
                <input className="scoreboard inputStyling" placeholder="SCOREBOARD" type="text"></input>
                <br />
                <br />
                <button className="broadcast" onClick={()=> sendData()}>BROADCAST</button>
                <br />
                <br />
        </div>

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
                    <br />
                    <div className="onTarget">
                <label>SHOTS ON TARGET</label>
                <br />
                <input className="specialWidth inputStyling" type="number" min="0" placeholder="0"></input>
                </div>
        </div>

      </div>

    </div>
  )
}

export default ControlBoard