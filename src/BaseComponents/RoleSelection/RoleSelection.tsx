import React from 'react'
import { useNavigate } from 'react-router-dom'
import { MapToBoxButtonArray } from '../../ComponentArrays/MapToBoxButtonArray/MapToBoxButtonArray'
import { generalStyles } from '../../generalStyles'
import BoxArray from '../BoxArray/BoxArray'

const RoleSelection: React.FC = () => {
    const navigate = useNavigate();

    const roleSelectionButtonData: any[] = [
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

    const generalClasses = generalStyles()

    return (
        <div style={generalClasses.screenContainer}>
            <BoxArray 
                ChildComponentArray={MapToBoxButtonArray({ 
                    dataArray: roleSelectionButtonData, 
                    boxWidth: '75%', 
                    boxHeight: `${window.innerHeight / 4}`,
                    fontSize: '1.5em' 
                })} 
            />
        </div>
    )
}

export default RoleSelection