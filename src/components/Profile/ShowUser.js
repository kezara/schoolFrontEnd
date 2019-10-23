import React from 'react'

const ShowUser = (props) => {
    const style={
        padding: 0,
        margin:0,
        background: "rgb(221,221,221)",
        fontWeight: 1000,
        textTransform: "uppercase"
    }
    return (
        <tr>
            <td>{props.user.FirstName}</td>
            <td>{props.user.LastName}</td>
            <td>{props.user.UserName}</td>
            <td>{props.user.Email}</td>
            {(props.role==="admins") && <td><button style={style} onClick={() => props.edit(props.user)}>Izmeni profil</button></td>}
        </tr>
    )
}

export default ShowUser