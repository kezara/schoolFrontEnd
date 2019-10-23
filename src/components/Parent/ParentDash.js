import React from 'react'
import TopNavBar from '../topNavbar/TopNavbar'
import Sidebar from '../sideBar/Sidebar'
import '../common/common.css'

const ParentDash = () => {
    return (
        <div>
            <TopNavBar/>
            <Sidebar/>
            <div className="content">
            <h1>PARENT DASHBOARD</h1>
            </div>
        </div>
    )
}

export default ParentDash
