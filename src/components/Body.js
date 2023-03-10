import React from 'react'
import SideNavbar from './SideNavbar'
import MainContainer from './MainContainer'

const Body = () => {
    return (
        <div className="flex">
            <SideNavbar />
            <MainContainer />
        </div>
    )
}

export default Body