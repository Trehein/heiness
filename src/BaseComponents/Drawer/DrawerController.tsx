import React from 'react'
import Drawer from './Drawer'
import drawerStore, { DrawerContentEnum, DrawerStoreState } from '../../stores/drawerStore';
import NavDrawer from './NavDrawer';

const DrawerChild: React.FC = () => {
    const {drawerStoreState} = drawerStore(
        (state: {drawerStoreState: DrawerStoreState;}) => ({
            drawerStoreState: state.drawerStoreState,
        })
    )

    return (
        <>
            {drawerStoreState.drawerContentEnum === DrawerContentEnum.Nav && <NavDrawer />}
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