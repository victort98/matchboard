import React from 'react'
import {AnimatePresence, motion} from "framer-motion"

const Playerslist2 = () => {
  const teamNames = ['Malmö FF', 'Djurgården']

  const teamOnePlayersName = ['Marcus Astvald', 'Simon Amin', 'Per Ågren', 'Samuel Adrian', 'Mattias Adelstam', 
    'Anders Ahlström', 'Peter Abelsson', 'Sargon Abraham', 'Hans Andersson', 'Joel Anell', 'Johan Anegrund']
  
  const teamTwoPlayersName = ['Sebastian Larsson', 'Kim Källström', 'Andreas Granqvist', 'Mikael Lustig', 'Marcus Berg', 
    'Martin Olsson', 'Jimmy Durmaz', 'Emil Forsberg', 'Albin Ekdal', 'Viktor Claesson', 'Robin Olsen']

  const ListBar= () =>{
    let bars = [];
    for (let i=0; i<11; i++) {
      let color; i%2===0?color='#fff':color='rgba(212, 241, 255, 0.99)'
      bars[i] = (    
        <motion.div key={i} 
          initial={{ transform: 'rotateX(95deg)' }}
          animate={{ transform: 'rotateX(0deg)' }}
          exit={{ transform: 'rotateX(0deg)', transition: {duration: 1} }}
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
            <span>{i+1}. {teamOnePlayersName[i]}</span>
            <span style={{width: 255 +'px'}}>{i+1}. {teamTwoPlayersName[i]}</span>
          </motion.li>
        </motion.div>
      );      
    }   
    return bars
  }  

  const HeadBar= () =>{
    let bars = [];
    for (let i=0; i<1; i++) {
      bars[i] = (   
        <AnimatePresence exitBeforeEnter> 
        <motion.div key={i} 
          initial={{ transform: 'rotateX(95deg)' }}
          animate={{ transform: 'rotateX(0deg)' }}
          exit={{ transform: 'rotateX(90deg)', transition: {duration: 1} }}
          transition={{ type: "spring", stiffness: 260, damping: 10, delay: 0.9, duration: 2 }}
          style={{width:'940px', height:'55px', margin:'5px 20px', background: '#3498DB', opacity: '0.97',
            borderRadius:'25px', boxShadow: '5px 10px 10px rgba(0, 0, 0, 0.5)', overflow: 'hidden',
            transform: 'rotateX(95deg)', border: '1px solid #fff'}}>
          <motion.li 
            initial={{ scale: 0 }}
            animate={{ scale: 1}}
            transition={{ type: "spring", stiffness: 260, damping: 10, delay: 0.9, duration: 2
            }}
              style={{display:'flex', justifyContent:'space-between', fontSize:'32px', 
              color: '#fff', paddingLeft: '90px', margin:'9px', }}>
            <span>{teamNames[0]}</span>
            <span style={{width: 255 +'px'}}>{teamNames[1]}</span>
          </motion.li>
        </motion.div>
        </AnimatePresence>
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
}

export default Playerslist2