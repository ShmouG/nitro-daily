import React from 'react';
import Navigation from './components/Nav/navbar';
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Card from './components/Card/Card';
import './App.css';

function App() {
  return (
    // <Router>
    <div className="App">
      <Card />
      {/* <Switch>
          <Route exact path="/" component={About} />
          <Route exact path="/books" component={Books} />
          <Route exact path="/books/:id" component={Detail} />
          <Route component={NoMatch} />
        </Switch> */}
      <Navigation />
    </div>
    /* </Router> */
  );
}

export default App;
