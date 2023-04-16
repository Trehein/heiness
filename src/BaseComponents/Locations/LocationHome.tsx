import React from 'react'
import { useNavigate } from 'react-router-dom';
import { baseStyles } from '../../globalStyles/baseStyles';
import LocationList from './LocationList';

const FactionHome: React.FC = () => {
    const baseClasses = baseStyles()
    const navigate = useNavigate();
    
    const CreateLocationButton = () => {
        return (
            <button
                onClick={() => navigate('/factions/create')}
            >
                Add Location
            </button>
        )
    }

    return (
        <div style={baseClasses.contentContainer}>
            <CreateLocationButton />
            <LocationList />
        </div>
    )
}

export default FactionHome