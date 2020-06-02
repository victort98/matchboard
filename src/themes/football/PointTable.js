import React from 'react'
import {AnimatePresence, motion} from "framer-motion"

const PointTable = React.memo(() => {
  const leagueName = ['POINT TABLE']

  const pointTable = [
    {name: 'Malmö FF', played: 3, won: 1, drawn: 2, lost: 0, points: 21},
    {name: 'Djurgården', played: 3, won: 2, drawn: 1, lost: 0, points: 29},
    {name: 'Kalmar FF', played: 3, won: 0, drawn: 0, lost: 3, points: 16},
    {name: 'Örebro', played: 3, won: 2, drawn: 1, lost: 0, points: 14},
    {name: 'Helsingborg', played: 3, won: 1, drawn: 0, lost: 2, points: 21},
    {name: 'Hammarby IF', played: 3, won: 2, drawn: 1, lost: 0, points: 10},
    {name: 'Östersunds FK', played: 2, won: 2, drawn: 0, lost: 0, points: 20},
    {name: 'Verberg', played: 3, won: 1, drawn: 2, lost: 0, points: 14},
    {name: 'Mjällby', played: 3, won: 0, drawn: 0, lost: 3, points: 0},
    {name: 'Norrköping', played: 3, won: 3, drawn: 0, lost: 0, points: 34},
  ]
  
  const ListBar= () =>{
    let bars = [];
    for (let i=0; i<pointTable.length; i++) {
      let color; i%2===0?color='#fff':color='rgba(253, 224, 255, 0.97)'
      bars[i] = (    
        <AnimatePresence exitBeforeEnter key={i}>
        <motion.div key={i} 
          initial={{ transform: 'rotateX(95deg)' }}
          animate={{ transform: 'rotateX(0deg)' }}
          exit={{ transform: 'rotateX(90deg)', transition: {duration: 1} }}
          transition={{ type: "spring", stiffness: 260, damping: 10, delay: 0.9, duration: 2 }}
          style={{width:'940px', height:'35px', margin:'5px 20px', paddingBottom:'15px', background: color, opacity: '0.97',
            borderRadius:'25px', boxShadow: '2px 5px 5px rgba(0, 0, 0, 0.7)', overflow: 'hidden'}}>
          <motion.li 
            initial={{ scale: 0 }}
            animate={{ scale: 1}}
            transition={{ type: "spring", stiffness: 260, damping: 10, delay: 0.9, duration: 2
            }}
              style={{display:'flex', justifyContent:'space-between', fontSize:'18px', 
              paddingLeft: '90px', margin:'5px', }}>
            <span>{i+1}. {pointTable[i].name}</span>
            <div style={{width: 500 +'px', display: 'flex', justifyContent: 'space-between', paddingRight: '70px', textAlign: 'center'}}>
              <span style={{width: 100 +'px'}}>{pointTable[i].played}</span>
              <span style={{width: 100 +'px'}}>{pointTable[i].won}</span>
              <span style={{width: 100 +'px'}}>{pointTable[i].drawn}</span>
              <span style={{width: 100 +'px'}}>{pointTable[i].lost}</span>
              <span style={{width: 100 +'px'}}>{pointTable[i].points}</span>
            </div>
          </motion.li>
        </motion.div>
        </AnimatePresence>
      );      
    }   
    return bars
  }  

  const HeadBar= () =>{
    let bars = [];
    for (let i=0; i<1; i++) {
      bars[i] = (   
        <div key={i}> 
        <motion.div key={i} 
          initial={{ transform: 'rotateX(95deg)' }}
          animate={{ transform: 'rotateX(0deg)' }}
          exit={{ transform: 'rotateX(90deg)', transition: {duration: 1} }}
          transition={{ type: "spring", stiffness: 260, damping: 10, delay: 0.9, duration: 2 }}
          style={{width:'940px', height:'55px', margin:'0 20px', background: '#3498DB', opacity: '0.97',
            borderRadius:'25px', boxShadow: '5px 10px 10px rgba(0, 0, 0, 0.5)', overflow: 'hidden',
            transform: 'rotateX(95deg)', border: '1px solid #fff'}}>
          <motion.li 
            initial={{ scale: 0 }}
            animate={{ scale: 1}}
            transition={{ type: "spring", stiffness: 260, damping: 10, delay: 0.9, duration: 2
            }}
              style={{display:'flex', justifyContent:'center', fontSize:'32px', 
              color: '#fff', margin:'9px', }}>
            <span>{leagueName[0]}</span>
          </motion.li>
        </motion.div>
        <div style={{width:'940px', height:'35px', color: '#fff', backgroundColor: '#C74B87', boxShadow: '5px 10px 10px rgba(0, 0, 0, 0.5)',
           padding:'7.5px 0', position:'relative', margin: '5px auto 0 auto', borderRadius:'15px', display: 'flex', justifyContent: 'space-between'}}>
          <span style={{paddingLeft: '100px'}}>TEAM </span>
          <div style={{width: 500 +'px', display: 'flex', justifyContent: 'space-between', paddingRight: '70px', textAlign: 'center'}}>
            <span style={{width: 100 +'px'}}>PLAYED</span>
            <span style={{width: 100 +'px'}}>WON</span>
            <span style={{width: 100 +'px'}}>DRAWN</span>
            <span style={{width: 100 +'px'}}>LOST</span>
            <span style={{width: 100 +'px'}}>POINTS</span>
          </div>
        </div>
        </div>
      );      
    }   
    return bars
  }  

  const pageVariants = {
    initial : { opacity: 0, y: '-100vh', scale: 0.8 },
    in: { opacity: 1, y: 0, scale: 1 },
    out: { opacity: 0, y: '100vh', scale: 1.2 }
  }

  const pageTransition = {
    type: 'tween',
    ease: 'easeInOut',
    duration: 1
  }

  return (
    <motion.div style={{zIndex:1, width: '970px', height: '550px', margin: '0 auto'}}
      initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransition}>      
      <HeadBar/>
      <ListBar/>
    </motion.div>
  )
})

export default PointTable