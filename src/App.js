import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom'
import MatchBoard from './matchboard/MatchBoard.js'
import ControlBoard from './controlboard/ControlBoard.js'
import ControlBoardContextProvider from './contexts/ControlBoardContextProvider'
import ScoreBoardContextProvider from './contexts/ScoreBoardContextProvider'
import ScoreClockContextProvider from './contexts/ScoreClockContextProvider'
import ClockContextProvider from './contexts/ClockContextProvider'
import Playerslist from './themes/football/Playerslist'
import Statistics from './themes/football/Statistics'
import MasterClock from './controlboard/MasterClock'
import Basketball from './themes/basketball/Basketball.js'
import Hokey from './themes/hokey/Hokey.js'

const App = () => {
  return (
    <div className="App">
      <ControlBoardContextProvider>
        <ScoreBoardContextProvider> 
          <ScoreClockContextProvider> 
            <ClockContextProvider>
              <Router>
                <Route exact path='/controlboard' component={ControlBoard}/>        
                <Route exact path='/matchboard' component={MatchBoard}/>            
                <Route exact path='/playerslist' component={Playerslist}/>            
                <Route exact path='/statistics' component={Statistics}/>            
                <Route exact path='/masterclock' component={MasterClock}/>            
                <Route exact path='/basketball' component={Basketball}/>            
                <Route exact path='/hokey' component={Hokey}/>            
              </Router>
            </ClockContextProvider>
          </ScoreClockContextProvider> 
        </ScoreBoardContextProvider>
      </ControlBoardContextProvider>
    </div>
  );
}

export default App;
