import React from 'react'
import { navBarStyles } from './navBarStyles'
import drawerStore, { DrawerContentEnum, DrawerStoreState } from '../../stores/drawerStore'

const NavBar: React.FC = () => {
    const navBarClasses = navBarStyles()

    const {drawerStoreState, setDrawerStoreState} = drawerStore(
        (state: {drawerStoreState: DrawerStoreState; setDrawerStoreState: any}) => ({
            drawerStoreState: state.drawerStoreState,
            setDrawerStoreState: state.setDrawerStoreState
        })
    )

    console.log(drawerStoreState)

    return (
        <div style={navBarClasses.navBarContainer}>
            <button
                onClick={() => setDrawerStoreState({isOpen: !drawerStoreState.isOpen, drawerContentEnum: !drawerStoreState.isOpen ? DrawerContentEnum.Nav : undefined})}
            >
                NavButton
            </button>
            NavBar
        </div>
    )
}

export default NavBar