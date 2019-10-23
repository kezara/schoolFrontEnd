import React from "react"

const CreateInput = props =>{
    return(
        <tr>
            <td>{props.user.FirstName}</td>
            <td>{props.user.LastName}</td>
            <td>{props.user.UserName}</td>
            <td>{props.user.Email}</td>
            <td><input type="submit" value="smini izmene"/></td>
        </tr>
    )
    
    //return displayProfile(props.data.profile, fieldNames,props.handleChange,props.handleClick,props.handleSubmit,props.editState)
}

export default CreateInput

const fieldNames = new Map([['UserName', 'Korisnicko ime'], ['FirstName', "Ime"], ['LastName', "Prezime"]])

//fieldNames MAP, profileObject is JSON string, edit boolean, onChange and onClick event handlers
const displayProfile = (profileObject, fieldNames, change,click,submit,edit) =>{
    let a =[]
    let object = undefined
    let role = JSON.parse(localStorage.getItem('user')).role
    let email=JSON.parse(localStorage.getItem('user')).emailaddress
    if ( role === "parents") {
        object = profileObject.Parent
    }
    else{
        object = profileObject
    }
    let objectProperties = Object.getOwnPropertyNames(object)

    if (!edit) {
        objectProperties.forEach(element => {
            if(fieldNames.has(element))
            {
                a.push(<label>{fieldNames.get(element)}: 
                            <input type="text" 
                                    value={object[element]}
                                    disabled
                                    name={element}
                            />
                        </label>)
                if(role === "admins")
                {
                    a.push(<button onClick={()=>{click(object[element])}}>Edit Profile</button>)
                }
            }
        })
        a.push(<label>Email:
            <input type="email"
                    value={email==="N/A"?"Email nije@unet.com":email}
                    name="emailaddress"
                    disabled/>
            </label>)
        if(role === "admins")
        {
            a.push(<button onClick={()=>{click("emailaddress")}}>Edit Profile</button>)
        }
    } else if(edit && role === "admins"){
        objectProperties.forEach(element => {
            if(fieldNames.has(element))
            {
                a.push(<label>{fieldNames.get(element)}:
                            <input type="text"
                                   name={element}
                                   value={object[element]}
                                   onChange={change}
                            />
                        </label>)
            }
        }
        )
        a.push(<label>Email: <input type="email"
                                        value={email==="N/A"?"Email nije@unet.com":email}
                                        name="emailaddress"
                                        onChange={change}/>
                    </label>)
        a.push(<input type="submit" name="submit" value="Snimi izmene"/>)
        a.push(<button>Cancel</button>)
    }

    // objectProperties.forEach(element=>{
    //     if (fieldNames.has(element)) {
    //         if(!edit){
    //             a.push(<label>{fieldNames.get(element)}: 
    //                         <input type="text" 
    //                                 value={object[element]}
    //                                 disabled
    //                                 name={element}
    //                         />
    //                     </label>)
    //         }else if (edit && role=="admins"){
    //             a.push(<label>{fieldNames.get(element)}:
    //                         <input type="text"
    //                                name={element}
    //                                value={change}
    //                                onChange={change}
    //                         />
    //                     </label>)
    //             a.push(<label>Email: <input type="email"
    //                                         value={email==="N/A"?"Email nije@unet.com":email}
    //                                         name="emailaddress"
    //                                         onChange={change}/>
    //                     </label>)
    //             a.push(<input type="submit" name="submit" value="Snimi izmene"/>)
    //             a.push(<button>Cancel</button>)
    //         }
    //     }
    // })

    return a
}