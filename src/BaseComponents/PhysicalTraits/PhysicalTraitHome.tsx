import React from 'react'
import PhysicalTraitList from './PhysicalTraitList';
import { useNavigate } from 'react-router-dom';
import { generalStyles } from '../../generalStyles';

const PhysicalTraitHome: React.FC = () => {
    const generalClasses = generalStyles()
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
        <div style={generalClasses.contentContainer}>
            <CreatePhysicalTraitButton />
            <PhysicalTraitList />
        </div>
    )
}

export default PhysicalTraitHome