import React from 'react'
import { Stage, Layer, Rect, Text} from 'react-konva';
import { useSpring, animated } from 'react-spring';

const Playerslist = () => {

  const fadeTransition = useSpring({
    from: {opacity:0, marginLeft:-100, marginRight: 100},
    to: {opacity: 1, marginLeft: 0, marginRight: 0}
  })

  const listBar= () =>{
    let bars = [];
    for (let i=0; i<11; i++) {
      bars[i] = (
        <Rect x={170} y={115+(i*39)} width={940} height={35}
          shadowOffset= {{ x: 1, y: 5 }} shadowOpacity= '0.5'        
          fill={((i/2)===0)?'#ddd':'#fff'} align="center" shadowBlur={10} cornerRadius = {[70, 70, 70, 70]}
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
          <Text x={xCoord} y={yCoord+(i*lineDist)} fontSize={20} wrap="char" fill='#453e7d'
            text={i+1 + ' ' + textArray[i]}
          />
      );
    }
    return list
  }

  return (
    <div style={{display: 'flex', justifyContent: 'center'}}>
     <animated.div style={fadeTransition}>
      <Stage width={1280} height={720}>
        <Layer>
          <Rect x={170} y={60} width={940} height={50}
            shadowOffset= {{ x: 1, y: 10 }} shadowOpacity= '0.5'        
            fill="#fff" align="center" shadowBlur={10} cornerRadius = {[70, 70, 70, 70]}
          />       
          <Text x={290} y={75} fontSize={30} wrap="char"
            text="MALMÖ FF"
          />         
          <Text x={790} y={75} fontSize={30} wrap="char"
            text="DJURGÅRDEN" 
          />           
          {listBar()}  
          {playersList(290, 125, 39, teamOnePlayersName)}   
          {playersList(790, 125, 39, teamTwoPlayersName)}   
        </Layer>
      </Stage>
      </animated.div>
    </div>
  )
}

export default Playerslist
