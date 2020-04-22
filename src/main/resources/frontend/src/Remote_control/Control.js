import React from 'react';

function Control() {
    return(
        <div className="Control_container">
            <button className="start_clock">START CLOCK</button>
            <button className="stop_clock">STOP CLOCK</button>
            <button className="reset">RESET</button>
            <br />
            <div className="clock">90:00</div>
            <div className="team1">
                <input placeholder="Namn för lag 1"></input>
            </div>

            <div className="team2">
                <input placeholder="Namn för lag 2"></input>
            </div>

        </div>
    )
}

export default Control;