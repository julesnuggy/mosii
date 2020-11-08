import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
} from 'react-router-dom';
import Home from './screens/Home'

const App = () => (
  <Router>
    <Switch exact path='/'>
      <Home />
    </Switch>
  </Router>
)

export default App
