import React from 'react'
import StrengthOrWeaknessList from './StrengthOrWeaknessList';
import { generalStyles } from '../../generalStyles';
import { useNavigate } from 'react-router-dom';

const StrengthOrWeaknessHome: React.FC = () => {
    const generalClasses = generalStyles()
    const navigate = useNavigate();
    
    const CreateStrengthOrWeaknessButton = () => {
        return (
            <button
                onClick={() => navigate('/strengths-or-weaknesses/create')}
            >
                Add Strength or Weakness
            </button>
        )
    }

    return (
        <div style={generalClasses.contentContainer}>
            <CreateStrengthOrWeaknessButton />
            <StrengthOrWeaknessList />
        </div>
    )
}

export default StrengthOrWeaknessHome