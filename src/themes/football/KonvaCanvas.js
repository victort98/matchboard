import React, { useState, useEffect, useContext }  from 'react';
//import Konva from 'konva';
import { Stage, Layer, Text, Image } from 'react-konva';
//import useImage from 'use-image';

import {ScoreBoardContext} from '../../contexts/ScoreBoardContextProvider'

/*
const LionImage = () => {
  //https://konvajs.org/assets/lion.png
  //const [image] = useImage("localhost:3000/images/lion.png");
  const [image] = useImage("https://konvajs.org/assets/lion.png");
  return <Image image={image} />;
}
*/


const imageConvertor = (imageSource) => {

  //Konva requires a window.image object, this function converts an image to such an object
  var imageObj = new window.Image();

  imageObj.src = imageSource

  return imageObj
}

const lion = require("../../images/lion.png");

function KonvaCanvas(props) {

    const {scoreData} = useContext(ScoreBoardContext)

    const [seconds, setSeconds] = useState(0);
    const [isActive, setIsActive] = useState(false);
    const [homeScore, setHomeScore] = useState(0)
    const [awayScore, setAwayScore] = useState(0)

    const yoda = require('../../images/yoda.jpg')

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
          
          <Image
            x={300}
            y={300}
            image={imageConvertor(require('../../images/yoda.jpg'))}
          />

          <Image
            x={300}
            y={0}
            image={imageConvertor(yoda)}
          />
          

        </Layer>
        </Stage>

        </div>
    );
}

export default KonvaCanvas;