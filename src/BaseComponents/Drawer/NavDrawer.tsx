import React from 'react'
import { useNavigate } from 'react-router-dom';

export type NavRoute = {
    label: string,
    onClick: Function,
    text: string
}

export const navDrawerStyles = () => {
    return {
        navDrawerContainer: {
            display: 'flex',
            flexDirection: 'column' as 'column',
            border:'1px solid blue',
            height: '100%'
        }
    }
}

export type NavButtonProps = {
    navRoute: NavRoute
}

export const NavButton: React.FC<NavButtonProps> = (props) => {
    const {label, onClick, text} = props.navRoute

    return (
        <button
            onClick={() => onClick()}
        >
            {text}
        </button>
    )
}

const NavDrawer: React.FC = () => {
    const navigate = useNavigate();
    const navDrawerClasses = navDrawerStyles()

    const navRoutes: any[] = [
        {
            label: 'Navigate to Player Home',
            onClick: () => {navigate('/player-home')},
            text: 'Player',
        },
        {
            label: 'Navigate to Dungeon Master Home',
            onClick: () => {navigate('/dm-home')},
            text: 'Dungeon Master',
        }
    ]

    return (
        <div style={navDrawerClasses.navDrawerContainer}>
            {
                navRoutes.map((navRoute: NavRoute) => {
                    return (
                        <NavButton navRoute={navRoute}/>
                    )
                })
            }
        </div>
    )
}

export default NavDrawer