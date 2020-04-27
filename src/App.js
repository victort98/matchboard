import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom'
import ScoreBoard from './scoreboard/ScoreBoard.js'
import ControlBoard from './controlboard/ControlBoard.js'
import ControlBoardContextProvider from './contexts/ControlBoardContextProvider'
import ScoreBoardContextProvider from './contexts/ScoreBoardContextProvider'
import ClockContextProvider from './contexts/ClockContextProvider'

const App = () => {
  return (
    <div className="App">
      <ControlBoardContextProvider>
        <ScoreBoardContextProvider> 
          <ClockContextProvider>
          <Router>
            <Route exact path='/controlboard' component={ControlBoard}/>        
            <Route exact path='/scoreboard' component={ScoreBoard}/>        
          </Router>
          </ClockContextProvider>
        </ScoreBoardContextProvider>
      </ControlBoardContextProvider>
    </div>
  );
}

export default App;
