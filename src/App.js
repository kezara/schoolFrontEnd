import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './components/login/Login'
import NotFound from './NotFound'
import Dashboard from './components/Dashboard'
import Home from './components/Home'
import About from './components/About'
import Help from './components/Help'
import Contact from './components/Contact'
import { BrowserRouter as Router, Route, Switch, Link, NavLink} from "react-router-dom"
import Profile from './components/Profile/Profile';

function App (){
    return (
    <Router>
      <div className="App">
      <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/profile" component={Profile} />          
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/help" component={Help} />
          <Route component={NotFound} />
      </Switch>
      </div>
    </Router>
  );
}

export default App;
