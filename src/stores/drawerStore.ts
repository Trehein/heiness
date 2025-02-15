import { create } from 'zustand'

export enum DrawerContentEnum {
    Nav = 'Nav'
}

export type DrawerState = {
    isOpen: boolean,
    drawerContentEnum: DrawerContentEnum | undefined
}

export const defaultDrawerState: DrawerState = {
    isOpen: false,
    drawerContentEnum: undefined
}

export interface DrawerStoreState {
    drawerState: DrawerState,
    setDrawerState: (drawerStateParams: DrawerState) => void,
    resetDrawerState: () => void,
}

const drawerStore = create<DrawerStoreState>()((set) => ({
    drawerState: defaultDrawerState,
    setDrawerState: (drawerStateParams: DrawerState) => set((state: DrawerStoreState) => ({ drawerState: drawerStateParams})),
    resetDrawerState: () => set((state: DrawerStoreState) => ({ drawerState: defaultDrawerState}))
}))

export default drawerStore