import React from 'react'
import { useNavigate } from 'react-router-dom';
import { MapToBoxButtonArray } from '../../ComponentArrays/MapToBoxButtonArray/MapToBoxButtonArray';
import { baseStyles } from '../../globalStyles/baseStyles';
import BoxArray from '../BoxArray/BoxArray';

const PlayerHome: React.FC = () => {
    const baseClasses = baseStyles()
    const navigate = useNavigate();

    const playerHomeButtonData: any[] = [
        {
            label: 'Navigate to Campaigns',
            onClick: () => {navigate('/player-campaigns')},
            text: 'Campaigns',
        },
        {
            label: 'Navigate to Characters',
            onClick: () => {navigate('/characters')},
            text: 'Characters',
        },
    ]
    return (
        <div style={baseClasses.screenContainer}>
            <BoxArray 
                ChildComponentArray={MapToBoxButtonArray({
                    dataArray: playerHomeButtonData,
                    boxWidth: '75%', 
                    boxHeight: `${window.innerHeight / 4}`,
                    fontSize: '1.5em' 
                })}
                boxContainerWidth='33%'
            />
        </div>
    )
}

export default PlayerHome