import React from 'react'
import TopNavBar from '../topNavbar/TopNavbar'
import Sidebar from '../sideBar/Sidebar'
import '../common/common.css'

const TeacherDash = () => {
    return (
        <div>
            <TopNavBar/>
            <Sidebar/>
            <div className="content"><h1>TEACHER DASHBOARD</h1></div>
            
        </div>
    )
}

export default TeacherDash
