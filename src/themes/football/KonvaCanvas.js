import React, { useState, useEffect, useContext }  from 'react';
//import Konva from 'konva';
import { Stage, Layer, Text } from 'react-konva';

import {ScoreBoardContext} from '../../contexts/ScoreBoardContextProvider'

function KonvaCanvas(props) {

    const {scoreData} = useContext(ScoreBoardContext)

    const [seconds, setSeconds] = useState(0);
    const [isActive, setIsActive] = useState(false);
    const [homeScore, setHomeScore] = useState(0)
    const [awayScore, setAwayScore] = useState(0)

    //console.log(props)
  
    function toggle() {
      setIsActive(!isActive);
    }
  
    function reset() {
      setSeconds(0);
      setIsActive(false);
    }

    useEffect(() => {

        console.log(props)

        if(props.timerActive) {
            setIsActive(true);
        }

        if(!props.timerActive) {
            setIsActive(false);
        }

        setHomeScore(props.home)
        setAwayScore(props.away)

        console.log("props updated to: " + props.timerActive)

    },[props])
  
    useEffect(() => {
      let interval = null;
      if (isActive) {
        interval = setInterval(() => {
          setSeconds(seconds => seconds + 1);
        }, 1000);
      } else if (!isActive && seconds !== 0) {
        clearInterval(interval);
      }
      return () => clearInterval(interval);
    }, [isActive, seconds]);

    return (
        <div>
        <Stage width={700} height={700}>
        <Layer>
            <Text
               fontSize={60}
               text={"Home: "+ homeScore} //homeScore
               wrap="char"
               align="center"
               verticalAlign="top"
               width={700}
               height={350}
            />
            <Text
               fontSize={60}
               text={"Away: "+ awayScore} //awayScore
               wrap="char"
               align="center"
               verticalAlign="middle"
               width={700}
               height={350}
            />
            <Text
               fontSize={60}
               text={"Time elapsed: "+ seconds}
               wrap="char"
               align="center"
               verticalAlign="bottom"
               width={700}
               height={350}
            />
        </Layer>
        </Stage>
        </div>
    );
}

export default KonvaCanvas;