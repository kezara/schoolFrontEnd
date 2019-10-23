import React, { Component } from 'react'
import { fetchProfile } from '../common/Api'
import Loader from '../common/Loader'
import ProfileForm from '../Profile/ProfileForm'
import { BrowserRouter as Router, Route, Switch, Link, NavLink, Redirect} from "react-router-dom"

const userData={
    UserName:"",
    FirstName:"",
    LastName: "",
    emailaddress: ""
}

export default class Profile extends Component {
    constructor(){
        super()
        this.state={
            isChecking: true,
            profile: {},
            edit: false,
            token: null,
            role: '',
            user: {
                ...userData
            },
            showUser:true
        }
    }

    async componentDidMount(){
        let user = JSON.parse(localStorage.getItem('user'))
        if(user === null)
        {
            this.setState({token: null,
                            isChecking: false})
        }
        else {
            let profileData = await fetchProfile(user.role, user.UserId, user.access_token)
            this.setState({isChecking: false, 
                           profile: profileData,
                           token: user===null ? null : user.access_token,
                           role: user===null ? null : user.role})
        }
    }

    onEditClick = (user) =>{
        this.setState({showUser: false})
        alert(user)
    }

    handleSubmit= (event) =>{
        alert("SUBMIT")
    }

    render() {
        if(this.state.isChecking)
        {
            return <Loader />
        }
        else if(this.state.token === null){
            return(
                <Redirect to={{pathname: "/login"}}/>
            )
        }else{
            return (
                <div>
                    <ProfileForm data={this.state.profile}
                                 showUser={this.state.showUser}
                                 onEditClick={this.onEditClick}
                                 handleSubmit={this.handleSubmit}/>
                </div>
            )
        }
    }
}
