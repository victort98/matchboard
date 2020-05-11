import React from "react";
import "./basketball.css";

const basketball=()=> {
  return (
    <div className="container">
      <div className="upperBox">
        <div className="leftSide">
          <ul>
            <li>
              <h2>HOME</h2>
            </li>
            <li input  placeholder type={Number} className="redPlaceholder">
                </li>
            <li>
              <h2>BONUS</h2>
            </li>
          </ul>
        </div>
        <div className="center">
          < input placeholder className="mainResultPlaceHolder"></input>
          <div >
            <ul  className="possPeriod">
              <li className="poss"><h2>POSS</h2></li>
              <li className="period"> <h2>PERIOD</h2> <placeholder className="greenPlaceholder"></placeholder> </li>
              <li className="poss"><h2>POSS</h2></li>
            </ul>
          </div>
        </div>
        <div className="rightSide">
          <ul>
            <li>
              <h2>GUEST</h2>
            </li>
            <li className="redPlaceholder">
            </li>
            <li>
              <h2>BONUS</h2>
            </li>
          </ul>
        </div>
      </div>
      <div className="lowerBox">
        <div >
          <ul className="rowOne">
            <li> <h2>FOULS</h2></li>
            <li> <h2>TOL</h2></li>
            <li> <h2>PLAYERS</h2></li>
            <li> <h2>POINTS</h2></li>
            <li> <h2>FOULS</h2></li>
            <li> <h2>TOL</h2></li>
            <li> <h2>PLAYERS</h2></li>
          </ul>
        </div>

        <div >
          <ul className="rowTwo">
     <li> <input placeholder></input></li>
     <li> <input placeholder></input></li>
     <li> <input placeholder></input></li>
     <li> <input placeholder></input></li>
     <li> <input placeholder></input></li>
     <li> <input placeholder></input></li>
     <li> <input placeholder></input></li>
         
            </ul>
        </div>

        
      </div>
      </div>
     
  )
}

export default basketball