import React from 'react'
import { useNavigate } from 'react-router-dom';
import { baseStyles } from '../../globalStyles/baseStyles';
import MotiveList from './MotiveList';

const MotiveHome: React.FC = () => {
    const baseClasses = baseStyles()
    const navigate = useNavigate();
    
    const CreateMotiveButton = () => {
        return (
            <button
                onClick={() => navigate('/motives/create')}
            >
                Add Motive
            </button>
        )
    }

    return (
        <div style={baseClasses.contentContainer}>
            <CreateMotiveButton />
            <MotiveList />
        </div>
    )
}

export default MotiveHome