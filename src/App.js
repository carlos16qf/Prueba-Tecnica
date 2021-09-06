import './App.css';
import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Challenge from './components/Challenge';
import InfoUsers from './components/InfoUsers'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Switch>
            <Route exact path={'/'}>
              <Challenge/>
            </Route>
            <Route exact path="/:id" component={InfoUsers} />
          </Switch>
        </Router>

       
      </header>
    </div>
  );
}

export default App;
