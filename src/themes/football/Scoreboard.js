import React, {useEffect, useState, useContext} from 'react'
import { Stage, Layer, Rect, Text, Circle, Image, Portal} from 'react-konva';
import {ScoreClockContext} from '../../contexts/ScoreClockContextProvider'
import {ScoreBoardContext} from '../../contexts/ScoreBoardContextProvider'
import { useSpring, animated } from 'react-spring';
import {socket} from '../../socket/socket';
import useImage from 'use-image';
import FieldImage from '../../images/football.png'
import {AnimatePresence, motion} from 'framer-motion'

const Scoreboard = (props) => {
  const {scoreData} = useContext(ScoreBoardContext)

  const [teamOneName, setTeamOneName] = useState(0)
  const [teamTwoName, setTeamTwoName] = useState(0)

  /* CLOCK */
  const [timeDifference, setTimeDifference] = useState(0);
  //const [startDate, setStartDate] = useState(0);
  //const [timeElapsed, setTimeElapsed] = useState(0);
  //const [isActive, setIsActive] = useState(false);
  //const [seconds, setSeconds] = useState("00:00");
  /* CLOCK */

  const [teamOneScore, setTeamOneScore] = useState(0)
  const [teamTwoScore, setTeamTwoScore] = useState(0)
  const [overtime, setOvertime] = useState(0)
  const [team1Yellow, setTeam1Yellow] = useState(0)
  const [team1Red, setTeam1Red] = useState(0)
  const [team2Yellow, setTeam2Yellow] = useState(0)
  const [team2Red, setTeam2Red] = useState(0)


  useEffect(()=>{
    setTeamOneName(scoreData.teamOneName)
    setTeamTwoName(scoreData.teamTwoName)

    setTeamOneScore(scoreData.teamOne)
    setTeamTwoScore(scoreData.teamTwo)
    setOvertime(scoreData.overtime)

    setTeam1Yellow(scoreData.team1Yellow)
    setTeam1Red(scoreData.team1Red)
    setTeam2Yellow(scoreData.team2Yellow)
    setTeam2Red(scoreData.team2Red)

  }, [scoreData])

  /*
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
  */
  
  /*
  useEffect(() => {
    setTimeout(() => {
      let localTimeAtRequest = timeNow();
      socket.emit('getTime', "scoreboard", localTimeAtRequest);
      socket.on('fetchTime', (data) => {
      let localTimeAtResponse = timeNow();
      let timeSinceRequest = localTimeAtResponse - localTimeAtRequest;
      console.log("Time from request until response: " + timeSinceRequest +"ms")
      setStates(data.actions)
    })   

    }, 200)
    
    return () => {
      socket.off('fetchTime')
  }
  }, [])
  */

  //console.log(props)
  //console.log(props.dude)

  function timeNow(){
    return Date.now() + timeDifference;
  }
  /*
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
        default:
          console.log("Error, check the payload action")
          console.log(data[item])
          console.log(data)
      }
    }
  }
  */
  /*
  useEffect(()=>{
    socket.on('timeInfo', (data)=>{
      setStates(data.actions)
    })
    return () => {
      socket.off('timeInfo') 
    }
  },)
  */

  /*
  useEffect(() => {
    let interval = null;

    if (isActive) {

      interval = setInterval(() => {
        let delta = timeNow() - startDate + timeElapsed;

        let minutes = Math.floor(delta / 60 / 1000);
        let seconds = Math.floor(delta / 1000) - minutes * 60;
        let counter = (minutes + '').padStart(2, '0') + ':' + (seconds + '').padStart(2, 0);
        setSeconds(counter);

      }, 500);
    } else if (isActive && seconds !== "00:00") {

      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);
  */

  const FrontGroundImage = () => {
    const [image] = useImage(FieldImage);   
    return (<Image image={image} x={235} y={33} width={825} height={555} opacity={0.6}/>);
  };

//team 1 Yellow Card
const T1YcardControlar = () =>{

let j = team1Yellow;
if(j !== 0){
let T1Ycard = [];

for(let i = 0; i<j; i++){
    T1Ycard[i] = (
        <Rect
        key= {i}
        x={240+(i*35)}
        y={65}
        width={20}
        height={40}
        cornerRadius = {20}
        fill="yellow"
        shadowBlur={10}
  />
  );
    }
return T1Ycard;
  }
}

// Team 1 Red card
const T1RcardControlar = () =>{

  let j = team1Red;
  if(j !== 0){
  let T1Rcard = [];
  
  for(let i = 0; i<j; i++){
      T1Rcard[i] = (
          <Rect
          key= {i}
          x={400+(i*35)}
          y={65}
          width={20}
          height={40}
          cornerRadius = {20}
          fill="red"
          shadowBlur={10}
    />
    );
      }
  return T1Rcard;
    }
  }

  // Team 2 Yellow
  const T2YcardControlar = () =>{

    let j = team2Yellow;
    if(j !== 0){
    let T2Ycard = [];
    
    for(let i = 0; i<j; i++){
        T2Ycard[i] = (
            <Rect
            key= {i}
            x={1020-(i*35)}
            y={65}
            width={20}
            height={40}
            cornerRadius = {20}
            fill="yellow"
            shadowBlur={10}
      />
      );
        }
    return T2Ycard;
      }
    }

  //Team 2 Red card
  const T2RcardControlar = () =>{

    let j = team2Red;
    if(j !== 0){
    let T2Rcard = [];
    
    for(let i = 0; i<j; i++){
        T2Rcard[i] = (
            <Rect
            key= {i}
            x={850-(i*35)}
            y={65}
            width={20}
            height={40}
            cornerRadius = {20}
            fill="red"
            shadowBlur={10}
      />
      );
        }
    return T2Rcard;
      }
    }
  
  const pageVariants = {
    initial: {
      opacity: 0,
      x: '-100%',
      scale: 0.8
    },
    in: {
      opacity: 1,
      x: 0,
      scale: 1
    },
    out: {
      opacity: 0,
      x: '100%',
      scale: 0.8
    }
  }

  const pageTransition = {
    // duration: 2
    // transition: 'linear'
    // type: 'spring',
    // stiffness: 50
    type: 'tween',
    // ease: 'easeInOut',
    ease: 'anticipate',
    duration: 2
  }

  return (
    <div>
     <AnimatePresence>  
     <motion.div initial="initial" animate="in" exit={{x:"+100%"}} variants={pageVariants} transition={pageTransition}>
      <Stage y={50} width={1280} height={720}>
        <Layer fill="#ddd">
         {/* <FrontGroundImage/> */}
          <Rect x={170} y={60} width={940} height={130}
            opacity={0.89} shadowOffset= {{ x: 1, y: 10 }} shadowOpacity= '0.5'        
            fill="#fff" align="center" shadowBlur={10} cornerRadius = {[70, 70, 70, 70]}
          />
          <Circle x={640} y={125} radius={79.5} fill="green" shadowBlur={20} opacity={0.3} shadowOpacity= '0.9'/>
          <Circle x={640} y={125} radius={65} fill="#454648" />


          {/*/////*/}
          <Text x={590} y={110} fontSize={40} wrap="char" fill="#fff"
            className='statistics-clock'
            text={props.seconds}
          />
          <Text x={634} y={155} fontSize={25} wrap="char" fill="#fff"
          text={overtime}
          />
          <Text x={240} y={129}  fontSize={40} wrap="char"
            text={teamOneName}
          />
          <Text x={790} y={129} fontSize={40} wrap="char"
            text={teamTwoName} 
          />
          <Text x={500} y={300} fontSize={160} wrap="char" fill="#fff"
            shadowOffset= {{ x: 1, y: 10 }} shadowOpacity= '0.5'        
            shadowBlur={10} text={teamTwoScore}
          />          
          <Text x={620} y={285} fontSize={160} wrap="char" fill="#fff"
            shadowOffset= {{ x: 1, y: 10 }} shadowOpacity= '0.5'        
            shadowBlur={10} text={':'}
          />
          <Text x={700} y={300} fontSize={160} wrap="char" fill="#fff"
            shadowOffset= {{ x: 1, y: 10 }} shadowOpacity= '0.5'        
            shadowBlur={10} text={teamTwoScore}
          />
          {T1YcardControlar()}  
          {T1RcardControlar()}
          {T2YcardControlar()}
          {T2RcardControlar()}        
        </Layer>
      </Stage>
      </motion.div>
      </AnimatePresence>
    </div>
  )
}

export default Scoreboard

