import React from 'react'
import { useNavigate } from 'react-router-dom';
import { generalStyles } from '../../generalStyles';
import FactionList from './FactionList';

const FactionHome: React.FC = () => {
    const generalClasses = generalStyles()
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
        <div style={generalClasses.contentContainer}>
            <CreateFactionButton />
            <FactionList />
        </div>
    )
}

export default FactionHome