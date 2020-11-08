import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import Home from './screens/Home'
import NewGame from './screens/NewGame';

const App = () => (
  <Router>
    <Switch>
      <Route exact path='/'>
        <Home />
      </Route>
      <Route path='/new-game'>
        <NewGame />
      </Route>
    </Switch>
  </Router>
)

export default App
