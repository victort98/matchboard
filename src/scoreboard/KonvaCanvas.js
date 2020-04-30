import React, { useState, useEffect }  from 'react';
//import Konva from 'konva';
import { Stage, Layer, Text } from 'react-konva';

function KonvaCanvas(props) {

    const [seconds, setSeconds] = useState(0);
    const [isActive, setIsActive] = useState(false);

    console.log(props)
  
    function toggle() {
      setIsActive(!isActive);
    }
  
    function reset() {
      setSeconds(0);
      setIsActive(false);
    }

    useEffect(() => {

        if(props.timerActive) {
            setIsActive(true);
        }

        if(!props.timerActive) {
            setIsActive(false);
        }

        console.log("props updated to: " + props.timerActive)

    },[props.timerActive])
  
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
               text={"time elapsed: "+ seconds}
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