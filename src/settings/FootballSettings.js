import React from 'react'
import { Link } from 'react-router-dom'

const FootballSettings = () => {
  return (       
    <div style={{display: 'flex', flexWrap: 'wrap', placeContent: 'end center'}}>
      <Link to='/matchfixture' style={{ textDecoration: 'none' }}>
         <input type="button" value="MATCH FIXTURES"/>
      </Link>  
      <Link to='/admin' style={{ textDecoration: 'none' }}>
         <input type="button" value="PLAYERS LIST"/>
      </Link> 
      <Link to='/leaguetable' style={{ textDecoration: 'none' }}>
         <input type="button" value="POINT TABLE"/>
      </Link> 
      <Link to='/admin' style={{ textDecoration: 'none' }}>
         <input type="button" value="STATISTICS"/>
      </Link> 
    </div>
  )
}

export default FootballSettings
