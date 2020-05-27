import React from 'react'
import {motion} from "framer-motion"
import image from '../../images/football.png'

const PointTable = () => {

   const leagueNames = ['ALLSVENSKAN, HERR 2020']

  const pointTable = [
    {name: 'Malmö FF', played: 3, won: 1, drawn: 2, lost: 0, points: 21},
    {name: 'Djurgården', played: 3, won: 2, drawn: 1, lost: 0, points: 29},
    {name: 'Kalmar FF', played: 3, won: 0, drawn: 0, lost: 3, points: 16},
    {name: 'Örebro', played: 3, won: 2, drawn: 1, lost: 0, points: 14},
    {name: 'Helsingborg', played: 3, won: 1, drawn: 0, lost: 2, points: 21},
    {name: 'Hammarby IF', played: 3, won: 2, drawn: 1, lost: 0, points: 10},
    {name: 'Östersunds FK', played: 2, won: 2, drawn: 0, lost: 0, points: 20},
    {name: 'Verberg', played: 3, won: 1, drawn: 2, lost: 0, points: 14},
    {name: 'Sirius', played: 0, won: 0, drawn: 0, lost: 0, points: 0},
    {name: 'Mjällby', played: 3, won: 0, drawn: 0, lost: 3, points: 0},
    {name: 'Norrköping', played: 3, won: 3, drawn: 0, lost: 0, points: 34},
  ]
  
  const ListBar= () =>{
    let bars = [];
    for (let i=0; i<pointTable.length; i++) {
      let color; i%2===0?color='#fff':color='rgba(253, 224, 255, 0.97)'
      bars[i] = (    
        <>
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
        </>
      );      
    }   
    return bars
  }  

  const HeadBar= () =>{
    let bars = [];
    for (let i=0; i<1; i++) {
      bars[i] = (   
        <> 
        <motion.div key={i} 
          initial={{ transform: 'rotateX(95deg)' }}
          animate={{ transform: 'rotateX(0deg)' }}
          transition={{ type: "spring", stiffness: 260, damping: 10, delay: 0.2 }}
          style={{width:'940px', height:'55px', margin:'0 20px', background: '#3498DB', opacity: '0.97',
            borderRadius:'25px', boxShadow: '5px 10px 10px rgba(0, 0, 0, 0.5)', overflow: 'hidden',
            transform: 'rotateX(95deg)', border: '1px solid #fff'}}>
          <motion.li 
            initial={{ scale: 0 }}
            animate={{ scale: 1}}
            transition={{ type: "spring", stiffness: 260, damping: 10, delay: 0.5, duration: 2
            }}
              style={{display:'flex', justifyContent:'center', fontSize:'32px', 
              color: '#fff', margin:'9px', }}>
            <span>{leagueNames[0]}</span>
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
        </>
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

export default PointTable