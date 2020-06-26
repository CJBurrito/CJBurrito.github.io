import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from './pages/Main';
import Porfolio from './pages/Portfolio';

function App() {
  return (
    <Router>
      <div className="main">
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/Portfolio" component={Porfolio} />
          <Route path='/github' component={() => {
            window.location.href = 'https://github.com/CJBurrito';
            return null;
          }} />
          <Route path='/linkedIn' component={() => {
            window.location.href = 'https://www.linkedin.com/in/christian-balentine-610189126/';
            return null;
          }} />
        </Switch>
      </div>
    </Router>
  )
}

export default App;
