import React, {useContext, useState, useEffect} from 'react'
import ClockH from './ClockH'
import {ClockContextH} from '../../contexts/ClockContextProviderH'
import {socket} from '../../socket/socket';

import './hokey.css'
import { FormGroup, Label, Input} from 'reactstrap'
const Hokey = (props) => {
  const $ = x => document.querySelector(x);
  const {startTime, stopTime, resetTime} = useContext(ClockContextH)
  const [screen, setScreen] = useState()
  const [teamOneScore, setTeamOneScore] = useState(0)
  const [teamTwoScore, setTeamTwoScore] = useState(0)

  /* STATISTICS */
  const [team1Offsides, setTeam1Offsides] = useState(0)
  const [team1Fouls, setTeam1Fouls] = useState(0)
  const [team1OnTarget, setTeam1OnTarget] = useState(0)
  
  const [team2Offsides, setTeam2Offsides] = useState(0)
  const [team2Fouls, setTeam2Fouls] = useState(0)
  const [team2OnTarget, setTeam2OnTarget] = useState(0)
  /* STATISTICS */

  const [timerActive, setTimerActive] = useState(false)

  const sendData = () => {
    let info = {
      teamOne: teamOneScore,
      teamTwo: teamTwoScore,
      //TEAM 1
      team1Offsides: team1Offsides,
      team1Fouls: team1Fouls,
      team1OnTarget: team1OnTarget,
      //TEAM 2
      team2Offsides: team2Offsides,
      team2Fouls: team2Fouls,
      team2OnTarget: team2OnTarget,
      //timeLeft: timeLeft(),
      timerActive: timerActive
    }  
    socket.emit('scoreInfo', info)
  }

  const startClock = () => {
    socket.emit('timeInfo', timerActive)
    startTime()
    setTimerActive(true)
    $('.start').classList.add('start-active')
    $('.stop').classList.remove('stop-active')
  }

  const stopClock = () => {
    stopTime()
    setTimerActive(false)
    $('.start').classList.remove('start-active')
    $('.stop').classList.add('stop-active')
  }

  const resetClock = () => {
    resetTime()
    $('.start').classList.remove('start-active')
    $('.stop').classList.remove('stop-active')
  }


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
      <form>       
        <div>
        <button className="btnStyle start"onClick={()=> startClock()} >START</button>
        <button className="btnStyle stop" onClick={()=> stopClock()}>STOP</button>
        <button className="btnStyle reset"onClick={()=> resetClock()} >RESET</button> <ClockH/>     
        </div>
         
       <div>
          <Label className="textStyle own"for="exampleSelect">PERIOD</Label><br/>
          <Input className="btnStyle1 game" type="select" name="select" id="exampleSelect">
            <option>1 ST</option>
            <option>2 ND</option>
            <option>3 RD</option>
          </Input>
        </div>
        <div>
          <label className="textStyle tow ">SET TEAM 1</label>
          <label className="textStyle tow1 ">SET TEAM 2</label><br/>
          <input  className="teamName1" type="text" name=""/>
          <input className="resalt" type="numbere" name="0"
                placeholder="0"onChange={e=>setTeamOneScore(e.target.value)}/>
          <input  className="teamName2" type="text" name=""/>      
          <input className="resalt1" type="numbere" name="0" 
                placeholder="0" onChange={e=>setTeamTwoScore(e.target.value)}/>

          <br/>
        </div>
      <br/>
      <br/>     <br/>   <br/>
        <div>        
            <label className="textStyle t6 ">SHOTS ON TARGET</label>
          <label className="textStyle t4 ">OFFSIDES</label>
          <label className="textStyle t5 ">FACEOFFSWON</label>
          <label className="textStyle t10 ">SHOTS ON TARGET</label>
          <label className="textStyle t11 ">OFFSIDES</label>
          <label className="textStyle t12 ">FACEOFFSWON</label><br/>
          
          <input  className="Statistic col1" type="numbere" name="0" 
                placeholder="0" onChange={e=>setTeam1OnTarget(e.target.value)}/>
          <input  className="Statistic col3" type="numbere" name="0"
                placeholder="0" onChange={e=>setTeam1Offsides(e.target.value)}/>
          <input  className="Statistic col2" type="numbere" name="0"
                placeholder="0"onChange={e=>setTeam1Fouls(e.target.value)}/>

          <input  className="Statistic col4" type="numbere" name="0"
                   placeholder="0" onChange={e=>setTeam2OnTarget(e.target.value)}/>
          <input  className="Statistic col5" type="numbere" name="0"
                   placeholder="0" onChange={e=>setTeam2Offsides(e.target.value)}/>
          <input  className="Statistic col6" type="numbere" name="0"
                  placeholder="0"onChange={e=>setTeam2Fouls(e.target.value)}/><br/><br/>

          <Label className="textStyle t7"for="exampleSelect">PENALTY</Label>
          <Label className="textStyle t8"for="exampleSelect"> PLAYER</Label>
          <Label className="textStyle t9"for="exampleSelect">SELECT SREEN TO CAST</Label>
          <Label className="textStyle t13"for="exampleSelect">PENALTY</Label>
          <Label className="textStyle t14"for="exampleSelect"> PLAYER</Label>
          <br/>
          <Input className="Statistic col01" type="select" name="select" id="exampleSelect">
            <option>2 Min</option>
            <option>5 Min</option>
            <option>10 Min</option>
          </Input>
          <Input className="Statistic col02" type="select" name="select" id="exampleSelect">
              <option value="scoreboard">S BRD</option>
              <option value="statistics">STISCS</option>
              <option value="playerslist">LAY ST</option>
              <option value="pointtable">OINT BLE</option>
              <option value="leaguetable">GUE TA</option>
          </Input>
          <Input className="Statistic col03" type="select" name="select"  onChange={e=>setScreen(e.target.value)}>>
              <option value="scoreboardH">SCORE BOARD</option>
              <option value="statistics">STATISTICS</option>
              <option value="playerslist">PLAYERS LIST</option>
              <option value="pointtable">POINT TABLE</option>
              <option value="leaguetable">LEAGUE TABLE</option>
          </Input>
          <Input className="Statistic col04" type="select" name="select" id="exampleSelect">
            <option>2 Min</option>
            <option>5 Min</option>
            <option>10 Min</option>
          </Input>
          <Input className="Statistic col05" type="select" name="select" id="exampleSelect">
              <option value="scoreboard">kais</option>
              <option value="statistics">TIC</option>
              <option value="playerslist">PT</option>
              <option value="pointtable">OINE</option>
              <option value="leaguetable">EGU </option>
          </Input>
          <br/>          
           <button className="broadcast1"onClick={()=> sendData()}>BROADCAST</button>
        </div>
      </form>
    );
  }
  
export default Hokey
