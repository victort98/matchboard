import React, {useEffect, useState} from 'react'
import Scoreboard from '../themes/football/Scoreboard'
import Statistics from '../themes/football/Statistics'
import Playerslist from '../themes/football/Playerslist'
import {socket} from '../socket/socket'

const MatchBoard = () => {
  const [screen, setScreen] = useState()

  useEffect(()=>{
    socket.on('board', (data)=>{
      setScreen(data)
      console.log(data);  
    })   
  },[screen])

  return (
<<<<<<< HEAD
    <div className="container-fluid text-center"> 
             
        {(screen==='statistics')?(
            <Statistics/>
         ):(<Scoreboard/>)
        }
       
      

    </div>
=======
    <>        
      {(screen==='statistics')?
        (<Statistics/>):
       (screen==='scoreboard')?
        (<Scoreboard/>):
       (screen==='playerslist')?
        (<Playerslist/>):
        (<Scoreboard/>)
      }
    </>
>>>>>>> ecbf5548812198ac99126b603daa1651e8db74a9
  )
}

export default MatchBoard
