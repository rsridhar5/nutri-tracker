import React, { Component } from 'react'
import { Switch, BrowserRouter as Router, Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

import Login from "./components/login"
import Homepage from "./components/homepage"
import Signup from "./components/signup"

function App() {
  return (
    <div>
      <Switch>

        <Router exact path={["/", "/home"]} render={(props) => (<Homepage />)}>
          <Homepage />
        </Router>

        <Router path="/login" render={(props) => (<Login />)}>
          <Login />
        </Router>

        <Router path="/signup" render={(props) => (<Signup />)}>
          <Signup />
        </Router>

      </Switch>
    </div>
  );
}

export default App;
