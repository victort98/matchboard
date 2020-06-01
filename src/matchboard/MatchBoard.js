import React, {useEffect, useState} from 'react'
import Scoreboard from '../themes/football/Scoreboard2'
import Statistics from '../themes/football/Statistics2'
import Playerslist from '../themes/football/Playerslist2'
import Fixtures from '../themes/football/Fixtures'
import PointTable from '../themes/football/PointTable'
import FieldImage from '../images/football.png'
import {socket} from '../socket/socket'
import {AnimatePresence} from "framer-motion"

const MatchBoard = () => {
  const [screen, setScreen] = useState('')

    /* CLOCK */
    const [timeDifference, setTimeDifference] = useState(0);
    const [startDate, setStartDate] = useState(0);
    const [timeElapsed, setTimeElapsed] = useState(0);
    const [isActive, setIsActive] = useState(false);
    const [seconds, setSeconds] = useState("00:00");
    /* CLOCK */

    /* GAME DATA */
    const [teamOneName, setTeamOneName] = useState('')
    const [teamTwoName, setTeamTwoName] = useState('')
    const [teamOneScore, setTeamOneScore] = useState(0)
    const [teamTwoScore, setTeamTwoScore] = useState(0)
    const [overtime, setOvertime] = useState(0)
    /* GAME DATA */

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
    
  //timesync
  useEffect(()=>{
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
  //getting time
  useEffect(() => {
    setTimeout(() => {
      let localTimeAtRequest = timeNow();
      socket.emit('getData', "scoreboard", "time", localTimeAtRequest);
      socket.on('fetchTime', (data) => {
        let localTimeAtResponse = timeNow();
        let timeSinceRequest = localTimeAtResponse - localTimeAtRequest;
        console.log("Time from request until response: " + timeSinceRequest +"ms")
        console.log(data.actions)
        setStates(data.actions)
      })   
    }, 100)
    return () => {
      socket.off('fetchTime')
  }
  }, [])
  //getting game data
  useEffect(() => {
    setTimeout(() => {
      let localTimeAtRequest = timeNow();
      //socket.on('getData', (origin, datatype, clientTimestamp)
      socket.emit('getData', "scoreboard", "gamedata", localTimeAtRequest);
      //socket.emit('getTime', "scoreboard", localTimeAtRequest);
      socket.on('fetchGameData', (data) => {
        let localTimeAtResponse = timeNow();
        let timeSinceRequest = localTimeAtResponse - localTimeAtRequest;
        console.log("Time from request until response: " + timeSinceRequest +"ms")
        console.log(data.actions)
        setStates(data.actions)
      })   
    }, 100)
    return () => {
      socket.off('fetchGameData')
  }
  }, [])

    //getting game stats
    useEffect(() => {
      setTimeout(() => {
        let localTimeAtRequest = timeNow();
        socket.emit('getData', "scoreboard", "gamestats", localTimeAtRequest);
        socket.on('fetchGameStats', (data) => {
          let localTimeAtResponse = timeNow();
          let timeSinceRequest = localTimeAtResponse - localTimeAtRequest;
          console.log("Time from request until response: " + timeSinceRequest +"ms")
          console.log(data.actions)
          setStates(data.actions)
        })   
      }, 100)
      return () => {
        socket.off('fetchGameStats')
    }
    }, [])

  useEffect(()=>{
    socket.on('timeInfo', (data)=>{
      setStates(data.actions)
    })
    return () => {
      socket.off('timeInfo') 
    }
  },)

  useEffect(()=>{
    socket.on('board', (data)=>{
      setScreen(data)
    })     
    return;
  },[screen])

  useEffect(()=>{
    console.log("seconds updated")
    console.log("seconds at: " + seconds)
  }, [seconds])

  useEffect(()=>{
    console.log("startDate updated")
    console.log("startDate at: " + startDate)
  }, [startDate])

  useEffect(() => {
    let interval = null;

    if (isActive) {

      interval = setInterval(() => {
        let delta = timeNow() - startDate + timeElapsed;

        let minutes = Math.floor(delta / 60 / 1000);
        let seconds = Math.floor(delta / 1000) - minutes * 60;
        let counter = (minutes + '').padStart(2, '0') + ':' + (seconds + '').padStart(2, 0);
        setSeconds(counter);
        console.log("seconds updated in useEffect loop")

      }, 100);
    } else if (isActive && seconds !== "00:00") {

      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);

  function timeNow(){
    return Date.now() + timeDifference;
  }

  function setStates(data){

    for (let item in data) {
      
      switch(data[item].action) {
        case "SET_START_DATE":
          console.log("setting start date")
          console.log(data[item].payload)
          setStartDate(data[item].payload)
          break;
        case "SET_IS_ACTIVE":
          console.log("setting active")
          console.log(data[item].payload)
          setIsActive(data[item].payload)
          break;
        case "SET_TIME_ELAPSED":
          console.log("setting time elapsed")
          console.log(data[item].payload)
          setTimeElapsed(data[item].payload)
          break;
        case "SET_SECONDS":
          console.log("setting seconds")
          console.log(data[item].payload)
          setSeconds(data[item].payload)
          break;
        case "SET_TEAM_ONE_NAME":
          console.log("setting team-one name")
          console.log(data[item].payload)
          setTeamOneName(data[item].payload)
          break;
        case "SET_TEAM_TWO_NAME":
          console.log("setting team-two name")
          console.log(data[item].payload)
          setTeamTwoName(data[item].payload)
          break;
        case "SET_TEAM_ONE_SCORE":
          console.log("setting team-one score")
          console.log(data[item].payload)
          setTeamOneScore(data[item].payload)
          break;
        case "SET_TEAM_TWO_SCORE":
          console.log("setting team-one score")
          console.log(data[item].payload)
          setTeamTwoScore(data[item].payload)
          break;
        case "SET_OVERTIME":
          console.log("setting overtime")
          console.log(data[item].payload)
          setOvertime(data[item].payload)
          break;
         //Team one
        case "SET_TEAM_ONE_YELLOW":
          console.log("setting team one yellow")
          console.log(data[item].payload)
          setTeam1Yellow(data[item].payload)
          break;
        case "SET_TEAM_ONE_RED":
          console.log("setting team one red")
          console.log(data[item].payload)
          setTeam1Red(data[item].payload)
          break;
        case "SET_TEAM_ONE_CORNERS":
          console.log("setting team one corners")
          console.log(data[item].payload)
          setTeam1Corners(data[item].payload)
          break;
        case "SET_TEAM_ONE_OFFSIDES":
          console.log("setting team one offsides")
          console.log(data[item].payload)
          setTeam1Offsides(data[item].payload)
          break;
        case "SET_TEAM_ONE_SHOTS":
          console.log("setting team one shots")
          console.log(data[item].payload)
          setTeam1Shots(data[item].payload)
          break;
        case "SET_TEAM_ONE_FOULS":
          console.log("setting team one fouls")
          console.log(data[item].payload)
          setTeam1Fouls(data[item].payload)
          break;
        case "SET_TEAM_ONE_TARGET":
          console.log("setting team one target")
          console.log(data[item].payload)
          setTeam1OnTarget(data[item].payload)
          break;
        //Team two
        case "SET_TEAM_TWO_YELLOW":
          console.log("setting team two yellow")
          console.log(data[item].payload)
          setTeam2Yellow(data[item].payload)
          break;
        case "SET_TEAM_TWO_RED":
          console.log("setting team two red")
          console.log(data[item].payload)
          setTeam2Red(data[item].payload)
          break;
        case "SET_TEAM_TWO_CORNERS":
          console.log("setting team two corners")
          console.log(data[item].payload)
          setTeam2Corners(data[item].payload)
          break;
        case "SET_TEAM_TWO_OFFSIDES":
          console.log("setting team two offsides")
          console.log(data[item].payload)
          setTeam2Offsides(data[item].payload)
          break;
        case "SET_TEAM_TWO_SHOTS":
          console.log("setting team two shots")
          console.log(data[item].payload)
          setTeam2Shots(data[item].payload)
          break;
        case "SET_TEAM_TWO_FOULS":
          console.log("setting team two fouls")
          console.log(data[item].payload)
          setTeam2Fouls(data[item].payload)
          break;
        case "SET_TEAM_TWO_TARGET":
          console.log("setting team two on target")
          console.log(data[item].payload)
          setTeam2OnTarget(data[item].payload)
          break;
        
        /*
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
         */
        default:
          console.log("Error, check the payload action")
          console.log(data[item])
          console.log(data)
      }
    }
  }

  

  return (
    <div style={{position: 'relative', background:'green', zIndex:-1, height:'100vh', display: 'flex', justifyContent: 'center'}}>
      <svg className="background" viewBox="0 0 1884.241 1080.446" style={{zIndex:0, height:'100vh'}}>
        <path fill="rgba(0, 179, 0, 0.99)" stroke="rgba(0, 61, 0, 1)" strokeWidth="100px" strokeLinejoin="miter" strokeLinecap="butt" 
          strokeMiterlimit="4" shapeRendering="auto" id="Path_4" 
          d="M 418.5040283203125 -2.817545237121521e-07 L 1465.7373046875 -2.817545237121521e-07 C 1696.870727539063 
            -2.817545237121521e-07 1884.241333007813 192.5970764160156 1884.241333007813 430.1777038574219 
            L 1884.241333007813 650.2685546875 C 1884.241333007813 887.84912109375 1696.870727539063 1080.4462890625 
            1465.7373046875 1080.4462890625 L 418.5040283203125 1080.4462890625 C 187.3706207275391 1080.4462890625 
            7.441341836056381e-07 887.84912109375 7.441341836056381e-07 650.2685546875 L 7.441341836056381e-07 
            430.1777038574219 C 7.441341836056381e-07 192.5970764160156 187.3706207275391 -2.817545237121521e-07 
            418.5040283203125 -2.817545237121521e-07 Z">
        </path>      
      </svg>
      <img src={FieldImage} alt="fieldimage" style={{ position: 'absolute', opacity:'0.6', top: '5%', height: '90vh'}} />
      <AnimatePresence>
      <div key={screen} style={{overflowY: 'hidden', position: 'absolute', top: '14vh'}}>
        {(screen==='statistics')?
        (<Statistics key="statistics"/>):
        (screen==='scoreboard')?
        (<Scoreboard key="scoreboard"/>):
        (screen==='playerslist')?
        (<Playerslist key="playerslist"/>):
        (screen==='fixtures')?
        (<Fixtures key="fixtures"/>):
        (screen==='pointtable')?
        (<PointTable key="pointtable"/>):
        (<Scoreboard
          timeDifference={timeDifference}
          seconds={seconds}
          />)
        }
      </div>
      </AnimatePresence>

              {/*startDate={startDate}
          timeElapsed={timeElapsed}
        isActive={isActive} */}
      {/* const [timeDifference, setTimeDifference] = useState(0);
          const [startDate, setStartDate] = useState(0);
          const [timeElapsed, setTimeElapsed] = useState(0);
          const [isActive, setIsActive] = useState(false);
          const [seconds, setSeconds] = useState("00:00");*/}
    </div>
  )
}

export default MatchBoard
