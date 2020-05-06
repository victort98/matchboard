import React, {useEffect, useState, useContext} from 'react'
import { Stage, Layer, Rect, Text, Circle} from 'react-konva';
import {ScoreClockContext} from '../../contexts/ScoreClockContextProvider'
import {ScoreBoardContext} from '../../contexts/ScoreBoardContextProvider'
import {socket} from '../../socket/socket';

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
  }, [scoreData])

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

  return (
    <div style={{display: 'flex', justifyContent: 'center'}}>
      <Stage width={1280} height={720}>
        <Layer fill="#ddd">
          <Rect x={170} y={60} width={940} height={130}
          shadowOffset= {{ x: 1, y: 10 }} shadowOpacity= '0.5'
        
            fill="#fff" align="center" shadowBlur={10} cornerRadius = {[70, 70, 70, 70]}
          />
          <Circle x={640} y={125} radius={65.5} fill="#eee" shadowBlur={20} shadowOpacity= '0.9'/>
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

          <Rect x={225} y={200} width={850} height={465}
          shadowOffset= {{ x: 1, y: 10 }} shadowOpacity= '0.5'       
            fill="#e4e9f2" align="center" shadowBlur={10} cornerRadius = {[40, 40, 40, 40]}
          />
          <Rect x={225} y={220} width={850} height={65} fill="#137852" cornerRadius = {(10, 10, 10, 10)}/>
          <Text x={500} y={230} fontSize={50} wrap="char" fill="white"
            text="STATISTICS"
          />
          <Text x={575} y={295} fontSize={35} wrap="char"
            text="SHOTS"
          />
          <Text x={250} y={295} fontSize={35} wrap="char"
            text={team1Shots}
          />
          <Text x={1025} y={295} fontSize={35} wrap="char"
            text={team2Shots}
          />
          <Rect x={225} y={335} width={850} height={55} fill="#ced9eb" />
          <Text x={470} y={348} fontSize={35} wrap="char"
            text="SHOTS ON TARGET"
          />
          <Text x={250} y={350} fontSize={35} wrap="char"
            text={team1OnTarget}
          />
          <Text x={1025} y={350} fontSize={35} wrap="char"
            text={team2OnTarget}
          />
          <Text x={545} y={400} fontSize={35} wrap="char"
            text="CORNERS"
          />
          <Text x={250} y={400} fontSize={35} wrap="char"
            text={team1Corners}
          />
          <Text x={1025} y={400} fontSize={35} wrap="char"
            text={team2Corners}
          />
          <Rect x={225} y={440} width={850} height={55} fill="#ced9eb" />
          <Text x={575} y={453} fontSize={35} wrap="char"
            text="FOULS"
          />
          <Text x={250} y={452} fontSize={35} wrap="char"
            text={team1Fouls}
          />
          <Text x={1025} y={452} fontSize={35} wrap="char"
            text={team2Fouls}
          />
          <Text x={545} y={505} fontSize={35} wrap="char"
            text="OFFSIDES"
          />
          <Text x={250} y={505} fontSize={35} wrap="char"
            text={team1Offsides}
          />
          <Text x={1025} y={505} fontSize={35} wrap="char"
            text={team2Offsides}
          />
          <Rect x={225} y={550} width={850} height={55} fill="#ced9eb" />
          <Text x={505} y={562} fontSize={35} wrap="char"
            text="YELLOW CARD"
          />
          <Text x={250} y={560} fontSize={35} wrap="char"
            text={team1Yellow}
          />
          <Text x={1025} y={560} fontSize={35} wrap="char"
            text={team2Yellow}
          />
          <Text x={540} y={618} fontSize={35} wrap="char"
            text="RED CARD"
          />
          <Text x={250} y={615} fontSize={35} wrap="char"
            text={team1Red}
          />
          <Text x={1025} y={615} fontSize={35} wrap="char"
            text={team2Red}
          />
        </Layer>
      </Stage>
    </div>
  )
}

export default Statistics
