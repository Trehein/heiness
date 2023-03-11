import React from 'react'
import { useNavigate } from 'react-router-dom'
import { generalStyles } from '../../generalStyles'
import SkillList from './SkillList'

const SkillHome: React.FC = () => {
    const generalClasses = generalStyles()
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
        <div style={generalClasses.contentContainer}>
            <CreateSkillButton />
            <SkillList />
        </div>
    )
}

export default SkillHome