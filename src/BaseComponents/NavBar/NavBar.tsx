import React from 'react'
import { navBarStyles } from './navBarStyles'

const NavBar: React.FC = () => {
    const navBarClasses = navBarStyles()
    return (
        <div style={navBarClasses.navBarContainer}>
            NavBar
        </div>
    )
}

export default NavBar