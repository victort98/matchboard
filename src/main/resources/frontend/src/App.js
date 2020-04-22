import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Control from './Remote_control/Control';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/control" component={Control}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
