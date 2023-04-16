import React from 'react'
import { useNavigate } from 'react-router-dom'
import { baseStyles } from '../../globalStyles/baseStyles'
import SkillList from './SkillList'

const SkillHome: React.FC = () => {
    const baseClasses = baseStyles()
    const navigate = useNavigate();

    const CreateSkillButton = () => {
        return (
            <button
                onClick={() => navigate('/skills/create')}
            >
                Add example
            </button>
        )
    }

    return (
        <div style={baseClasses.contentContainer}>
            <CreateSkillButton />
            <SkillList />
        </div>
    )
}

export default SkillHome