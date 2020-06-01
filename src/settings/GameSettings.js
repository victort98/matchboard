import React, {useState} from 'react'
import FootballSettings from '../settings/FootballSettings'
import BasketballSettings from '../settings/BasketballSettings'

const GameSettings = () => {
  const [selectedGame, setSelectedGame] = useState('football')
  
  return (
    <div>
      <div style={{margin: '5px auto'}}>
      <h6 style={{color: '#7f7f7f', margin: '3px', textAlign: 'center'}}>SELECT A GAME</h6>
      <select className="select-game" 
        style={{padding: '5px 5px', fontSize: '16px', width: '275px', borderRadius: '10px', 
        outline: 'none', margin: '0 auto', display:'flex'}}
        onChange={e=>setSelectedGame(e.target.value)}>
        <option value="football">FOOTBALL</option>
        <option value="basketball">BASKETBALL</option>
        <option value="hockey">HOCKEY</option>
      </select>
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
