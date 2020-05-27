import React, {useContext, useState, useEffect} from 'react'
import "../themes/generalThemes.css"
import ReactDOM from "react-dom";

const AddPlayers = () => {

    const [teamName, setTeamName] = useState("");
    const [player1, setPlayer1] = useState("");
    const [player2, setPlayer2] = useState("");
    const [player3, setPlayer3] = useState("");
    const [player4, setPlayer4] = useState("");
    const [player5, setPlayer5] = useState("");
    const [player6, setPlayer6] = useState("");
    const [player7, setPlayer7] = useState("");
    const [player8, setPlayer8] = useState("");
    const [player9, setPlayer9] = useState("");
    const [player10, setPlayer10] = useState("");
    const [player11, setPlayer11] = useState("");
    const [player12, setPlayer12] = useState("");
    const [player13, setPlayer13] = useState("");
    const [player14, setPlayer14] = useState("");

        const submitPlayers = () => {
            let playerList = []
            playerList.push(player1)
            playerList.push(player2)
            playerList.push(player3)
            playerList.push(player4)
            playerList.push(player5)
            playerList.push(player6)
            playerList.push(player7)
            playerList.push(player8)
            playerList.push(player9)
            playerList.push(player10)
            playerList.push(player11)
            playerList.push(player12)
            playerList.push(player13)
            playerList.push(player14)
            console.log(teamName)
            console.log(playerList)
        }


    return(
        <div>
            <div className="information">
                <div className="inputFields">
                    <label>TEAM NAME</label>
                    <br />
                    <input className="teamNameInput" onChange={(e) => setTeamName(e.target.value)}></input>
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
                    <p>Player 1</p>
                    <input className="playerNameInput" onChange={(e) => setPlayer1(e.target.value)}></input>
                    <br />
                    <p>Player 2</p>
                    <input className="playerNameInput" onChange={(e) => setPlayer2(e.target.value)}></input>
                    <br />
                    <p>Player 3</p>
                    <input className="playerNameInput" onChange={(e) => setPlayer3(e.target.value)}></input>
                    <br />
                    <p>Player 4</p>
                    <input className="playerNameInput" onChange={(e) => setPlayer4(e.target.value)}></input>
                    <br />
                    <p>Player 5</p>
                    <input className="playerNameInput" onChange={(e) => setPlayer5(e.target.value)}></input>
                    <br />
                    <p>Player 6</p>
                    <input className="playerNameInput" onChange={(e) => setPlayer6(e.target.value)}></input>
                    <br />
                    <p>Player 7</p>
                    <input className="playerNameInput" onChange={(e) => setPlayer7(e.target.value)}></input>
                    </div>
                    <div className="playerNames2">
                    <p>Player 8</p>
                    <input className="playerNameInput" onChange={(e) => setPlayer8(e.target.value)}></input>
                    <br />
                    <p>Player 9</p>
                    <input className="playerNameInput" onChange={(e) => setPlayer9(e.target.value)}></input>
                    <br />
                    <p>Player 10</p>
                    <input className="playerNameInput" onChange={(e) => setPlayer10(e.target.value)}></input>
                    <br />
                    <p>Player 11</p>
                    <input className="playerNameInput" onChange={(e) => setPlayer11(e.target.value)}></input>
                    <br />
                    <p>Player 12</p>
                    <input className="playerNameInput" onChange={(e) => setPlayer12(e.target.value)}></input>
                    <br />
                    <p>Player 13</p>
                    <input className="playerNameInput" onChange={(e) => setPlayer13(e.target.value)}></input>
                    <br />
                    <p>Player 14</p>
                    <input className="playerNameInput" onChange={(e) => setPlayer14(e.target.value)}></input>

                    </div>
                </div>
                <div className="submitButton">
                <button className="submit" onClick={submitPlayers}>Submit</button>
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