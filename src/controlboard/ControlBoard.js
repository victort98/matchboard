import React, { useState, useEffect} from 'react'
import '../themes/football/football.css'
import {socket} from '../socket/socket';


const ControlBoard = ({ match }) => {
  const $ = x => document.querySelector(x);
  const [screen, setScreen] = useState()
  const [room, setRoom] = useState("default")

  const { roomname } = match.params
  console.log(roomname)

  /* GAME DATA */
  const [teamOneName, setTeamOneName] = useState('Malmö FF')
  const [teamTwoName, setTeamTwoName] = useState('Djurgården')
  const [teamOneScore, setTeamOneScore] = useState(0)
  const [teamTwoScore, setTeamTwoScore] = useState(0)
  const [overtime, setOvertime] = useState(0)
  /* GAME DATA */
  
  /* CLOCK */
  const [timeDifference, setTimeDifference] = useState(0);
  
  const [startDate, setStartDate] = useState(0);
  const [timeElapsed, setTimeElapsed] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [seconds, setSeconds] = useState("00:00");
  /* CLOCK */

  /* STATISTICS */
  const [team1Yellow, setTeam1Yellow] = useState(0)
  const [team1Red, setTeam1Red] = useState(0)
  const [team1Corners, setTeam1Corners] = useState(0)
  const [team1Offsides, setTeam1Offsides] = useState(0)
  const [team1Shots, setTeam1Shots] = useState(0)
  const [team1Fouls, setTeam1Fouls] = useState(0)
  const [team1OnTarget, setTeam1OnTarget] = useState(0)
  
  const [team2Yellow, setTeam2Yellow] = useState(0)
  const [team2Red, setTeam2Red] = useState(0)
  const [team2Corners, setTeam2Corners] = useState(0)
  const [team2Offsides, setTeam2Offsides] = useState(0)
  const [team2Shots, setTeam2Shots] = useState(0)
  const [team2Fouls, setTeam2Fouls] = useState(0)
  const [team2OnTarget, setTeam2OnTarget] = useState(0)
  /* STATISTICS */

  const broadcastData = () => {
    
    // let gamedata = {room: room, timestamp : timeNow(),
    let gamedata = {room: roomname, timestamp : timeNow(), 
      actions:[{action: "SET_TEAM_ONE_NAME", payload: teamOneName},
      {action: "SET_TEAM_TWO_NAME", payload: teamTwoName},
      {action: "SET_TEAM_ONE_SCORE", payload: teamOneScore},
      {action: "SET_TEAM_TWO_SCORE", payload: teamTwoScore},
      {action: "SET_OVERTIME", payload: overtime},],
      origin: "broadcastData from controlboard"};

    socket.emit('timeInfo', gamedata)

    //let gamestatsdata = {room: room, timestamp : timeNow(),
    let gamestatsdata = {room: roomname, timestamp : timeNow(), 
      actions:[
        //Team1 stats
      {action: "SET_TEAM_ONE_YELLOW", payload: team1Yellow},
      {action: "SET_TEAM_ONE_RED", payload: team1Red},
      {action: "SET_TEAM_ONE_CORNERS", payload: team1Corners},
      {action: "SET_TEAM_ONE_OFFSIDES", payload: team1Offsides},
      {action: "SET_TEAM_ONE_SHOTS", payload: team1Shots},
      {action: "SET_TEAM_ONE_FOULS", payload: team1Fouls},
      {action: "SET_TEAM_ONE_TARGET", payload: team1OnTarget},
        //Team2 stats
      {action: "SET_TEAM_TWO_YELLOW", payload: team2Yellow},
      {action: "SET_TEAM_TWO_RED", payload: team2Red},
      {action: "SET_TEAM_TWO_CORNERS", payload: team2Corners},
      {action: "SET_TEAM_TWO_OFFSIDES", payload: team2Offsides},
      {action: "SET_TEAM_TWO_SHOTS", payload: team2Shots},
      {action: "SET_TEAM_TWO_FOULS", payload: team2Fouls},
      {action: "SET_TEAM_TWO_TARGET", payload: team2OnTarget},],
      origin: "broadcastData from controlboard"};

      socket.emit('timeInfo', gamestatsdata)

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
        /*
        console.log("Time since request: " + lat + 'ms at reponse')
        console.log("Timestamp from server: " + serverTimeStamp)
        console.log("Server time at request: " + serverTimeAtRequest)
        console.log("Server time is: " + diff + "ms compared to local")
        console.log("local time is: " + new Date)
        console.log("server time is: " + new Date(Date.now() + diff))
        */
      })
  },[])

  useEffect(()=>{
    //joining room
    socket.emit('join-room', room, "controlboard")
  }, [])

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
        {action: "SET_TEAM_TWO_SCORE", payload: teamTwoScore},
        {action: "SET_OVERTIME", payload: overtime},],
        origin: "getGameData from useffect"};

      socket.emit('fetchGameData', gamedata)
    })
    return function cleanup() {
      socket.off('getGameData')};
  },)

  useEffect(()=>{
    socket.on('getGameStats', (data, clientTimestamp, serverTimestamp)=>{
      /*
      console.log("request from: " + data)
      console.log("request made at: " + new Date(clientTimestamp) + " local time")
      console.log("passed from server at: " + new Date(serverTimestamp) + " local time")
      console.log("received at: " + new Date() + " local time")
      console.log("start date at: " + + new Date(startDate))
      */
      //TODO use timeGet() instead of Date.now()
      
      let gamestatsdata = {timestamp : timeNow(), 
        actions:[
          //Team names
        {action: "SET_TEAM_ONE_NAME", payload: teamOneName},
        {action: "SET_TEAM_TWO_NAME", payload: teamTwoName},
          //Team1 stats
        {action: "SET_TEAM_ONE_YELLOW", payload: team1Yellow},
        {action: "SET_TEAM_ONE_RED", payload: team1Red},
        {action: "SET_TEAM_ONE_CORNERS", payload: team1Corners},
        {action: "SET_TEAM_ONE_OFFSIDES", payload: team1Offsides},
        {action: "SET_TEAM_ONE_SHOTS", payload: team1Shots},
        {action: "SET_TEAM_ONE_FOULS", payload: team1Fouls},
        {action: "SET_TEAM_ONE_TARGET", payload: team1OnTarget},
          //Team2 stats
        {action: "SET_TEAM_TWO_YELLOW", payload: team2Yellow},
        {action: "SET_TEAM_TWO_RED", payload: team2Red},
        {action: "SET_TEAM_TWO_CORNERS", payload: team2Corners},
        {action: "SET_TEAM_TWO_OFFSIDES", payload: team2Offsides},
        {action: "SET_TEAM_TWO_SHOTS", payload: team2Shots},
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
      //socket.emit('timeInfo',{room: room, timestamp: timeNow(),
      socket.emit('timeInfo',{room: roomname, timestamp: timeNow(), 
        actions: [{action: "SET_START_DATE", payload: timeNow()}, {action: "SET_IS_ACTIVE", payload: true}]})
    }
  }

  function pauseClock() {
    if(isActive){
      let elapsed = timeNow() - startDate
      setIsActive(!isActive)
      setTimeElapsed(timeElapsed + elapsed)
      //socket.emit('timeInfo', {room: room, timestamp: timeNow(),
      socket.emit('timeInfo', {room: roomname, timestamp: timeNow(),
      actions: [{action: "SET_IS_ACTIVE", payload: false},
       {action: "SET_TIME_ELAPSED", payload: timeElapsed + elapsed}, {action: "SET_SECONDS", payload: seconds}]})
    }
  }

  function resetClock() {
    setIsActive(false);
    setTimeElapsed(0);
    setSeconds("00:00");
    //socket.emit('timeInfo', {room: room, timestamp: timeNow(),
    socket.emit('timeInfo', {room: roomname, timestamp: timeNow(),
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
    <div className="container-fluid">
      <div className="container-inputs">
      <div className="buttons">
        <button className="btnStyle start" onClick={()=> startClock()}>START</button>
        <button className="btnStyle stop" onClick={()=> pauseClock()}>STOP</button>
        <button className="btnStyle reset" onClick={()=>resetClock()}>RESET</button>
      </div>

      <div className="screenInfo">
        <div className="team1">
          <label>SET TEAM 1</label>
            <br />
            <input className="teamName" placeholder="Malmö FF" type="text"  onChange={e=>setTeamOneName(e.target.value)}/>
            <br />
            <br />
            <label>SET SCORE</label>
            <br/>
            <input className="inputStyling" type="number" min="0" 
              placeholder="0"
              onChange={e=>setTeamOneScore(e.target.value)}/>
        </div>
        <div className="time">
        <div className="clockComponent">
          <h1 className="clock"
            style={{fontVariantNumeric:'tabular-nums'}}>
              {seconds}
          </h1>
        </div>
        <br />
        </div>
        <div className="team2">
        <label>SET TEAM 2</label>
          <br />
          <input className="teamName" placeholder="Djurgården" type="text"  onChange={e=>setTeamTwoName(e.target.value)}/>
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
        <div className="stats-left">
          <div className="team1Stats">
            <ul className="yellowCornerShots">
                <li>
                  <label>YELLOW CARD</label>
                  <br />
                  <input className="inputStyling" type="number" min="0" placeholder="0"
                  onChange={e=>setTeam1Yellow(e.target.value)}/>
                  </li>
                  <li>
                  <label>CORNERS</label>
                  <br />
                  <input className="inputStyling" type="number" min="0" placeholder="0"
                  onChange={e=>setTeam1Corners(e.target.value)}/>
                  </li>
                  <li>
                  <label>SHOTS</label>
                  <br />
                  <input className="inputStyling" type="number" min="0" placeholder="0"
                  onChange={e=>setTeam1Shots(e.target.value)}/>
                </li>
            </ul>
            <ul className="redOffsideFouls">
                <li>
                  <label>RED CARD</label>
                  <br />
                  <input className="inputStyling" type="number" min="0" placeholder="0"
                  onChange={e=>setTeam1Red(e.target.value)}/>
                  </li>
                  <li>
                  <label>OFFSIDES</label>
                  <br />
                  <input className="inputStyling" type="number" min="0" placeholder="0"
                  onChange={e=>setTeam1Offsides(e.target.value)}/>
                  </li>
                  <li>
                  <label>FOULS</label>
                  <br />
                  <input className="inputStyling" type="number" min="0" placeholder="0"
                  onChange={e=>setTeam1Fouls(e.target.value)}/>
                </li>
            </ul>
          </div>
          <div className="onTarget1">
            <label>SHOTS ON TARGET</label>
            <br />
            <input className="specialWidth inputStyling" type="number" min="0" placeholder="0"
            onChange={e=>setTeam1OnTarget(e.target.value)}/>
          </div>
          
        </div>

        <div className="middleInfo">
        <div className="overtime">
            <input className="middleInputStyling" type="number" min="0" placeholder="0"
            onChange={e=>setOvertime(e.target.value)}></input>
          </div>
          <button className="extraTime" onClick={()=> broadcastData()}>SET EXTRA TIME</button>
          <br />
          <br />
          <div className="screen-selection">
            <label>SELECT SREEN TO CAST</label>
          <br />
            <select className="screen inputStyling" onChange={e=>setScreen(e.target.value)}>
              <option value="scoreboard">SCORE BOARD</option>
              <option value="statistics">STATISTICS</option>
              <option value="playerslist">PLAYERS LIST</option>
              <option value="fixtures">MATCH FIXTURES</option>
              <option value="pointtable">POINT TABLE</option>
            </select>
          </div>
          <br />
          <br />
          <button className="broadcast" onClick={()=> broadcastData()}>BROADCAST</button>
          <br />
          <br />
        </div>

        <div className="stats-right">
        <div className="team2Stats">
        <ul className="yellowCornerShots">
          <li>
            <label>YELLOW CARD</label>
            <br />
            <input className="inputStyling" type="number" min="0" placeholder="0"
            onChange={e=>setTeam2Yellow(e.target.value)}/>
          </li>
          <li>
            <label>CORNERS</label>
            <br />
            <input className="inputStyling" type="number" min="0" placeholder="0"
            onChange={e=>setTeam2Corners(e.target.value)}/>
          </li>
          <li>
            <label>SHOTS</label>
            <br />
            <input className="inputStyling" type="number" min="0" placeholder="0"
            onChange={e=>setTeam2Shots(e.target.value)}/>
          </li>
        </ul>
        <ul className="redOffsideFouls">
          <li>
            <label>RED CARD</label>
            <br />
            <input className="inputStyling" type="number" min="0" placeholder="0"
            onChange={e=>setTeam2Red(e.target.value)}/>
          </li>
          <li>
            <label>OFFSIDES</label>
            <br />
            <input className="inputStyling" type="number" min="0" placeholder="0"
            onChange={e=>setTeam2Offsides(e.target.value)}/>
          </li>
          <li>
            <label>FOULS</label>
            <br />
            <input className="inputStyling" type="number" min="0" placeholder="0"
            onChange={e=>setTeam2Fouls(e.target.value)}/>
          </li>
        </ul>
        </div>
        <div className="onTarget2">
          <label>SHOTS ON TARGET</label>
          <br />
          <input className="specialWidth inputStyling" type="number" min="0" placeholder="0"
          onChange={e=>setTeam2OnTarget(e.target.value)}/>
        </div>
      </div>
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

export default ControlBoard