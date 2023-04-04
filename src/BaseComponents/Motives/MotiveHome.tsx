import React from 'react'
import { useNavigate } from 'react-router-dom';
import { generalStyles } from '../../generalStyles';
import MotiveList from './MotiveList';

const MotiveHome: React.FC = () => {
    const generalClasses = generalStyles()
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
        <div style={generalClasses.contentContainer}>
            <CreateMotiveButton />
            <MotiveList />
        </div>
    )
}

export default MotiveHome