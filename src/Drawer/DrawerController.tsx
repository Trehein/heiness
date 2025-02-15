import React from 'react'
import Drawer from './Drawer'
import NavDrawer from './NavDrawer';
import drawerStore, { DrawerContentEnum, DrawerStoreState } from '../stores/drawerStore';

const DrawerChild: React.FC = () => {
    const drawerState = drawerStore((state: DrawerStoreState) => state.drawerState)

    return (
        <>
            {drawerState.drawerContentEnum === DrawerContentEnum.Nav && <NavDrawer />}
        </>
    )
}

const DrawerController: React.FC = () => {
    return (
        <Drawer 
            children={<DrawerChild />} 
        />
    )
}

export default DrawerController