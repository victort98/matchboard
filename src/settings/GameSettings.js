import React, {useState} from 'react'
import FootballSettings from '../settings/FootballSettings'
import BasketballSettings from '../settings/BasketballSettings'

const GameSettings = (props) => {
  const [selectedGame, setSelectedGame] = useState('football')
  //const [room, setRoom] = useState("default")
  //console.log(room)
  //console.log(props)
  
  return (
    <div>
      <div style={{margin: '5px auto'}}>
      <h6 style={{color: 'rgb(0, 142, 207)', margin: '3px', textAlign: 'center'}}>SELECT A GAME</h6>
      <select className="select-game" 
        style={{padding: '5px 5px', fontSize: '16px', width: '395px', borderRadius: '10px', 
          outline: 'none', margin: '0 auto', display:'flex'}}
        onChange={e=>setSelectedGame(e.target.value)}>
        <option value="football">FOOTBALL</option>
        <option value="basketball">BASKETBALL</option>
        <option value="hockey">HOCKEY</option>
      </select>
      <h6 style={{color: 'rgb(0, 142, 207)', margin: '3px', textAlign: 'center'}}>ENTER ROOM NAME</h6> 
      <input type="text" className="select-game" placeholder="default"
        style={{padding: '5px 5px', fontSize: '16px', width: '395px', borderRadius: '10px', textAlign: 'left', color: "black", 
          outline: 'none', margin: '0 auto', display:'flex'}}
          onChange={e=>props.setSocketRoom(e.target.value)}
        >
      </input>
    </div> 
    <hr/>
      {(selectedGame==='football')?
      <FootballSettings/>
      :(selectedGame==='basketball')?
      <BasketballSettings/>:
      null}
    </div>
  )
}

export default GameSettings
