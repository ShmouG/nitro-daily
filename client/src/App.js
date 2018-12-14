import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Card from './components/Card/Card';
import Navigation from './components/nav/navbar';
import './App.css';
import NoMatch from './pages/noMatch';
import About from './pages/About';

function App() {
  return (
    <Router>
    <div className="App">
      <Card>
      <Switch>
          <Route exact path="/" component={About} />
          <Route component={NoMatch} />
      </Switch>
      </Card>
      <Navigation />
    </div>
    </Router>
  );
}

export default App;
