import React from 'react'
import StrengthOrWeaknessList from './StrengthOrWeaknessList';
import { baseStyles } from '../../globalStyles/baseStyles';
import { useNavigate } from 'react-router-dom';

const StrengthOrWeaknessHome: React.FC = () => {
    const baseClasses = baseStyles()
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
        <div style={baseClasses.contentContainer}>
            <CreateStrengthOrWeaknessButton />
            <StrengthOrWeaknessList />
        </div>
    )
}

export default StrengthOrWeaknessHome