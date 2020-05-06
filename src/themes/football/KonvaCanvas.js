import React, { useState, useEffect, useContext }  from 'react';
//import Konva from 'konva';
import { Stage, Layer, Text, Ellipse, Rect, Wedge, Circle } from 'react-konva';
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
        <Stage width={window.innerWidth} height={window.innerHeight}>
        <Layer>
        
         {/*outer circle */} 
          <Ellipse 
              x= {950}
              y={790/1.5}
              radiusX={900}
              radiusY={750}
              stroke='#003300'
              strokeWidth={150}
            />
          {/*inner circle */}  
          <Ellipse 
              x= {1280/1.35}
              y={790/1.5}
              radiusX={650}
              radiusY={550}
              stroke='#cc9900'
              strokeWidth={30}
              shadowColor = 'black'
              shadowBlur = {5}
              shadowOffset = {{ x:-20, y:20 }}
              shadowOpacity = {.8}
            />

            {/* Mid Rect */}
            <Rect 
              x={400}
              y={790/8}
              width={1100}
              height={253}
              fill='white'
              strokeWidth={4}
              shadowColor = 'black'
              shadowBlur = {5}
              shadowOffset = {{ x:-7, y:20 }}
              shadowOpacity = {.8}
            
            />
            {/*oval start */}
            <Wedge
            x = {400}
            y = {790/3.51}
            radius = {126.5}
            angle = {180}
            fill = 'white'
            rotation = {90}
            shadowColor = 'black'
            shadowBlur = {5}
            shadowOffset = {{ x:-5, y:20 }}
            shadowOpacity = {.8}
            
            />

            {/*oval end */}
            <Wedge
            x = {1500}
            y = {790/3.51}
            radius = {126}
            angle = {180}
            fill = 'white'
            rotation = {-90}
            />

            {/* clock circle*/}
            <Circle 
              x = {950}
              y = {790/3}
              radius = {200}
              fill = '#006600'
              stroke = '#cc9900'
              strokeWidth = {20}
              shadowColor = 'black'
              shadowBlur = {5}
              shadowOffset = {{ x:-20, y:20 }}
              shadowOpacity = {.8}
            />
      {/* team1 name       */}
            <Text
               x={400}
               Y={130}
               fontFamily = 'Algerian'
               fontSize={80}
               fill = 'red'
               text={"Sweden"}
                //homeScore
               wrap="char"
               align="center"
               verticalAlign="top"
               shadowColor = 'black'
              shadowBlur = {6}
              shadowOffset = {{ x:-5, y:5 }}
              shadowOpacity = {.8}
               
            />

      {/* Team 1 Score */}
            <Text
               x={500}
               Y={220}
               fontFamily = 'Algerian'
               fontSize={130}
               fill = 'red'
               text={homeScore}
                //homeScore
               wrap="char"
               align="center"
               verticalAlign="top"
               shadowColor = 'black'
              shadowBlur = {6}
              shadowOffset = {{ x:-5, y:5 }}
              shadowOpacity = {.8}
               
            />
      {/* team2 name */}
            <Text
               x={1160}
               Y={130}
               fontFamily = 'Algerian'
               fontSize={80}
               fill = 'red'
               text={"Denmark"}
                //homeScore
               wrap="char"
               align="center"
               verticalAlign="top"
               shadowColor = 'black'
              shadowBlur = {6}
              shadowOffset = {{ x:-5, y:5 }}
              shadowOpacity = {.8}
               
            />

            {/* team2 score */}
            <Text
               x={1300}
               Y={220}
               fontFamily = 'Algerian'
               fontSize={130}
               fill = 'red'
               text= {awayScore}
                //homeScore
               wrap="char"
               align="center"
               verticalAlign="top"
               shadowColor = 'black'
              shadowBlur = {6}
              shadowOffset = {{ x:-5, y:5 }}
              shadowOpacity = {.8}
               
            />
            {/* <Text
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
            /> */}
        </Layer>
        </Stage>
        </div>
    );
}

export default KonvaCanvas;