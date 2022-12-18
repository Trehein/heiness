import React from 'react'
import { generalStyles } from '../../generalStyles'
import CreateSkill from '../Forms/SkillForms/CreateSkill/CreateSkillController'
// import SkillList from './SkillList'

const SkillHome: React.FC = () => {
    const generalClasses = generalStyles()

    return (
        <div style={generalClasses.screenContainer}>
            <CreateSkill />
            {/* <SkillList /> */}
        </div>
    )
}

export default SkillHome