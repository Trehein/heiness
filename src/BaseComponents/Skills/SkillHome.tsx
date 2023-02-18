import React from 'react'
import { generalStyles } from '../../generalStyles'
import CreateSkillController from '../Forms/SkillForms/CreateSkill/CreateSkillController'
// import SkillList from './SkillList'

const SkillHome: React.FC = () => {
    const generalClasses = generalStyles()

    return (
        <div style={generalClasses.contentContainer}>
            <CreateSkillController />
            {/* <SkillList /> */}
        </div>
    )
}

export default SkillHome