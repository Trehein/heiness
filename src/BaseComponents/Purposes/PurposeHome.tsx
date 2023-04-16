import React from 'react'
import { useNavigate } from 'react-router-dom';
import { baseStyles } from '../../globalStyles/baseStyles';
import PurposeList from './PurposeList';

const PurposeHome: React.FC = () => {
    const baseClasses = baseStyles()
    const navigate = useNavigate();
    
    const CreateMotiveButton = () => {
        return (
            <button
                onClick={() => navigate('/purposes/create')}
            >
                Add Purpose
            </button>
        )
    }

    return (
        <div style={baseClasses.contentContainer}>
            <CreateMotiveButton />
            <PurposeList />
        </div>
    )
}

export default PurposeHome