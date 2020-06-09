import React, {useContext, useState, useEffect} from 'react'
import ClockH from './ClockH'
import {ClockContextH} from '../../contexts/ClockContextProviderH'
import {socket} from '../../socket/socket';

import './hokey.css'
import { FormGroup, Label, Input} from 'reactstrap'
const Hokey = (props) => {
  const $ = x => document.querySelector(x);
  const [screen, setScreen] = useState()

  /* GAME DATA */
  const [teamOneName, setTeamOneName] = useState(' ')
  const [teamTwoName, setTeamTwoName] = useState(' ')
  const [teamOneScore, setTeamOneScore] = useState(0)
  const [teamTwoScore, setTeamTwoScore] = useState(0)
  /* GAME DATA */
  
  /* CLOCK */
  const [timeDifference, setTimeDifference] = useState(0);
  
  const [startDate, setStartDate] = useState(0);
  const [timeElapsed, setTimeElapsed] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [seconds, setSeconds] = useState("00:00");
  /* CLOCK */

  /* STATISTICS */
  const [team1Offsides, setTeam1Offsides] = useState(0)
  const [team1Fouls, setTeam1Fouls] = useState(0)
  const [team1OnTarget, setTeam1OnTarget] = useState(0)
  
  const [team2Offsides, setTeam2Offsides] = useState(0)
  const [team2Fouls, setTeam2Fouls] = useState(0)
  const [team2OnTarget, setTeam2OnTarget] = useState(0)
  /* STATISTICS */

  const broadcastData = () => {
    
    let gamedata = {timestamp : timeNow(), 
      actions:[{action: "SET_TEAM_ONE_NAME", payload: teamOneName},
      {action: "SET_TEAM_TWO_NAME", payload: teamTwoName},
      {action: "SET_TEAM_ONE_SCORE", payload: teamOneScore},
      {action: "SET_TEAM_TWO_SCORE", payload: teamTwoScore}],
      origin: "broadcastData from controlboard"};

    socket.emit('timeInfo', gamedata)

    let gamestatsdata = {timestamp : timeNow(), 
      actions:[
        //Team1 stats
      {action: "SET_TEAM_ONE_OFFSIDES", payload: team1Offsides},
      {action: "SET_TEAM_ONE_FOULS", payload: team1Fouls},
      {action: "SET_TEAM_ONE_TARGET", payload: team1OnTarget},
        //Team2 stats
      {action: "SET_TEAM_TWO_OFFSIDES", payload: team2Offsides},
      {action: "SET_TEAM_TWO_FOULS", payload: team2Fouls},
      {action: "SET_TEAM_TWO_TARGET", payload: team2OnTarget},],
      origin: "broadcastData from controlboard"};

      socket.emit('timeInfo', gamestatsdata)

  }

  const sendData = () => {
    let scoreInfo = {
      teamOneName: teamOneName, 
      teamTwoName: teamTwoName, 
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
    }  
    socket.emit('scoreInfo', scoreInfo)
  }

  useEffect(()=>{
    //syncing time with server
    let localTimeAtRequest = Date.now()
    socket.emit('timesync', localTimeAtRequest)
    socket.on('timesync', (serverTimeStamp)=>{
        let localTimeAtResponse = Date.now()
        let lat = localTimeAtResponse - localTimeAtRequest;
        let serverTimeAtRequest = serverTimeStamp - lat;
        let diff = localTimeAtRequest - serverTimeAtRequest;
        setTimeDifference(diff)
        console.log("Time since request: " + lat + 'ms at reponse')
        console.log("Timestamp from server: " + serverTimeStamp)
        console.log("Server time at request: " + serverTimeAtRequest)
        console.log("Server time is: " + diff + "ms compared to local")
        console.log("local time is: " + new Date)
        console.log("server time is: " + new Date(Date.now() + diff))
      })
  },[])

  useEffect(()=>{
    socket.on('getTime', (data, clientTimestamp, serverTimestamp)=>{
      console.log("request from: " + data)
      console.log("request made at: " + new Date(clientTimestamp) + " local time")
      console.log("passed from server at: " + new Date(serverTimestamp) + " local time")
      console.log("received at: " + new Date() + " local time")
      console.log("start date at: " + + new Date(startDate))
      //TODO use timeGet() instead of Date.now()
      
      let timevariables = {timestamp : timeNow(), 
        actions: [{action: "SET_START_DATE", payload: startDate}, 
        {action: "SET_TIME_ELAPSED", payload: timeElapsed }, {action: "SET_SECONDS", payload: seconds},
        {action: "SET_IS_ACTIVE", payload: isActive},],
        origin: "getTime from useffect"}
      socket.emit('fetchTime', timevariables)
    })
    return function cleanup() {
      socket.off('getTime')};
  },)

  useEffect(()=>{
    socket.on('getGameData', (data, clientTimestamp, serverTimestamp)=>{
      console.log("request from: " + data)
      console.log("request made at: " + new Date(clientTimestamp) + " local time")
      console.log("passed from server at: " + new Date(serverTimestamp) + " local time")
      console.log("received at: " + new Date() + " local time")
      console.log("start date at: " + + new Date(startDate))
      //TODO use timeGet() instead of Date.now()
      
      let gamedata = {timestamp : timeNow(), 
        actions:[{action: "SET_TEAM_ONE_NAME", payload: teamOneName},
        {action: "SET_TEAM_TWO_NAME", payload: teamTwoName},
        {action: "SET_TEAM_ONE_SCORE", payload: teamOneScore},
        {action: "SET_TEAM_TWO_SCORE", payload: teamTwoScore}],
        origin: "getGameData from useffect"};

      socket.emit('fetchGameData', gamedata)
    })
    return function cleanup() {
      socket.off('getGameData')};
  },)

  useEffect(()=>{
    socket.on('getGameStats', (data, clientTimestamp, serverTimestamp)=>{
      console.log("request from: " + data)
      console.log("request made at: " + new Date(clientTimestamp) + " local time")
      console.log("passed from server at: " + new Date(serverTimestamp) + " local time")
      console.log("received at: " + new Date() + " local time")
      console.log("start date at: " + + new Date(startDate))
      //TODO use timeGet() instead of Date.now()
      
      let gamestatsdata = {timestamp : timeNow(), 
        actions:[
          //Team1 stats
        {action: "SET_TEAM_ONE_OFFSIDES", payload: team1Offsides},
        {action: "SET_TEAM_ONE_FOULS", payload: team1Fouls},
        {action: "SET_TEAM_ONE_TARGET", payload: team1OnTarget},
          //Team2 stats
        {action: "SET_TEAM_TWO_OFFSIDES", payload: team2Offsides},
        {action: "SET_TEAM_TWO_FOULS", payload: team2Fouls},
        {action: "SET_TEAM_TWO_TARGET", payload: team2OnTarget},],
        origin: "getGameStats from useffect"};
      socket.emit('fetchGameStats', gamestatsdata)
    })
    return function cleanup() {
      socket.off('getGameStats')};
  },)

  function timeNow(){
    return Date.now() + timeDifference;
  }

  function startClock() {
    if(!isActive){
      console.log("isActive == false")
      setStartDate(timeNow())
      setIsActive(!isActive)
      socket.emit('timeInfo',{timestamp: timeNow(), 
        actions: [{action: "SET_START_DATE", payload: timeNow()}, {action: "SET_IS_ACTIVE", payload: true}]})
    }
  }

  function stopClock() {
    if(isActive){
      let elapsed = timeNow() - startDate
      setIsActive(!isActive)
      setTimeElapsed(timeElapsed + elapsed)
      socket.emit('timeInfo', {timestamp: timeNow(),
      actions: [{action: "SET_IS_ACTIVE", payload: false},
       {action: "SET_TIME_ELAPSED", payload: timeElapsed + elapsed}, {action: "SET_SECONDS", payload: seconds}]})
    }
  }

  function resetClock() {
    setIsActive(false);
    setTimeElapsed(0);
    setSeconds("00:00");
    socket.emit('timeInfo', {timestamp: timeNow(),
    actions: [{action: "SET_IS_ACTIVE", payload: false}, {action: "SET_TIME_ELAPSED", payload: 0},
    {action: "SET_SECONDS", payload: "00:00"}]})
  }

  useEffect(()=>{
    if (screen === 'statistics') {
      socket.emit('board', 'statistics')
    } else if(screen === 'scoreboard'){
      socket.emit('board', 'scoreboard')
    } else if (screen === 'playerslist') {
      socket.emit('board', 'playerslist')
    } else if (screen === 'fixtures') {
      socket.emit('board', 'fixtures')
    }else if (screen === 'pointtable') {
      socket.emit('board', 'pointtable')
    }
  }, [screen])

  useEffect(() => {
    let interval = null;

    if (isActive) {

      interval = setInterval(() => {
        let delta = timeNow() - startDate + timeElapsed;

        let minutes = Math.floor(delta / 60 / 1000);
        let seconds = Math.floor(delta / 1000) - minutes * 60;
        let counter = (minutes + '').padStart(2, '0') + ':' + (seconds + '').padStart(2, 0);
        setSeconds(counter);

      }, 100);
    } else if (isActive && seconds !== "00:00") {

      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);
    return ( 
      <form>       
        <div>
        <button className="btnStyle start"onClick={()=> startClock()} >START</button>
        <button className="btnStyle stop" onClick={()=> stopClock()}>STOP</button>
        <button className="btnStyle reset"onClick={()=> resetClock()} >RESET</button> <ClockH/>     
        </div>
         
       <div>
          <Label className="textStyle own"for="exampleSelect">PERIOD</Label><br/>
          <Input className="btnStyle1 game" type="select" name="select" onChange={e=>setTeamTwoScore(e.target.value)}>
            <option>1 ST</option>
            <option>2 ND</option>
            <option>3 RD</option>
          </Input>
        </div>
        <div>
          <label className="textStyle tow " type="text" name="0"
                placeholder=""onChange={e=>setTeamOneName(e.target.value)}/>
          <label className="textStyle tow1 " type="text" name="0"
                placeholder=""onChange={e=>setTeamTwoName(e.target.value)}/><br/>
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
          <div>
          <Input className="Statistic col22" type="select" name="select" id="exampleSelect">
            <option>1</option>
            <option>2</option>
            <option>3</option>
          </Input>
          <Input className="Statistic col01" type="select" name="select" id="exampleSelect">
            <option>2 Min</option>
            <option>5 Min</option>
            <option>10 Min</option>
          </Input>
          <Input className="Statistic col02" type="select" name="select" id="exampleSelect">
              <option>S BRD</option>
              <option>STISCS</option>
              <option>LAY ST</option>
              <option>OINT BLE</option>
              <option>GUE TA</option>
          </Input>
          <Input className="Statistic col03" type="select" name="select"  onChange={e=>setScreen(e.target.value)}>>
              <option value="scoreboardH">SCORE BOARD</option>
              <option value="statistics">STATISTICS</option>
              <option value="playerslist">PLAYERS LIST</option>
              <option value="pointtable">POINT TABLE</option>
              <option value="leaguetable">LEAGUE TABLE</option>
          </Input>
          <Input className="Statistic col23" type="select" name="select" id="exampleSelect">
            <option>1</option>
            <option>2</option>
            <option>3</option>
          </Input>
          <Input className="Statistic col04" type="select" name="select" id="exampleSelect">
            <option>2 Min</option>
            <option>5 Min</option>
            <option>10 Min</option>
          </Input>
          <Input className="Statistic col05" type="select" name="select" id="exampleSelect">
              <option>kais</option>
              <option>TIC</option>
              <option>PT</option>
              <option>OINE</option>
              <option>EGU </option>
          </Input>
          </div>
          <br/>          
           <button className="broadcast1"onClick={()=> sendData()}>BROADCAST</button>
        </div>
      </form>
    );
  }
  
export default Hokey
