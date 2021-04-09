import React from 'react'
import { BrowserRouter as Router, Switch, Redirect } from 'react-router-dom'
import Route from './route'
import Home from 'home'

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Redirect exact from="/" to="/home" />
        <Route path="/home" layout="secondary" component={() => <Home />} />
      </Switch>
    </Router>
  )
}

export default Routes
