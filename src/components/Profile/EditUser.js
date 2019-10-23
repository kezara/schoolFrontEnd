import React from "react"
import './EditUser.css'

const EditUser = props =>{
    return(
        <>
            <label className="inputLabel">Ime: </label>
            <input className="inputText" type="email" value={props.user.FirstName} onChnge={props.handleChange} name="firstname"/>
            <label className="inputLabel">Prezime: </label>
            <input className="inputText" type="text" value={props.user.LastName} onChnge={props.handleChange} name="lastname"/>
            <label className="inputLabel">Korisnicko ime: </label>
            <input className="inputText" type="text" value={props.user.UserName} onChnge={props.handleChange} name="username"/>
            <label className="inputLabel">Email: </label>
            <input className="inputText" type="email" value={props.user.Email} onChnge={props.handleChange} name="email"/>
            <input className="inputSubmit" type="submit" value="snimi izmene"/>
        </>
    )
}

export default EditUser