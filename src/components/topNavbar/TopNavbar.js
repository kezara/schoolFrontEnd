import React from "react";
import "./TopNavbar.css";
import {profile} from '../common/Api'
import { BrowserRouter as Router, Route, Switch, Link, NavLink, Redirect} from "react-router-dom"

const TopNavBar = props => {

  if(localStorage.getItem('user')===null)
  {
    return(
      <Redirect to="/"/>
    )
  }

  const handleClick = () => {
      localStorage.removeItem('user')
  }
  
  let styles = {
    backgroundColor: "lightblue"
  }  


  const userID = JSON.parse(localStorage.getItem('user')).UserId
  const role = JSON.parse(localStorage.getItem('user')).role
  const token = JSON.parse(localStorage.getItem('user')).access_token

  switch (role) {
    case "students":
      styles.backgroundImage  = "linear-gradient(to right, red, purple)"
      break;
    case "parents":
      styles.backgroundImage  = "linear-gradient(to right, purple, blue)"
      break;
    case "teachers":
      styles.backgroundImage  = "linear-gradient(to right, blue, lightblue)"
      break;
    case "admins":
        styles.backgroundImage  = "linear-gradient(to right, lightblue, lightgreen)"
        break;
  
    default:
      break;
  }

  return (
    <nav style={styles}>
      <div className="avatar">
        <Link to="/profile"><img src="./avatar.png" alt=""/></Link>
      </div>
      <div className="menu">
      <ul className="topUl">
      <li className="topLi">
          <NavLink activeClassName="active" to="/">Home</NavLink>
        </li>
        <li className="topLi">
          <NavLink activeClassName="active" exact to="/about">About</NavLink>
        </li>
        <li className="topLi">
          <NavLink activeClassName="active" exact to="/contact">Contact</NavLink>
        </li>
        <li className="topLi">
          <NavLink activeClassName="active" exact to="/help">Help</NavLink>
        </li>
        </ul>
        </div>
        <div className="logo hitTheFloor">
          eSchool Diary
        </div>
        <div className="logout">
          <ul className="logoutul topUl"> 
            <li className="topLi">
              <NavLink activeClassName="active" onClick={handleClick} exact to="/">Log Out</NavLink>
            </li>
          </ul>
        </div>
    </nav>
  );
};

export default TopNavBar;