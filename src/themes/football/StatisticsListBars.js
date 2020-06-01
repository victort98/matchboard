import React, {useEffect, useState, useContext} from 'react'
import {AnimatePresence, motion} from 'framer-motion'

export default function StatisticsListBars(props) {

    const statisticsList = ['STATISTICS', 'SHOTS', 'SHOTS ON TARGET', 'CORNERS', 'FOULS COMMITTED', 'OFFSIDES', 'YELLOW CARD', 'RED CARD']

    const statisticsTeamOne = ['', props.team1Shots, props.team1OnTarget, props.team1Corners, props.team1Fouls, props.team1Offsides, props.team1Yellow, props.team1Red]

    const statisticsTeamTwo = ['', props.team2Shots, props.team2OnTarget, props.team2Corners, props.team2Fouls, props.team2Offsides, props.team2Yellow, props.team2Red]

    //console.log("listbars rendering")
    //console.log(props)

    const ListBar= () =>{
        let bars = [];
        for (let i=0; i<statisticsList.length; i++) {
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
                  <span style={{fontSize:'28px'}}>{statisticsTeamOne[i]}</span>
                  <span style={{fontSize:(i===0)?'28px':'20px', paddingTop: '5px', color: (i===0)?'#FF00BF':fontColor}}>{statisticsList[i]}</span>
                  <span style={{width: 90 +'px', fontSize:'28px'}}>{statisticsTeamTwo[i]}</span>
                </motion.li>
              </motion.div>
          );      
        }   
        return bars
      } 

    return (
        <React.Fragment>
            <ListBar/>
        </React.Fragment>
    )
}
