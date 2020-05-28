import React, {useEffect, useState, useContext} from 'react'
import { Stage, Layer, Rect, Text, Circle, Image} from 'react-konva';
import {ScoreClockContext} from '../../contexts/ScoreClockContextProvider'
import {ScoreBoardContext} from '../../contexts/ScoreBoardContextProvider'
import { useSpring, animated } from 'react-spring';
import {socket} from '../../socket/socket';
import useImage from 'use-image';
import FieldImage from '../../images/football.png'
import {AnimatePresence, motion} from 'framer-motion'

const Scoreboard = () => {
  const {timeFormatted, startTime, stopTime, resetTime} = useContext(ScoreClockContext)
  const {scoreData} = useContext(ScoreBoardContext)

  const [time, setTime] = useState(timeFormatted())
  const [teamOneName, setTeamOneName] = useState(0)
  const [teamTwoName, setTeamTwoName] = useState(0)

  const [teamOneScore, setTeamOneScore] = useState(0)
  const [teamTwoScore, setTeamTwoScore] = useState(0)
  const [overtime, setOvertime] = useState(0)
  const [team1Yellow, setTeam1Yellow] = useState(0)
  const [team1Red, setTeam1Red] = useState(0)
  const [team2Yellow, setTeam2Yellow] = useState(0)
  const [team2Red, setTeam2Red] = useState(0)


  const [timerActive, setTimerActive] = useState()

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

  useEffect(()=>{
    socket.on('timeInfo', (data)=>{
      setTimerActive(data)
    })   
  },[])

  useEffect(()=>{
    let timeStarted;
    if (timerActive === 'start') {
      startTime()
      timeStarted = setInterval(() => {
        setTime(timeFormatted())
      }, 300);   
    } else if(timerActive === 'stop'){
      stopTime()
      clearInterval(timeStarted)
    } else if(timerActive === 'reset'){
      resetTime()
    }
  }, [timerActive])

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
          <Text x={590} y={110} fontSize={40} wrap="char" fill="#fff"
            className='statistics-clock'
            text={time}
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
            shadowBlur={10} text={teamOneScore}
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

