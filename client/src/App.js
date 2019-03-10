import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Interface from './pages/Interface';
import NoMatch from './pages/NoMatch';
import Characters from './pages/Characters';
import Char from './pages/Char';
// import Card from './components/Card/Card'; // use in Interface

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/home" component={Interface} />
          <Route exact path="/characters" component={Characters} />
          <Route exact path="/characters/:id" component={Char} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
