import React from 'react'
import { useNavigate } from 'react-router-dom';
import { MapToBoxButtonArray } from '../../ComponentArrays/MapToBoxButtonArray/MapToBoxButtonArray';
import { generalStyles } from '../../generalStyles'
import BoxArray from '../BoxArray/BoxArray';

const DmHome: React.FC = () => {
    const generalClasses = generalStyles()
    const navigate = useNavigate();

    const dmHomeButtonData: any[] = [
        {
            label: 'Navigate to Campaigns',
            onClick: () => {navigate('/dm-campaigns')},
            text: 'Campaigns',
        },
        {
            label: 'Navigate to Events',
            onClick: () => {navigate('/events')},
            text: 'Events',
        },
        {
            label: 'Navigate to Factions',
            onClick: () => {navigate('/factions')},
            text: 'Factions',
        },
        {
            label: 'Navigate to Items',
            onClick: () => {navigate('/items')},
            text: 'Items',
        },
        {
            label: 'Navigate to Locations',
            onClick: () => {navigate('/locations')},
            text: 'Locations',
        },
        {
            label: 'Navigate to Motives',
            onClick: () => {navigate('/motives')},
            text: 'Motives',
        },
        {
            label: 'Navigate to Personality Traits',
            onClick: () => {navigate('/personality-traits')},
            text: 'Personality Traits',
        },
        {
            label: 'Navigate to Physical Traits',
            onClick: () => {navigate('/physical-traits')},
            text: 'Physical Traits',
        },
        {
            label: 'Navigate to Skills',
            onClick: () => {navigate('/skills')},
            text: 'Skills',
        },
        {
            label: 'Navigate to Units',
            onClick: () => {navigate('/stories')},
            text: 'Stories',
        },
        {
            label: 'Navigate to Units',
            onClick: () => {navigate('/units')},
            text: 'Units',
        }
    ]

    return (
        <div style={generalClasses.screenContainer}>
            <BoxArray 
                ChildComponentArray={MapToBoxButtonArray({
                    dataArray: dmHomeButtonData,
                    boxWidth: '75%', 
                    boxHeight: `${window.innerHeight / 4}`,
                    fontSize: '1.5em' 
                })}
                boxContainerWidth='33%'
            />
        </div>
    )
} 

export default DmHome