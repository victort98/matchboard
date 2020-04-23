import React from 'react';

function Control() {
    return(
        <div>
            <div className="clockButtons">
                <button className="start">START CLOCK</button>
                <button className="stop">STOP CLOCK</button>
                <button className="reset">RESET</button>
            </div>
        <div className="controlContainer">
            <div className="team1">
                <p>SET TEAM 1</p>
                <input className="teamName" placeholder="Name of team 1" type="text"></input>
                <br />
                <p>SET SCORE</p>
                <input className="team1Score" type="number" min="0"></input>
                <div className="team1Information">
                <p>YELLOW CARD</p><p>RED CARD</p>
                <input type="number"></input>
                <input type="number"></input>
                <p>CORNERS</p><p>OFFSIDES</p>
                <input type="number"></input>
                <input type="number"></input>
                <p>SHOTS</p><p>FOULS</p>
                <input type="number"></input>
                <input type="number"></input>
                <p>SHOTS ON TARGET</p>
                <input type="number"></input>
                </div>
            </div>



            <div className="middleInformation">
                <div className="clock">90:00</div>
                <br />
                <input type="number"></input>
                <input type="number"></input>
                <br />
                <button>SET EXTRA TIME</button>
                <p>SELECT SREEN TO CAST</p>
                <input placeholder="SCOREBOARD" type="text"></input>
                <br />
                <button>BROADCAST</button>
            </div>

            
            <div className="team2">
            <p>SET TEAM 1</p>
                <input className="teamName" placeholder="Name of team 2" type="text"></input>
                <br />
                <p>SET SCORE</p>
                <input className="team2Score" type="number" min="0"></input>
                <div className="team2Information">
                <p>YELLOW CARD</p><p>RED CARD</p>
                <input type="number"></input>
                <input type="number"></input>
                <p>CORNERS</p><p>OFFSIDES</p>
                <input type="number"></input>
                <input type="number"></input>
                <p>SHOTS</p><p>FOULS</p>
                <input type="number"></input>
                <input type="number"></input>
                <p>SHOTS ON TARGET</p>
                <input type="number"></input>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Control;