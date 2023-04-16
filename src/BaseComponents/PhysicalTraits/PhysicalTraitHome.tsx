import React from 'react'
import PhysicalTraitList from './PhysicalTraitList';
import { useNavigate } from 'react-router-dom';
import { baseStyles } from '../../globalStyles/baseStyles';

const PhysicalTraitHome: React.FC = () => {
    const baseClasses = baseStyles()
    const navigate = useNavigate();
    
    const CreatePhysicalTraitButton = () => {
        return (
            <button
                onClick={() => navigate('/physical-traits/create')}
            >
                Add Physical Trait
            </button>
        )
    }

    return (
        <div style={baseClasses.contentContainer}>
            <CreatePhysicalTraitButton />
            <PhysicalTraitList />
        </div>
    )
}

export default PhysicalTraitHome