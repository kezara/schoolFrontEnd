import React, {Component} from 'react'
import { BrowserRouter as Router, Route, Switch, Link, NavLink, Redirect} from "react-router-dom"
import AdminDash from './Admin/AdminDash'
import ParentDash from './Parent/ParentDash'
import TeacherDash from './Teacher/TeacherDash'
import StudentDash from './Student/StudentDash'
import TopNavBar from './topNavbar/TopNavbar'

class Dashboard extends Component{
    constructor(){
        super()
        this.state={
            isChecking: true,
            token: null,
            role:'',
            username: ''
        }
    }

    componentDidMount(){
        this.setState({isChecking: false})
        let json = localStorage.getItem('user')
        let tokenParse = JSON.parse(json)
        this.setState({token: tokenParse===null ? null : tokenParse.access_token,
                       role: tokenParse===null ? null : tokenParse.role,
                       username: tokenParse===null ? null : tokenParse.username})
    }
    render(){
        if(this.state.isChecking)
        {
            return(
                <p>Loading....</p>
            )
        }
        else if(this.state.token === null)
        {
            return (
                <Redirect to={{pathname: "/login"}}/>
            )
        }
        else {
                switch (this.state.role) {
                    case "admins":
                        return(<AdminDash />)
                        break;
                    case "teachers":
                        return(<TeacherDash />)
                        break;
                    case "students":
                        return(<StudentDash/>)
                        break;
                    case "parents":
                        return(<ParentDash />)
                            break;
                
                    default:
                        break;
                }
        }
    }
}

export default Dashboard
