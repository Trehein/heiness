import React from 'react'
import { useNavigate } from 'react-router-dom';
import { baseStyles } from '../../globalStyles/baseStyles';
import FactionList from './FactionList';

const FactionHome: React.FC = () => {
    const baseClasses = baseStyles()
    const navigate = useNavigate();
    
    const CreateFactionButton = () => {
        return (
            <button
                onClick={() => navigate('/factions/create')}
            >
                Add Faction
            </button>
        )
    }

    return (
        <div style={baseClasses.contentContainer}>
            <CreateFactionButton />
            <FactionList />
        </div>
    )
}

export default FactionHome