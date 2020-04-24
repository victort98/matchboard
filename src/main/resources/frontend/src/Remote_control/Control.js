import React from 'react';

function Control() {
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
                <label>SET SCORE</label>
                <br/>
                <input className="teamScore" type="number" min="0" placeholder="0"></input>
                <div className="team1Information">
                <p>YELLOW CARD</p>
                <p>RED CARD</p>
                <input className="inputStyling" type="number" min="0" placeholder="0"></input>
                <input className="inputStyling" type="number" min="0" placeholder="0"></input>
                <p>CORNERS</p><p>OFFSIDES</p>
                <input className="inputStyling" type="number" min="0" placeholder="0"></input>
                <input className="inputStyling" type="number" min="0" placeholder="0"></input>
                <p>SHOTS</p><p>FOULS</p>
                <input className="inputStyling" type="number" min="0" placeholder="0"></input>
                <input className="inputStyling" type="number" min="0" placeholder="0"></input>
                <p>SHOTS ON TARGET</p>
                <input className="inputStyling" type="number" min="0" placeholder="0"></input>
                </div>
            </div>

            <div className="middleInformation">
                <div className="clock">90:00</div>
                <br />
                <div className="overtime">
                <input className="middleInputStyling" type="number" min="0" placeholder="0"></input>
                <input className="middleInputStyling" type="number" min="0" placeholder="0"></input>
                </div>
                <br />
                <button>SET EXTRA TIME</button>
                <p>SELECT SREEN TO CAST</p>
                <input placeholder="SCOREBOARD" type="text"></input>
                <br />
                <button>BROADCAST</button>
            </div>

            <div className="team2">
                <label>SET TEAM 1</label>
                <br />
                    <input className="teamName" placeholder="Name of team 2" type="text"></input>
                    <br />
                    <p>SET SCORE</p>
                    <input className="teamScore" type="number" min="0" placeholder="0"></input>
                <div className="team2Information">
                    <p>YELLOW CARD</p><p>RED CARD</p>
                    <input className="inputStyling" type="number" min="0" placeholder="0"></input>
                    <input className="inputStyling" type="number" min="0" placeholder="0"></input>
                    <p>CORNERS</p><p>OFFSIDES</p>
                    <input className="inputStyling" type="number" min="0" placeholder="0"></input>
                    <input className="inputStyling" type="number" min="0" placeholder="0"></input>
                    <p>SHOTS</p><p>FOULS</p>
                    <input className="inputStyling" type="number" min="0" placeholder="0"></input>
                    <input className="inputStyling" type="number" min="0" placeholder="0"></input>
                    <p>SHOTS ON TARGET</p>
                    <input className="inputStyling" type="number" min="0" placeholder="0"></input>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Control;