import { SetState, StoreApi, UseBoundStore, create } from "zustand"

export enum DrawerContentEnum {
    Nav = 'Nav'
}

export type DrawerStoreState = {
    isOpen: boolean,
    drawerContentEnum: DrawerContentEnum | undefined
}

export const defaultDrawerStoreState: DrawerStoreState = {
    isOpen: false,
    drawerContentEnum: undefined
}

const drawerStore: UseBoundStore<StoreApi<any>> = create((set: any) => ({
    drawerStoreState: {...defaultDrawerStoreState},
    setDrawerStoreState: (drawerStoreState: DrawerStoreState) => {
        set(() => ({ drawerStoreState }))
    },
    resetDrawerStoreState: () => {
        set(() => ({ ...defaultDrawerStoreState }))
    }
}))

export default drawerStore