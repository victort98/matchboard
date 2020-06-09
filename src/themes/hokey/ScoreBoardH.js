import React from 'react'
import ClockH from './ClockH'

const ScoreBoardH = () => {
    return (
          <div className='sll'>
             <ClockH/>
                <input className="score bol" type="numbere" name="0"
                placeholder=""/>
                 <input className="score bol5" type="numbere" name="0"
                placeholder="     1SD"/>
              <input className="score bol1" type="numbere" name="0"
                placeholder="  HOME"/>
               <input className="score bol2" type="numbere" name="0"
                placeholder="0"/>
                <input className="score bol3" type="numbere" name="0"
                placeholder="     GUEST"/>
                <input className="score bol4" type="numbere" name="0"
                placeholder="0"/> 
               
               <div>
                  <input className="score bol6" type="numbere" name="0"
                    placeholder=" 2:00"/> 
                  <input className="score bol7" type="numbere" name="0"
                    placeholder="55"/>
                 <input className="score bol8" type="numbere" name="0"
                    placeholder=""/> 
                 <input className="score bol9" type="numbere" name="0"
                    placeholder=""/>
               </div>
               <div className="tem2">
                  <input className="score bol6" type="numbere" name="0"
                    placeholder=" 2:00"/> 
                  <input className="score bol7" type="numbere" name="0"
                    placeholder="12"/>
                 <input className="score bol8" type="numbere" name="0"
                    placeholder="34"/> 
                 <input className="score bol9" type="numbere" name="0"
                    placeholder=" 5:00"/>
               </div>
              
         </div>
    )
}
export default  ScoreBoardH

