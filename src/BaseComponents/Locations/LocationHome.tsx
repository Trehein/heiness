import React from 'react'
import { useNavigate } from 'react-router-dom';
import { generalStyles } from '../../generalStyles';
import LocationList from './LocationList';

const FactionHome: React.FC = () => {
    const generalClasses = generalStyles()
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
        <div style={generalClasses.contentContainer}>
            <CreateLocationButton />
            <LocationList />
        </div>
    )
}

export default FactionHome