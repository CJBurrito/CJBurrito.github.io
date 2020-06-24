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
        </Switch>
      </div>
    </Router>
  )
}

export default App;
