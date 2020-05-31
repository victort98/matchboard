import React, {useEffect, useState, useContext} from 'react'
import {ScoreClockContext} from '../../contexts/ScoreClockContextProvider'
import {ScoreBoardContext} from '../../contexts/ScoreBoardContextProvider'
import {socket} from '../../socket/socket';
import {AnimatePresence, motion} from 'framer-motion'

const Scoreboard2 = ({ isVisible }) => {
  // Scoreboard2 = ({ isVisible }) =>
  const {timeFormatted, startTime, stopTime, resetTime} = useContext(ScoreClockContext)
  const {scoreData} = useContext(ScoreBoardContext)

  const [time, setTime] = useState(timeFormatted())
  const [teamOneName, setTeamOneName] = useState('Malmö FF')
  const [teamTwoName, setTeamTwoName] = useState('Djurgården')

  const [teamOneScore, setTeamOneScore] = useState(0)
  const [teamTwoScore, setTeamTwoScore] = useState(0)
  const [overtime, setOvertime] = useState(0)

  const [timerActive, setTimerActive] = useState()

  useEffect(()=>{
    setTeamOneName(scoreData.teamOneName)
    setTeamTwoName(scoreData.teamTwoName)
    setTeamOneScore(scoreData.teamOne)
    setTeamTwoScore(scoreData.teamTwo)
    setOvertime(scoreData.overtime)
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
      }, 100);   
    } else if(timerActive === 'stop'){
      stopTime()
      clearInterval(timeStarted)
    } else if(timerActive === 'reset'){
      resetTime()
    }
  }, [timerActive, timeFormatted, startTime, stopTime, resetTime])

  console.log("dude" + isVisible)

  const pageVariants = {
    initial : { opacity: 0, y: '-100vw', scale: 0.7 },
    in: { opacity: 1, y: 0, scale: 1 },
    out: { opacity: 0, y: '-100vw', scale: 1.2 }
  }

  const pageTransition = {
    type: 'tween',
    ease: 'easeInOut',
    duration: 1
  }

  return (
     <motion.div style={{zIndex:1, width: '970px', height: '569px', margin: '-45px auto 0 auto', overflowY: 'hidden'}}
      initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransition}>   
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0, transition: {duration: 2} }}
        transition={{ type: "spring", stiffness: 260, damping: 30, delay: 1, duration: 2.5 }}
        style={{width:'940px', height:'130px', margin:'45px 20px 0 20px', background: '#fff', opacity: '0.97',
          borderRadius:'90px', boxShadow: '5px 10px 10px rgba(0, 0, 0, 0.5)', overflow: 'hidden'}}>
        <motion.li 
          initial={{ scale: 0 }}
          animate={{ scale: 1}}
          exit={{ scale: 0 }}
          transition={{ type: "spring", stiffness: 260, damping: 10, delay: 1, duration: 2}}
            style={{display:'flex', justifyContent:'space-between', fontSize:'42px', 
            color: '#454648', padding: '50px 40px', margin:'9px'}}>
          <span>{teamOneName}</span>
          <span>{teamTwoName}</span>
        </motion.li>
      </motion.div>
      <div style={{width:'170px', height:'132px', backgroundColor: '#454648', zIndex: 1, border: '5px solid rgba(200, 200, 200, 0.5)',
          padding:'30px 0', position:'relative', top: '-130px', margin: '0 auto', borderRadius:'100px', textAlign: 'center', fontSize: '52px'}}>
        <span style={{color:'#fff'}}>{time}</span>
      </div> 
      <div style={{width: '500px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', fontSize: '14rem', 
          color: '#fff', textShadow: '5px 10px 10px rgba(0, 0, 0, 0.5)', zIndex: 10, padding: 0}}>
        <motion.span  initial={{ scale: 0, x: '-100%', opacity: 0 }} animate={{ scale: 1, x: 0, opacity: 1 }} transition={{delay: 1, duration: 1}}>{teamOneScore}</motion.span>        
        <span>:</span>
        <motion.span initial={{ scale: 0, x: '100%', opacity: 0 }} animate={{ scale: 1, x: 0, opacity: 1 }} transition={{delay: 1, duration: 1}}>{teamTwoScore}</motion.span>
      </div>    
    </motion.div>
  )
}

export default Scoreboard2

