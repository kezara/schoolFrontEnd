import React, { Component } from 'react'
import "./Sidebar.css";
import { BrowserRouter as Router, Route, Switch, Link, NavLink, Redirect} from "react-router-dom"


export default class Sidebar extends Component {
    render() {
        return (
            
      
      <div className="sidebar">
      <ul className="sideul">
      <li>
          <NavLink activeClassName="active" to="/">Home</NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" exact to="/about">About</NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" exact to="/contact">Contact</NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" exact to="/help">Help</NavLink>
        </li>
        </ul>
        </div>
    
        )
    }
}
