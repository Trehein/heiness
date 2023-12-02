import React from 'react'
import { navBarStyles } from './navBarStyles'
import drawerStore, { DrawerContentEnum, DrawerStoreState } from '../../stores/drawerStore'
import IconButton from '../Buttons/IconButton'
import { GiHamburgerMenu } from "react-icons/gi";

const NavBar: React.FC = () => {
    const navBarClasses = navBarStyles()

    const {drawerStoreState, setDrawerStoreState} = drawerStore(
        (state: {drawerStoreState: DrawerStoreState; setDrawerStoreState: any}) => ({
            drawerStoreState: state.drawerStoreState,
            setDrawerStoreState: state.setDrawerStoreState
        })
    )

    return (
        <div style={navBarClasses.navBarContainer}>
            <div style={navBarClasses.iconButtonContainer}>
                <IconButton 
                    IconComponent={<GiHamburgerMenu />} 
                    onClick={() => setDrawerStoreState({isOpen: !drawerStoreState.isOpen, drawerContentEnum: !drawerStoreState.isOpen ? DrawerContentEnum.Nav : undefined})}            
                />
            </div>
        </div>
    )
}

export default NavBar