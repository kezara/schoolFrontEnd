import React, { Component } from 'react';
import FormLogin from './FormLogin';
import {login} from '../common/Api'
import Loader from '../common/Loader';
// import AdminDash from '../Admin/AdminDash';
// import { BrowserRouter as Router, Route, Switch, Link, NavLink, Redirect} from "react-router-dom"

class Login extends Component {
    constructor(props){
        super(props);
        this.state={
            isChecking: true,
            username: '',
            password: '',
            token: null,
            role: '',
            error: ''
        }
    }

    handleInputChange = (event) => {
        const target = event.target
        const name = target.name
        const value = target.type === "checkbox" ? target.checked : target.value
        this.setState({
                [name]: value
            })
        }
    
    handleSubmit = async event => {
        event.preventDefault();
        
        let token = await login(this.state.username,this.state.password)
        alert(token)
        //checking if user has typed correct user name or password
        if(token.user.access_token === undefined || token.user.access_token === null)
        {
            //if username or password are incorrect display error message
            this.setState({error: token.user.error_description})
        }
        else
        {
            localStorage.setItem('user', JSON.stringify(token.user))
            //this.setState({token:token.user.access_token,
                           //role: token.user.role})
            this.props.history.push('/dashboard')
        }
    }

    componentDidMount(){
        //checking if user is logged / logged out
        this.setState({isChecking: false})
        let json = localStorage.getItem('user')
        let tokenParse = JSON.parse(json)
        this.setState({token: tokenParse===null ? null : tokenParse.access_token,
                       role: tokenParse===null ? null : tokenParse.role,
                       error: tokenParse===null ? null : tokenParse.error_description})
    }
        
    render() {
        if(this.state.isChecking)
        {
            return(
                <Loader/>
            )
        }
        else if(this.state.token === null || this.state.token === undefined){
            return (
                <FormLogin onSubmit={this.handleSubmit}
                           onChange={this.handleInputChange}
                           data={this.state}
                />
            )
        }
        else return (
            <>
            {this.props.history.push('/dashboard')}</>)
    }
}

export default Login