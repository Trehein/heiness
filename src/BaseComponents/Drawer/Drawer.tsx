import React, { useState } from 'react'
import drawerStore, { DrawerStoreState } from '../../stores/drawerStore';
import { animated, useTransition } from '@react-spring/web';

export type DrawerProps = {
    children: React.ReactNode | any
}

const Drawer: React.FC<DrawerProps> = (props) => {
    const {children} = props
    const {drawerStoreState, setDrawerStoreState} = drawerStore(
        (state: {drawerStoreState: DrawerStoreState; setDrawerStoreState: any}) => ({
            drawerStoreState: state.drawerStoreState,
            setDrawerStoreState: state.setDrawerStoreState
        })
    )

    const screenSizeFunction = () => {
        return window.innerWidth < 421;
    };

    let scrollHeight = Math.max(
        document.body.scrollHeight, document.documentElement.scrollHeight,
        document.body.offsetHeight, document.documentElement.offsetHeight,
        document.body.clientHeight, document.documentElement.clientHeight
      );

    console.log('scrollheight', scrollHeight)

    const backgroundTransition = useTransition(drawerStoreState.isOpen, {
        from: { opacity: 0 },
        enter: { 
            opacity: 1,       
            height: scrollHeight,
            position: 'absolute',
            top: 0,
            zIndex: '99' },
        leave: { opacity: 0 },
        reverse: drawerStoreState.isOpen,
      })

      const drawerTransition = useTransition(drawerStoreState.isOpen, {
        from: { x: -1000 },
        enter: { 
          x: 0, 
          position: 'fixed',
          top: 0,
          zIndex: '100' },
        leave: { x: -1000 },
        reverse: drawerStoreState.isOpen
      })


    return (
        <div>
            {drawerTransition((styles, item) => item && 
                <animated.div style={styles}>
                    <div 
                        style={{
                        width: screenSizeFunction() ? document.documentElement.clientWidth : '33vw', 
                        height: window.innerHeight, 
                        backgroundColor: 'white', 
                        // opacity: .65,
                        zIndex: 100,
                        }}
                    >
                        {children}
                    </div>
                </animated.div>
            )}
            {backgroundTransition((styles, item) => item && 
                <animated.div style={styles}>
                    <div 
                        style={{
                        width: document.documentElement.clientWidth, 
                        height: scrollHeight, 
                        backgroundColor: 'black', 
                        opacity: .65,
                        zIndex: 99,
                        }}
                        onClick={() => setDrawerStoreState({isOpen: false, drawerContentEnum: undefined})}
                    />
                </animated.div>
            )}
        </div>
    )
}

export default Drawer