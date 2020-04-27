import React from 'react'

const ControlBoard = () => {
  return(
    <div>
        <div className="clockButtons">
            <button className="start btnStyle">START CLOCK</button>
            <button className="stop btnStyle">STOP CLOCK</button>
            <button className="reset btnStyle">RESET</button>
        </div>

            <div className="controlContainer">
            <div className="team1">
                <label>SET TEAM 1</label>
                <br />
                <input className="teamName" placeholder="Name of team 1" type="text"></input>
                <br />
                <br />
                <label>SET SCORE</label>
                <br/>
                <input className="specialWidth inputStyling" type="number" min="0" placeholder="0"></input>
                <div className="teamInformation">
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
                    <ul className="list">
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
                <br />
                <label>SHOTS ON TARGET</label>
                <br />
                <input className="specialWidth inputStyling" type="number" min="0" placeholder="0"></input>
            </div>

            <div className="middleInformation">
                <div className="clock">90:00</div>
                <br />
                <div className="overtime">
                <input className="middleInputStyling" type="number" min="0" placeholder="0"></input>
                <input className="middleInputStyling" type="number" min="0" placeholder="0"></input>
                </div>
                <br />
                <button className="extraTime">SET EXTRA TIME</button>
                <p>SELECT SREEN TO CAST</p>
                <input className="scoreboard" placeholder="SCOREBOARD" type="text"></input>
                <br />
                <br />
                <button className="broadcast">BROADCAST</button>
            </div>

            <div className="team2">
                <label>SET TEAM 2</label>
                <br />
                <input className="teamName" placeholder="Name of team 2" type="text"></input>
                <br />
                <br />
                <label>SET SCORE</label>
                <br/>
                <input className="specialWidth inputStyling" type="number" min="0" placeholder="0"></input>
                <div className="teamInformation">
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
                    <ul className="list">
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
