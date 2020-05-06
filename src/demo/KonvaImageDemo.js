import React, { useState, useEffect, useContext }  from 'react';
//import Konva from 'konva';
import { Stage, Layer, Text, Image } from 'react-konva';

function KonvaImageDemo(props) {


    const [seconds, setSeconds] = useState(0);
    const [isActive, setIsActive] = useState(false);
    const [homeScore, setHomeScore] = useState(0)
    const [awayScore, setAwayScore] = useState(0)

    let yoda = require('../images/yoda.jpg');
    let lion = require("../images/roar-lion.jpg");
    //let yoda = require('../images/yoda.jpg');
    //const lion = require("../images/yoda22.png");
    //const yoda = require('../images/yoda.jpg');
    //const lion = require("../images/lion.png");

    const imageConvertor = (imageSource) => {

      //Konva requires a window.image object, this function converts an image to such an object
      var imageObj = new window.Image();
    
      imageObj.src = imageSource
      return imageObj
    }
    
    useEffect(() => {

        lion = require("../images/roar-lion.jpg")
        yoda = require('../images/yoda.jpg');

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

    },[])
    
    

    return (
        <div>
        <Stage width={700} height={700}>
        <Layer>
          
          <Image
            x={0}
            y={0}
            image={imageConvertor(lion)}
            //image={imageConvertor(require('../../images/yoda.jpg'))}
          />

          <Image
            x={0}
            y={300}
            image={imageConvertor(lion)}
            //image={imageConvertor(require('../../images/yoda.jpg'))}
          />

          <Image
            x={300}
            y={0}
            image={imageConvertor(yoda)}
          />

          <Image
            x={300}
            y={300}
            image={imageConvertor(yoda)}
          />
          

        </Layer>
        </Stage>

        </div>
    );
}

export default KonvaImageDemo;