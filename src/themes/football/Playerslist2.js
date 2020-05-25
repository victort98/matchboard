import React from 'react'
import {motion} from "framer-motion"
import image from '../../images/football.png'

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
          transition={{ type: "spring", stiffness: 260, damping: 10, delay: 0.2 }}
          style={{width:'940px', height:'35px', margin:'5px 20px', paddingBottom:'15px', background: color, opacity: '0.97',
            borderRadius:'25px', boxShadow: '2px 5px 5px rgba(0, 0, 0, 0.7)', overflow: 'hidden'}}>
          <motion.li 
            initial={{ scale: 0 }}
            animate={{ scale: 1}}
            transition={{ type: "spring", stiffness: 260, damping: 10, delay: 0.7, duration: 2
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
        <motion.div key={i} 
          initial={{ transform: 'rotateX(95deg)' }}
          animate={{ transform: 'rotateX(0deg)' }}
          transition={{ type: "spring", stiffness: 260, damping: 10, delay: 0.2 }}
          style={{width:'940px', height:'55px', margin:'5px 20px', background: '#3498DB', opacity: '0.97',
            borderRadius:'25px', boxShadow: '5px 10px 10px rgba(0, 0, 0, 0.5)', overflow: 'hidden',
            transform: 'rotateX(95deg)'}}>
          <motion.li 
            initial={{ scale: 0 }}
            animate={{ scale: 1}}
            transition={{ type: "spring", stiffness: 260, damping: 10, delay: 0.5, duration: 2
            }}
              style={{display:'flex', justifyContent:'space-between', fontSize:'32px', 
              color: '#fff', paddingLeft: '90px', margin:'9px', }}>
            <span>{teamNames[0]}</span>
            <span style={{width: 255 +'px'}}>{teamNames[1]}</span>
          </motion.li>
        </motion.div>
      );      
    }   
    return bars
  }  

  return (
    <div style={{display: 'flex', justifyContent: 'center', background:'green', zIndex:-1, width: '100vw', height:'100vh'}}>
      <div style={{zIndex:10, margin: '0 auto', alignSelf: 'center'}}>        
        <HeadBar/>
        <ListBar/>
      </div>

      <svg className="background" viewBox="0 0 1884.241 1080.446" style={{zIndex:0, height:'100vh'}}>
        <path fill="rgba(0, 179, 0, 0.99)" stroke="rgba(0, 61, 0, 1)" strokeWidth="100px" strokeLinejoin="miter" strokeLinecap="butt" 
          strokeMiterlimit="4" shapeRendering="auto" id="Path_4" d="M 418.5040283203125 -2.817545237121521e-07 L 1465.7373046875 -2.817545237121521e-07 
            C 1696.870727539063 -2.817545237121521e-07 1884.241333007813 192.5970764160156 1884.241333007813 430.1777038574219 
            L 1884.241333007813 650.2685546875 C 1884.241333007813 887.84912109375 1696.870727539063 1080.4462890625 1465.7373046875 1080.4462890625 
            L 418.5040283203125 1080.4462890625 C 187.3706207275391 1080.4462890625 7.441341836056381e-07 887.84912109375 7.441341836056381e-07 650.2685546875 
            L 7.441341836056381e-07 430.1777038574219 C 7.441341836056381e-07 192.5970764160156 187.3706207275391 -2.817545237121521e-07 418.5040283203125 -2.817545237121521e-07 Z">
        </path>
      </svg>
      <img src={image} alt="fieldimage" style={{ position: 'absolute', opacity:'0.6', top: '5%', height: '90%'}} />
    </div>
  )
}

export default Playerslist2