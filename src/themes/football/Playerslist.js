import React from 'react'
import { Stage, Layer, Rect, Text, Image} from 'react-konva';
import { useSpring, animated } from 'react-spring';
import useImage from 'use-image';
import FieldImage from '../../images/football.png'

const Playerslist = () => {

  const FrontGroundImage = () => {
    const [image] = useImage(FieldImage);   
    return (<Image image={image} x={235} y={33} width={825} height={555} opacity={0.6}/>);
  };

  const fadeTransition = useSpring({
    from: {opacity:0, marginLeft:-100, marginRight: 100},
    to: {opacity: 1, marginLeft: 0, marginRight: 0}
  })

  const ListBar= () =>{
    let bars = [];
    for (let i=0; i<11; i++) {
      bars[i] = (
        <Rect key={i} x={170} y={115+(i*39)} width={940} height={35}
              opacity={0.9} shadowOffset= {{ x: 1, y: 10 }} shadowOpacity= {0.9}        
          fill={'#fff'} align="center" shadowBlur={10} cornerRadius = {[70, 70, 70, 70]}
        />
      );      
    }   
    return bars
  }  

  const teamOnePlayersName = ['Marcus Astvald', 'Simon Amin', 'Per Ågren', 'Samuel Adrian', 'Mattias Adelstam', 
    'Anders Ahlström', 'Peter Abelsson', 'Sargon Abraham', 'Hans Andersson', 'Joel Anell', 'Johan Anegrund']
  
  const teamTwoPlayersName = ['Sebastian Larsson', 'Kim Källström', 'Andreas Granqvist', 'Mikael Lustig', 'Marcus Berg', 
    'Martin Olsson', 'Jimmy Durmaz', 'Emil Forsberg', 'Albin Ekdal', 'Viktor Claesson', 'Robin Olsen']

  const playersList= (xCoord, yCoord, lineDist, textArray) =>{
    let list = [];
    for (let i=0; i<11; i++) {
      list[i] = (
        <Text key={i} x={xCoord} y={yCoord+(i*lineDist)} 
          fontSize={20} wrap="char" fill='#453e7d'
          text={i+1 + ' ' + textArray[i]}
        />
      );
    }
    return list
  }

  return (
    <div style={{display: 'flex', justifyContent: 'center', background:'green', zIndex:-1}}>
    <svg className="background" viewBox="0 0 1884.241 1080.446" style={{zIndex:0, height:620}}>
      <path fill="rgba(0, 179, 0, 0.99)" stroke="rgba(0, 61, 0, 1)" stroke-width="100px" stroke-linejoin="miter" stroke-linecap="butt" 
        stroke-miterlimit="4" shape-rendering="auto" id="Path_4" 
        d="M 418.5040283203125 -2.817545237121521e-07 
          L 1465.7373046875 -2.817545237121521e-07 
          C 1696.870727539063 -2.817545237121521e-07 1884.241333007813 192.5970764160156 1884.241333007813 430.1777038574219 
          L 1884.241333007813 650.2685546875 
          C 1884.241333007813 887.84912109375 1696.870727539063 1080.4462890625 1465.7373046875 1080.4462890625 
          L 418.5040283203125 1080.4462890625 
          C 187.3706207275391 1080.4462890625 7.441341836056381e-07 887.84912109375 7.441341836056381e-07 650.2685546875 
          L 7.441341836056381e-07 430.1777038574219 
          C 7.441341836056381e-07 192.5970764160156 187.3706207275391 -2.817545237121521e-07 418.5040283203125 -2.817545237121521e-07 
          Z">
      </path>
    </svg>
     <animated.div style={fadeTransition} >
      <Stage width={1280} height={620} style={{zIndex:10}}>        
        <Layer style={{zIndex:10}}>  
          <FrontGroundImage/>
          <Rect x={170} y={60} width={940} height={50} opacity={0.9} stoke={'white'} strokeWidth={4}  
            shadowOffset= {{ x: 1, y: 10 }} shadowOpacity= {0.5}  
            fill="#3498DB" align="center" shadowBlur={10} cornerRadius = {[70, 70, 70, 70]}
          />       
          <Text x={290} y={75} fontSize={30} wrap="char" fill="#fff"
            text="MALMÖ FF"
          />         
          <Text x={790} y={75} fontSize={30} wrap="char" fill="#fff"
            text="DJURGÅRDEN" 
          />           
          <ListBar/>
          {playersList(290, 125, 39, teamOnePlayersName)}   
          {playersList(790, 125, 39, teamTwoPlayersName)}   
        </Layer>
      </Stage>
     </animated.div>
    </div>
  )
}

export default Playerslist
