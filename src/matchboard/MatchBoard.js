import React, {useEffect, useState} from 'react'
import Scoreboard from '../themes/football/Scoreboard'
import Statistics from '../themes/football/Statistics'
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

  //let dude = 1

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

  useEffect(() => {
    setTimeout(() => {
      let localTimeAtRequest = timeNow();
      socket.emit('getTime', "scoreboard", localTimeAtRequest);
      socket.on('fetchTime', (data) => {
      let localTimeAtResponse = timeNow();
      let timeSinceRequest = localTimeAtResponse - localTimeAtRequest;
      console.log("Time from request until response: " + timeSinceRequest +"ms")
      console.log(data.actions)
      setStates(data.actions)
    })   

    }, 200)
    
    return () => {
      socket.off('fetchTime')
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

      }, 500);
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
        <path fill="rgba(0, 179, 0, 0.99)" stroke="rgba(0, 61, 0, 1)" stroke-width="100px" stroke-linejoin="miter" stroke-linecap="butt" 
          stroke-miterlimit="4" shape-rendering="auto" id="Path_4" 
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
