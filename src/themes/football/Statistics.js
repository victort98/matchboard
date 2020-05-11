import React, {useEffect, useState, useContext} from 'react'
import { Stage, Layer, Rect, Text, Circle, Image} from 'react-konva';
import {ScoreClockContext} from '../../contexts/ScoreClockContextProvider'
import {ScoreBoardContext} from '../../contexts/ScoreBoardContextProvider'
import { useSpring, animated } from 'react-spring';
import {socket} from '../../socket/socket';
import useImage from 'use-image';
import FieldImage from '../../images/football.png'

const Statistics = () => {
  const {timeFormatted, startTime, stopTime, resetTime} = useContext(ScoreClockContext)
  const {scoreData} = useContext(ScoreBoardContext)

  const [time, setTime] = useState(timeFormatted())

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

  const [teamOneScore, setTeamOneScore] = useState(0)
  const [teamTwoScore, setTeamTwoScore] = useState(0)
  const [timerActive, setTimerActive] = useState()

  useEffect(()=>{
    setTeamOneScore(scoreData.teamOne)
    setTeamTwoScore(scoreData.teamTwo)
    setTeam1Yellow(scoreData.team1Yellow)
    setTeam1Red(scoreData.team1Red)
    setTeam1Corners(scoreData.team1Corners)
    setTeam1Offsides(scoreData.team1Offsides)
    setTeam1Shots(scoreData.team1Shots)
    setTeam1Fouls(scoreData.team1Fouls)
    setTeam1OnTarget(scoreData.team1OnTarget)
    setTeam2Yellow(scoreData.team2Yellow)
    setTeam2Red(scoreData.team2Red)
    setTeam2Corners(scoreData.team2Corners)
    setTeam2Offsides(scoreData.team2Offsides)
    setTeam2Shots(scoreData.team2Shots)
    setTeam2Fouls(scoreData.team2Fouls)
    setTeam2OnTarget(scoreData.team2OnTarget)
  }, [scoreData, team1OnTarget])

  useEffect(()=>{
    socket.on('timeInfo', (data)=>{
      setTimerActive(data)
    })   
  },[])

  useEffect(()=>{
    if (timerActive === true) {
      startTime()
      setInterval(() => {
        setTime(timeFormatted())
      }, 1000);   
    }
  }, [timerActive, startTime, timeFormatted])

  const FrontGroundImage = () => {
    const [image] = useImage(FieldImage);   
    return (<Image image={image} x={185} y={40} width={925} height={640} opacity={0.6}/>);
  };

  const fadeTransition = useSpring({
    from: {opacity:0, marginLeft:-100, marginRight: 100},
    to: {opacity: 1, marginLeft: 0, marginRight: 0}
  })

  const ListBar= () =>{
    let bars = [];
    for (let i=0; i<3; i++) {
      bars[i] = (
        <Rect key={i} x={220} y={309+(i*75)} width={850} height={41} fill="#ced9ebe0"
        />
      );      
    }   
    return bars
  }

  const statisticsList = ['SHOTS', 'SHOTS ON TARGET', 'CORNERS', 'FOULS COMMITTED', 'OFFSIDES', 'YELLOW CARD', 'RED CARD']

  const statisticsTeamOne = [team1Shots, team1OnTarget, team1Corners, team1Fouls, team1Offsides, team1Yellow, team1Red]

  const statisticsTeamTwo = [team2Shots, team2OnTarget, team2Corners, team2Fouls, team2Offsides, team2Yellow, team2Red]

  const matchInformation = (xCoord, yCoord, lineDist, textArray) =>{
    let list = [];
    for (let i=0; i<7; i++) {
      list[i] = (
        <Text key={i} x={xCoord-((textArray[i].length)/2)*14} y={yCoord+(i*lineDist)} 
          fontSize={25} wrap="char"
          text={textArray[i]}
        />
      );
    }
    return list
  }

  const matchInformationStat = (xCoord, yCoord, lineDist, textArray) =>{
    let list = [];
    for (let i=0; i<7; i++) {
      list[i] = (
        <Text key={i} x={xCoord} y={yCoord+(i*lineDist)} 
          fontSize={25} wrap="char"
          text={textArray[i]}
        />
      );
    }
    return list
  }

  return (
    <div style={{display: 'flex', justifyContent: 'center', background:'green', zIndex:-1}}>
    <svg className="background" viewBox="0 0 1884.241 1080.446" style={{zIndex:0, height:720}}>
      <path fill="rgba(0, 179, 0, 0.99)" stroke="rgba(0, 61, 0, 1)" strokeWidth="100px" strokeLinejoin="miter" strokeLinecap="butt" 
        strokeMiterlimit="4" shapeRendering="auto" id="Path_4" 
        d="M 418.5040283203125 -2.817545237121521e-07 
          L 1465.7373046875 -2.817545237121521e-07 
          C 1696.870727539063 -2.817545237121521e-07 1884.241333007813 192.5970764160156 1884.241333007813 430.1777038574219 
          L 1884.241333007813 650.2685546875 
          C 1884.241333007813 887.84912109375 1696.870727539063 1080.4462890625 1465.7373046875 1080.4462890625 
          L 418.5040283203125 1080.4462890625 
          C 187.3706207275391 1080.4462890625 7.441341836056381e-07 887.84912109375 7.441341836056381e-07 650.2685546875 
          L 7.441341836056381e-07 430.1777038574219 
          C 7.441341836056381e-07 192.5970764160156 187.3706207275391 -2.817545237121521e-07 418.5040283203125 -2.817545237121521e-07 
          Z">
      </path>
    </svg>
    <img src={FieldImage} alt="fieldimage" style={{ position: 'absolute', opacity:'0.6', top: '40px'}} width={925} height={640}/>
     <animated.div style={fadeTransition}>
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
          <Text x={210} y={85} fontSize={100} wrap="char"
            text={teamOneScore}
          />
          <Text x={290} y={140} fontSize={30} wrap="char"
            text="MALMÖ FF"
          />
          <Text x={1020} y={85} fontSize={100} wrap="char"
            text={teamTwoScore}
          />
          <Text x={790} y={140} fontSize={30} wrap="char"
            text="DJURGÅRDEN" 
          />
          
          <Rect x={220} y={195} width={850} height={355}
          shadowOffset= {{ x: 1, y: 10 }} shadowOpacity= '0.5'
            fill="#e4e9f2d9" align="center" shadowBlur={10} cornerRadius = {[20, 20, 20, 20]}
          />
          <Rect x={220} y={205} width={850} height={49} fill="#137852" cornerRadius = {(10, 10, 5, 5)}/>
          <ListBar />
          <Text x={560} y={220} fontSize={30} wrap="char" fill="white"
            text="STATISTICS"
          />
          {matchInformation(630, 280, 38, statisticsList)}
          {matchInformationStat(240, 280, 38, statisticsTeamOne)}
          {matchInformationStat(1040, 280, 38, statisticsTeamTwo)}
        </Layer>
      </Stage>
      </animated.div>
    </div>
  )
}

export default Statistics
