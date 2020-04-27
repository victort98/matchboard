import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ControlBoard from './controlboard/ControlBoard';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/ControlBoard" component={ControlBoard}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
