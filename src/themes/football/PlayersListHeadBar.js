import React from 'react'
import {AnimatePresence, motion} from "framer-motion"

export default function PlayersListHeadBar() {

    const teamNames = ['Malmö FF', 'Djurgården']

    const teamOnePlayersName = ['Marcus Astvald', 'Simon Amin', 'Per Ågren', 'Samuel Adrian', 'Mattias Adelstam', 
      'Anders Ahlström', 'Peter Abelsson', 'Sargon Abraham', 'Hans Andersson', 'Joel Anell', 'Johan Anegrund']
    
    const teamTwoPlayersName = ['Sebastian Larsson', 'Kim Källström', 'Andreas Granqvist', 'Mikael Lustig', 'Marcus Berg', 
      'Martin Olsson', 'Jimmy Durmaz', 'Emil Forsberg', 'Albin Ekdal', 'Viktor Claesson', 'Robin Olsen']

    const HeadBar= () =>{
        let bars = [];
        for (let i=0; i<1; i++) {
          bars[i] = (   
            <AnimatePresence exitBeforeEnter key={i}> 
            <motion.div key={i+teamNames[i]} 
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

    return (
        <React.Fragment>
            <HeadBar/>
        </React.Fragment>
    )
}
