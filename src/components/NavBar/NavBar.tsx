import React from 'react'
import { navBarStyles } from './navBarStyles'
import drawerStore, { DrawerContentEnum, DrawerStoreState } from '../../stores/drawerStore'
import IconButton from '../Buttons/IconButton'
import { GiHamburgerMenu } from "react-icons/gi";
// import { useStore } from 'zustand';

const NavBar: React.FC = () => {
    const navBarClasses = navBarStyles()
    const drawerState = drawerStore((state: DrawerStoreState) => state.drawerState)
    const setDrawerState = drawerStore((state: DrawerStoreState) => state.setDrawerState)

    console.log(drawerState)

    return (
        <div style={navBarClasses.navBarContainer}>
            <div style={navBarClasses.iconButtonContainer}>
                <IconButton 
                    IconComponent={<GiHamburgerMenu />} 
                    // onClick={()=> console.log('clicked')}
                    onClick={() => setDrawerState({isOpen: !drawerState.isOpen, drawerContentEnum: !drawerState.isOpen ? DrawerContentEnum.Nav : undefined})}            
                />
            </div>
        </div>
    )
}

export default NavBar