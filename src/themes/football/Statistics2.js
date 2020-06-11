import React, { useState, useMemo} from 'react'
import { motion} from 'framer-motion'
import StatisticsListBars from './StatisticsListBars'

const Statistics2 = (props) => {
  //const {timeFormatted, startTime, stopTime, resetTime} = useContext(ScoreClockContext)
  //const {scoreData} = useContext(ScoreBoardContext)

  //const [time, setTime] = useState(timeFormatted())


  //console.log(props)

  //const statisticsList = ['STATISTICS', 'SHOTS', 'SHOTS ON TARGET', 'CORNERS', 'FOULS COMMITTED', 'OFFSIDES', 'YELLOW CARD', 'RED CARD']

  //const statisticsTeamOne = ['', props.team1Shots, props.team1OnTarget, props.team1Corners, props.team1Fouls, props.team1Offsides, props.team1Yellow, props.team1Red]

  //const statisticsTeamTwo = ['', props.team2Shots, props.team2OnTarget, props.team2Corners, props.team2Fouls, props.team2Offsides, props.team2Yellow, team2Red]

  const memochild = useMemo(() =>{
    return <StatisticsListBars 
    team1Yellow={props.team1Yellow}
    team1Red={props.team1Red}
    team1Corners={props.team1Corners}
    team1Offsides={props.team1Offsides}
    team1Shots={props.team1Shots}
    team1Fouls={props.team1Fouls}
    team1OnTarget={props.team1OnTarget}

    team2Yellow={props.team2Yellow}
    team2Red={props.team2Red}
    team2Corners={props.team2Corners}
    team2Offsides={props.team2Offsides}
    team2Shots={props.team2Shots}
    team2Fouls={props.team2Fouls}
    team2OnTarget={props.team2OnTarget}
    />
  },[props.team1Yellow, props.team1Red, props.team1Corners, props.team1Offsides, props.team1Shots,props.team1Fouls, props.team1OnTarget, 
    props.team2Yellow, props.team2Red, props.team2Corners, props.team2Offsides, props.team2Shots, props.team2Fouls, props.team2OnTarget])

  

  const ListBar= (statisticsArray, teamOneStats, teamTwoStats) =>{ //statisticsList, statisticsTeamOne, statisticsTeamTwo
    let bars = [];
    for (let i=0; i<statisticsArray.length; i++) {
      let color; i%2===0?color='#ddd':color='#fff'
      let fontColor; i%2===0?fontColor='#000':fontColor='#454648'
      let skew; i%2===0?skew='-10deg':skew='10deg'
      bars[i] = (   
          <motion.div key={i} 
            initial={{ height: 0, scale: 1}}
            animate={{ height: '44px', scale: 1}}
            exit={{ height: 0, scale: 0, opacity: 0, transition: {duration: 1.5} }}
            transition={{ type: "spring", stiffness: 260, damping: 200, delay: 1.2, duration: 2 }}
            style={{width:'820px', height:'44px', margin:'0px 20px', paddingBottom:'0px', background: color, opacity: '0.97',
              skew: skew, boxShadow: '2px 5px 5px rgba(0, 0, 0, 0.7)', overflow: 'hidden'}}>
            <motion.li 
              initial={{ scale: 0 }}
              animate={{ scale: 1}}
              exit={{scale: 0}}
              transition={{ type: "spring", stiffness: 260, damping: 50, delay: 1.2, duration: 2
              }}
                style={{display:'flex', justifyContent:'space-between', 
                paddingLeft: '90px', margin:'5px', }}>
              <span style={{fontSize:'28px'}}>{teamOneStats[i]}</span>
              <span style={{fontSize:(i===0)?'28px':'20px', paddingTop: '5px', color: (i===0)?'#FF00BF':fontColor}}>{statisticsArray[i]}</span>
              <span style={{width: 90 +'px', fontSize:'28px'}}>{teamTwoStats[i]}</span>
            </motion.li>
          </motion.div>
      );      
    }   
    return bars
  }
  
  //const ListBarMemo = useMemo(() => ListBar(statisticsList, statisticsTeamOne, statisticsTeamTwo), [statisticsList, statisticsTeamOne, statisticsTeamTwo]);

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
        exit={{ scale: 0, transition: {duration: 1.5} }}
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
            <span style={{fontSize:'77px'}}>{props.teamOneScore}</span>
            <span style={{margin:'0px 0 0 20px'}}>Malmö FF</span>
          </div>
          <div>
            <span style={{margin:'0px 20px 0 0'}}>Djurgården</span>
            <span style={{fontSize:'77px'}}>{props.teamTwoScore}</span>
          </div>          
        </motion.li>
      </motion.div>
      <div style={{width:'170px', height:'132px', backgroundColor: '#454648', zIndex: 1, border: '5px solid rgba(200, 200, 200, 0.5)',
          padding:'30px 0', position:'relative', top: '-130px', margin: '0 auto', borderRadius:'100px', textAlign: 'center', fontSize: '52px'}}>
        <span style={{color:'#fff'}}>{props.seconds}</span>
      </div> 
      <div style={{position:'relative', top: '-132px', left: '60px', paddingBottom: '4px'}}>
        {memochild}
      </div>
   
    </motion.div>
  )
}

export default Statistics2
