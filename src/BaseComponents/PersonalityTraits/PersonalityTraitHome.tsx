import React from 'react'
import { useNavigate } from 'react-router-dom';
import { baseStyles } from '../../globalStyles/baseStyles';
import PersonalityTraitList from './PersonalityTraitList';

const PersonalityTraitHome: React.FC = () => {
    const baseClasses = baseStyles()
    const navigate = useNavigate();
    
    const CreatePersonalityTraitButton = () => {
        return (
            <button
                onClick={() => navigate('/personality-traits/create')}
            >
                Add Personality Trait
            </button>
        )
    }

    return (
        <div style={baseClasses.contentContainer}>
            <CreatePersonalityTraitButton />
            <PersonalityTraitList />
        </div>
    )
}

export default PersonalityTraitHome