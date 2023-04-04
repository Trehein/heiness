import React from 'react'
import { useNavigate } from 'react-router-dom';
import { generalStyles } from '../../generalStyles';
import PurposeList from './PurposeList';

const PurposeHome: React.FC = () => {
    const generalClasses = generalStyles()
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
        <div style={generalClasses.contentContainer}>
            <CreateMotiveButton />
            <PurposeList />
        </div>
    )
}

export default PurposeHome