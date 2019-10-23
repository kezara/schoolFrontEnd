import React, { Component } from 'react'
import {Redirect} from "react-router-dom"

export default class Home extends Component {
    constructor(){
        super()
        this.state={
            token: null,
            isChecking: true
        }
    }

componentDidMount(){
    this.setState({isChecking: false})
    let json = localStorage.getItem('user')
    let tokenParse = JSON.parse(json)
    this.setState({token: tokenParse===null ? null : tokenParse.access_token}) 
}

    render() {
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
            return(
                <Redirect to={{pathname: "/dashboard"}}/>
            )
        }
    }
}

