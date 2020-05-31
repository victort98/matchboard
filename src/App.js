import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import MatchBoard from './matchboard/MatchBoard'
import ControlBoardContextProvider from './contexts/ControlBoardContextProvider'
import ScoreBoardContextProvider from './contexts/ScoreBoardContextProvider'
import ScoreClockContextProvider from './contexts/ScoreClockContextProvider'
import ControlClockContextProvider from './contexts/ControlClockContextProvider'
import UserContextProvider from './contexts/UserContextProvider'

import Playerslist from './themes/football/Playerslist2'
import Statistics from './themes/football/Statistics2'
import MasterClock from './controlboard/MasterClock'
import Basketball from './themes/basketball/Basketball'
import Hockey from './themes/hockey/Hockey'
import UserLogin from './users/UserLogin'
import Register from './users/UserRegister'
import AdminPanel from './users/AdminPanel'
import OperatorPanel from './users/OperatorPanel'
import ProtectedRoutes from './routes/ProtectedRoutes'
import LeagueTable from './controlboard/LeagueTable'
import FootballFixtures from './themes/football/Fixtures'
import PointTable from './themes/football/PointTable'
import MatchFixture from './controlboard/MatchFixtures'

const App = () => {
  return (
    <div className="App">                
      <ControlBoardContextProvider>
        <ScoreBoardContextProvider> 
          <ScoreClockContextProvider> 
            <ControlClockContextProvider>
              <UserContextProvider>
                <Router>
                  <ProtectedRoutes/> 
                  <Route exact path='/' component={UserLogin}/>
                  <Route exact path='/register' component={Register}/>   
                  <Route exact path='/admin' component={AdminPanel}/>   
                  <Route exact path='/operator' component={OperatorPanel}/>   
                  <Route exact path='/matchboard' component={MatchBoard}/>            
                  <Route exact path='/playerslist' component={Playerslist}/>            
                  <Route exact path='/statistics' component={Statistics}/>            
                  <Route exact path='/masterclock' component={MasterClock}/> 
                  <Route exact path='/leaguetable' component={LeagueTable}/> 
                  <Route exact path='/matchfixture' component={MatchFixture}/>
                  <Route exact path='/basketball' component={Basketball}/>            
                  <Route exact path='/hockey' component={Hockey}/>            
                  <Route exact path='/footballfixtures' component={FootballFixtures}/>            
                  <Route exact path='/pointtable' component={PointTable}/>            
                </Router>
              </UserContextProvider>
            </ControlClockContextProvider>
          </ScoreClockContextProvider> 
        </ScoreBoardContextProvider>
      </ControlBoardContextProvider>
    </div>
  );
}

export default App;
