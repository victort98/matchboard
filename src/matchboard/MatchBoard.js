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


  useEffect(() => {
    let interval = null;

    if (isActive) {

      interval = setInterval(() => {
        let delta = timeNow() - startDate + timeElapsed;

        let minutes = Math.floor(delta / 60 / 1000);
        let seconds = Math.floor(delta / 1000) - minutes * 60;
        let counter = (minutes + '').padStart(2, '0') + ':' + (seconds + '').padStart(2, 0);
        setSeconds(counter);
        //console.log("seconds updated in useEffect loop")

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
          setStartDate(data[item].payload)
          break;
        case "SET_IS_ACTIVE":
          setIsActive(data[item].payload)
          break;
        case "SET_TIME_ELAPSED":
          setTimeElapsed(data[item].payload)
          break;
        case "SET_SECONDS":
          setSeconds(data[item].payload)
          break;
        case "SET_TEAM_ONE_NAME":
          setTeamOneName(data[item].payload)
          break;
        case "SET_TEAM_TWO_NAME":
          setTeamTwoName(data[item].payload)
          break;
        case "SET_TEAM_ONE_SCORE":
          setTeamOneScore(data[item].payload)
          break;
        case "SET_TEAM_TWO_SCORE":
          setTeamTwoScore(data[item].payload)
          break;
        case "SET_OVERTIME":
          setOvertime(data[item].payload)
          break;
        case "SET_TEAM_ONE_YELLOW":
          setTeam1Yellow(data[item].payload)
          break;
        case "SET_TEAM_ONE_RED":
          setTeam1Red(data[item].payload)
          break;
        case "SET_TEAM_ONE_CORNERS":
          setTeam1Corners(data[item].payload)
          break;
        case "SET_TEAM_ONE_OFFSIDES":
          setTeam1Offsides(data[item].payload)
          break;
        case "SET_TEAM_ONE_SHOTS":
          setTeam1Shots(data[item].payload)
          break;
        case "SET_TEAM_ONE_FOULS":
          setTeam1Fouls(data[item].payload)
          break;
        case "SET_TEAM_ONE_TARGET":
          setTeam1OnTarget(data[item].payload)
          break;
        case "SET_TEAM_TWO_YELLOW":
          setTeam2Yellow(data[item].payload)
          break;
        case "SET_TEAM_TWO_RED":
          setTeam2Red(data[item].payload)
          break;
        case "SET_TEAM_TWO_CORNERS":
          setTeam2Corners(data[item].payload)
          break;
        case "SET_TEAM_TWO_OFFSIDES":
          setTeam2Offsides(data[item].payload)
          break;
        case "SET_TEAM_TWO_SHOTS":
          setTeam2Shots(data[item].payload)
          break;
        case "SET_TEAM_TWO_FOULS":
          setTeam2Fouls(data[item].payload)
          break;
        case "SET_TEAM_TWO_TARGET":
          setTeam2OnTarget(data[item].payload)
          break;
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
        (<Statistics key="statistics"
          seconds={seconds}
          
          />):
        (screen==='scoreboard')?
        (<Scoreboard key="scoreboard"
          timeDifference={timeDifference}
          seconds={seconds}
          teamOneScore={teamOneScore}
          teamTwoScore={teamTwoScore}/>):
        (screen==='playerslist')?
        (<Playerslist key="playerslist"/>):
        (screen==='fixtures')?
        (<Fixtures key="fixtures"/>):
        (screen==='pointtable')?
        (<PointTable key="pointtable"/>):
        (<Scoreboard
          timeDifference={timeDifference}
          seconds={seconds}
          teamOneScore={teamOneScore}
          teamTwoScore={teamTwoScore}
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
