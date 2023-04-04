import React from 'react'
import { useNavigate } from 'react-router-dom';
import { generalStyles } from '../../generalStyles';
import PersonalityTraitList from './PersonalityTraitList';

const PersonalityTraitHome: React.FC = () => {
    const generalClasses = generalStyles()
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
        <div style={generalClasses.contentContainer}>
            <CreatePersonalityTraitButton />
            <PersonalityTraitList />
        </div>
    )
}

export default PersonalityTraitHome