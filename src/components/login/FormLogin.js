import React from 'react'
import './login.css'

const FormLogin = (props) => {
    
            return (
                <div>
                  <div className="diarytexture">
                    <div className="loginform">
                      <p id="ebooktitle">
                        <strong>E-School Diary</strong>
                      </p>
                      {
                          props.data.error && <p style={{color: "red"}}>{props.data.error}</p>
                      }
                      <form onSubmit={props.onSubmit}>
                        <div className="col-25">
                          <label>Username</label>
                        </div>
                        <div className="col-75">
                          <input type="text" 
                                 name="username"
                                 value={props.data.username}
                                 placeholder="Enter username"
                                 onChange={props.onChange}/>
                        </div>
                        <div className="col-25">
                          <label>Password</label>
                        </div>
                        <div className="col-75">
                          <input type="password" 
                                 name="password" 
                                 value={props.data.password}
                                 placeholder="Enter password"
                                 onChange={props.onChange}/>
                        </div>
                        <div>
                            <button>Log in</button>
                        </div>
                      </form>                                                                                                                                                                     
                    </div>
                  </div>
                </div>
            )
        }
    export default FormLogin