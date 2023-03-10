import React from 'react'
import SideNavbar from './SideNavbar'
import MainContainer from './MainContainer'
import { Outlet } from 'react-router-dom'

const Body = () => {
    return (
        <div className="flex">
            <SideNavbar />
            <Outlet />
        </div>
    )
}

export default Body