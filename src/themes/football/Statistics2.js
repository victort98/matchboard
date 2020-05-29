import React, {useEffect, useState, useContext} from 'react'
import { Stage, Layer, Rect, Text, Circle, Image} from 'react-konva';
import {ScoreClockContext} from '../../contexts/ScoreClockContextProvider'
import {ScoreBoardContext} from '../../contexts/ScoreBoardContextProvider'
import {socket} from '../../socket/socket';
import {AnimatePresence, motion} from 'framer-motion'

const Statistics2 = () => {
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

  const statisticsList = ['STATISTICS', 'SHOTS', 'SHOTS ON TARGET', 'CORNERS', 'FOULS COMMITTED', 'OFFSIDES', 'YELLOW CARD', 'RED CARD']

  const statisticsTeamOne = ['', team1Shots, team1OnTarget, team1Corners, team1Fouls, team1Offsides, team1Yellow, team1Red]

  const statisticsTeamTwo = ['', team2Shots, team2OnTarget, team2Corners, team2Fouls, team2Offsides, team2Yellow, team2Red]

  const ListBar= () =>{
    let bars = [];
    for (let i=0; i<8; i++) {
      let color; i%2===0?color='#ddd':color='#fff'
      let fontColor; i%2===0?fontColor='#000':fontColor='#454648'
      let skew; i%2===0?skew='-10deg':skew='10deg'
      bars[i] = (    
        <motion.div key={i} 
          initial={{ height: 0, scale: 1, skewX: '90deg' }}
          animate={{ height: '44px', scale: 1, skewX: 0 }}
          exit={{ height: 0, scale: 0, skewX: '90deg', transition: {duration: 1} }}
          transition={{ type: "spring", stiffness: 260, damping: 200, delay: 1.5, duration: 2 }}
          style={{width:'820px', height:'44px', margin:'0px 20px', paddingBottom:'0px', background: color, opacity: '0.97',
            skew: skew, boxShadow: '2px 5px 5px rgba(0, 0, 0, 0.7)', overflow: 'hidden'}}>
          <motion.li 
            initial={{ scale: 0 }}
            animate={{ scale: 1}}
            transition={{ type: "spring", stiffness: 260, damping: 50, delay: 1.5, duration: 2
            }}
              style={{display:'flex', justifyContent:'space-between', 
              paddingLeft: '90px', margin:'5px', }}>
            <span style={{fontSize:'32px'}}>{statisticsTeamOne[i]}</span>
            <span style={{fontSize:(i===0)?'28px':'20px', paddingTop: '5px', color: (i===0)?'#FF00BF':fontColor}}>{statisticsList[i]}</span>
            <span style={{width: 90 +'px', fontSize:'32px'}}>{statisticsTeamTwo[i]}</span>
          </motion.li>
        </motion.div>
      );      
    }   
    return bars
  } 

  const pageVariants = {
    initial : { opacity: 0, y: '100vh', scale: 0.8 },
    in: { opacity: 1, y: 0, scale: 1 },
    out: { opacity: 0, y: '-100vh', scale: 1.2 }
  }

  const pageTransition = {
    type: 'tween',
    ease: 'easeInOut',
    duration: 1
  }

  return (
    <motion.div style={{zIndex:1, width: '970px', height: '599px', margin: '-45px auto 0 auto', overflowY: 'hidden'}}
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
          transition={{ type: "spring", stiffness: 260, damping: 20, delay: 1, duration: 2}}
            style={{display:'flex', justifyContent:'space-between', fontSize:'46px', 
            color: '#454648', padding: '0 30px', margin:'20px'}}>
          <div>
            <span style={{fontSize:'77px'}}>{teamOneScore}</span>
            <span style={{margin:'0px 0 0 20px'}}>Malmö FF</span>
          </div>
          <div>
            <span style={{margin:'0px 20px 0 0'}}>Djurgården</span>
            <span style={{fontSize:'77px'}}>{teamTwoScore}</span>
          </div>          
        </motion.li>
      </motion.div>
      <div style={{width:'170px', height:'132px', backgroundColor: '#454648', zIndex: 1, border: '5px solid rgba(200, 200, 200, 0.5)',
          padding:'30px 0', position:'relative', top: '-130px', margin: '0 auto', borderRadius:'100px', textAlign: 'center', fontSize: '52px'}}>
        <span style={{color:'#fff'}}>{time}</span>
      </div> 
      <div style={{position:'relative', top: '-132px', left: '60px', paddingBottom: '4px'}}>
        <ListBar/>
      </div>
   
    </motion.div>
  )
}

export default Statistics2
