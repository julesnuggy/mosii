import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Home from './screens/Home'
import styles from './App.module.scss'

const App = () => (
  <Router>
    <Switch exact path='/'>
      <Home />
    </Switch>
  </Router>
)

export default App
