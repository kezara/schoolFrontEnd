import React from 'react'
import Sidebar from '../sideBar/Sidebar'
import TopNavBar from '../topNavbar/TopNavbar'
import ShowUser from './ShowUser'
import './ProfileForm.css'
import '../common/common.css'
import EditUser from './EditUser'
import './EditUser.css'

const ProfileForm = (props) => {
    let profileObject = props.data.profile
    let role = JSON.parse(localStorage.getItem('user')).role
    return(
        <div>
            <TopNavBar/>
            <Sidebar/>
            <div className="content">
                <h1>Podaci korisnika</h1>
            {props.showUser?(
                <table>
                    <thead>
                        <tr>
                            <th>Ime</th>
                            <th>Prezime</th>
                            <th>Korisnicko ime</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        <ShowUser user={(role==="parents")?profileObject.Parent:profileObject}
                                  edit={props.onEditClick}
                                  role={role}/>
                    </tbody>
                </table>):
                (
                    <form onSubmit={props.handleSubmit}>
                        <div className="divClass">
                            <EditUser user={profileObject}/>
                        </div>
                    </form>
                )
            }
                </div>
            </div>
    )
}

export default ProfileForm
