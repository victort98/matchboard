import React, {useContext, useState, useEffect} from 'react'
import "../themes/generalThemes.css"
import ReactDOM from "react-dom";

const AddPlayers = () => {

    const [inputValue, setInputValue] = useState("");

    const createInputsRow1 = (num) => {
        const playerList = []
        let player = 1;
        let index = 0;
        for(let i = 1; i <= num; i++){
            playerList.push(<p>player {player++}</p>)
            playerList.push(<input key={index++} className="playerNameInput" onChange={(e) => setInputValue(e.target.value)}></input>)
          }
          return (
              playerList
          );
        }

        const createInputsRow2 = (num) => {
            const playerList = []
            let player = 8;
            let index = 7;
            for(let i = 1; i <= num; i++){
                playerList.push(<p>player {player++}</p>)
                playerList.push(<input key={index++} className="playerNameInput"></input>)
              }
              return (
                  playerList
              );
            }

    return(
        <div>
            <div className="information">
                <div className="inputFields">
                    <label>TEAM NAME</label>
                    <br />
                    <input className="teamNameInput"></input>
                </div>
                <div className="playerInformation">
                    <div className="buttons">
                    <button className="addPlayers buttonDesign">ADD PLAYERS</button>
                    <br />
                    <button className="showPlayers buttonDesign">SHOW PLAYERS</button>
                    <br/>
                    <button className="help buttonDesign">HELP</button>
                    </div>
                    <div className="playerNames1">
                    {createInputsRow1(7)}
                    </div>
                    <div className="playerNames2">
                    {createInputsRow2(7)}
                    </div>
                </div>
                <div className="submitButton">
                <button className="submit">Submit</button>
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

export default AddPlayers