import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom'
import ScoreBoard from './scoreboard/ScoreBoard.js'
import ScoreBoardContextProvider from './contexts/ScoreBoardContextProvider'
// import './App.css';

const App = () => {
  return (
    <div className="App">
      <ScoreBoardContextProvider>
        <Router>
          <Route exact path='/' component={ScoreBoard}/>        
        </Router>
      </ScoreBoardContextProvider>
    </div>
  );
}

export default App;
