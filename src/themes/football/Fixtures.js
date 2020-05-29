import React from 'react'
import {motion, AnimatePresence} from "framer-motion"
import moment from 'moment'

const Fixtures = () => {
  const teamNames = ['ALLSVENSKAN, HERR 2020']

  const matchFixtures = [
    {
      group: 'C',
      teamOne: 'Malmö FF',
      teamTwo: 'Djurgården',
      date: Date.now()
    },
    {
      group: 'A',
      teamOne: 'Kalmar FF',
      teamTwo: 'Hammarby',
      date: Date.now()
    },
    {
      group: 'B',
      teamOne: 'Örebro',
      teamTwo: 'Sundsval',
      date: Date.now()
    }
  ]

  const ListBar= () =>{
    let bars = [];    
    for (let i=0; i<3; i++) {
      let color; i%2===0?color='#fff':color='rgba(212, 241, 255, 0.99)'
      bars[i] = ( 
        <div key={i}>        
        <div style={{width:'290px', height:'35px', backgroundColor: '#3498DB', zIndex: 1, border: '1px solid #fff',
           padding:'6px 0', position:'relative', top: '22px', margin: '0 auto', borderRadius:'15px', textAlign: 'center'}}>
          <span style={{color:'#fff', paddingTop: '10px'}}>GROUP {matchFixtures[i].group}</span>
        </div>         
        <motion.div key={i} 
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          exit={{scale: 0, transition: {duration: 1}}}
          transition={{ type: "spring", stiffness: 260, damping: 30, delay: 1, duration: 3 }}
          style={{width:'940px', height:'64px', margin:'0 20px',  padding:'10px 0', background: "#fff", opacity: '0.97',
            borderRadius:'45px', boxShadow: '2px 5px 5px rgba(0, 0, 0, 0.7)', overflow: 'hidden'}}>          
          <motion.li 
            initial={{ scale: 0 }}
            animate={{ scale: 1}}
            transition={{ type: "spring", stiffness: 260, damping: 10, delay: 0.7, duration: 2
            }}
              style={{display:'flex', justifyContent:'space-between', fontSize:'32px', 
              padding: '0 30px', margin: 0, }}>
            <span>{matchFixtures[i].teamOne}</span>
            <span>{matchFixtures[i].teamTwo}</span>
          </motion.li>
        </motion.div>       
        <div style={{width:'190px', height:'62px', backgroundColor: '#fff', opacity: '0.97', borderBottomLeftRadius: 45, boxShadow: '0 3px 0 rgba(0, 0, 0, 0.7)',
           borderBottomRightRadius: 45, padding:'6px 0', position:'relative', bottom: '45px', margin: '0 auto', textAlign: 'center'}}>
          <span style={{color:'rgba(204,132,0, 0.99)', fontSize: '17.1px'}}>{moment(matchFixtures[i].date).format('ll')}</span>
          <span style={{color:'#222', padding: '5px 0', display: 'block'}}>{moment(matchFixtures[i].date).format('LT')}</span>
        </div>          
        </div>
      );      
    }      
    return bars
  }  

  const HeadBar= () =>{
    let bars = [];
     
    for (let i=0; i<1; i++) {
      bars[i] = (    
        <AnimatePresence exitBeforeEnter key={i}>
        <motion.div key={i} 
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0, transition: {duration: 1} }}
          transition={{ type: "spring", stiffness: 260, damping: 30, delay: 0.5, duration: 2 }}
          style={{width:'940px', height:'55px', margin:'56px 20px 15px 20px', background: '#3498DB', opacity: '0.97',
            borderRadius:'45px', boxShadow: '5px 10px 10px rgba(0, 0, 0, 0.5)', overflow: 'hidden',
            transform: 'rotateX(95deg)', border: '1px solid #fff'}}>
          <motion.li 
            initial={{ scale: 0 }}
            animate={{ scale: 1}}
            exit={{ scale: 0}}
            transition={{ type: "spring", stiffness: 260, damping: 10, delay: 0.5, duration: 2}}
              style={{display:'flex', justifyContent:'center', fontSize:'32px', 
              color: '#fff', margin:'9px', }}>
            <span>{teamNames[0]}</span>
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
    <motion.div style={{zIndex:1, width: '970px', height: '569px', margin: '-55px auto 0 auto', overflowY: 'hidden'}}
      initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransition}> 
      <HeadBar/>
      <ListBar/>
    </motion.div>
  )
}

export default Fixtures
