import React, {useState, useEffect, useContext, useRef} from 'react'
import Konva from 'konva'
import { Stage, Layer, Text} from 'react-konva';
import {ClockContext} from '../contexts/ClockContextProvider'
import {socket} from '../socket/socket';
import { Spring, animated } from 'react-spring/renderprops-konva';

const Clock = () => {
  const [info, setInfo] = useState('')
  const [time, setTime] = useState('00:00')
  const [color, setColor] = useState('#ddd')
  const [position, setPositin] = useState(0)

  const {countTime, startClock, resetClock} = useContext(ClockContext)

  useEffect(()=>{
    socket.on('clockInfo', (data)=>{
      setInfo(data)
    })   
  },[])

  useEffect(()=>{
    if (info === 'start') {
      // startClock()
      setInterval(() => {
        setTime(countTime())
      }, 1000);
    }
    
  }, [info])

  // useEffect(()=>{
  //   let timeStarted;
  //   if (info === 'start') {
  //     startClock()
  //     timeStarted = setInterval(() => {
  //       setTime(countTime())
  //     }, 300);   
  //   } else if(info === 'stop'){
  //     stopClock()
  //     clearInterval(timeStarted)
  //   } else if(info === 'reset'){
  //     resetClock()
  //   }
  // }, [info, setInfo, countTime, startClock, stopClock, resetClock])


  const textRef = useRef()
  useEffect(()=>{
    setTimeout(() => {
      textRef.current.attrs.fill = '#000'
      setColor('#456654')
           setPositin(250)
    }, 5000);
  }, [])

  const FollowerClock = () => {

    return (
      <Text ref={textRef} x={position} y={10} fontSize={65} wrap="char" fill={color} 
      text={time}/>
    )
  }

  console.log(textRef)
  return (
    
    <div style={{display: 'flex', justifyContent: 'center'}}>
      <Stage y={50} width={580} height={720}>
        <Layer>
          {FollowerClock()}
        </Layer>      
      </Stage>
    </div>
  )
}

export default Clock
