import React, {useEffect, useState, useContext} from 'react'
import { Stage, Layer, Rect, Text, Circle} from 'react-konva';
import {ScoreClockContext} from '../../contexts/ScoreClockContextProvider'
import {ScoreBoardContext} from '../../contexts/ScoreBoardContextProvider'
import { useSpring, animated } from 'react-spring';
import {socket} from '../../socket/socket';

const Statistics = () => {
  const {timeFormatted, startTime, stopTime, resetTime} = useContext(ScoreClockContext)
  const {scoreData} = useContext(ScoreBoardContext)

  const [time, setTime] = useState(timeFormatted())

  const [teamOneScore, setTeamOneScore] = useState(0)
  const [teamTwoScore, setTeamTwoScore] = useState(0)
  const [timerActive, setTimerActive] = useState()

  useEffect(()=>{
    setTeamOneScore(scoreData.teamOne)
    setTeamTwoScore(scoreData.teamTwo)
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

  const fadeTransition = useSpring({
    from: {opacity:0, marginLeft:-100, marginRight: 100},
    to: {opacity: 1, marginLeft: 0, marginRight: 0}
  })

  return (
    <div style={{display: 'flex', justifyContent: 'center'}}>
     <animated.div style={fadeTransition}>
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
        </Layer>
      </Stage>
      </animated.div>
    </div>
  )
}

export default Statistics
