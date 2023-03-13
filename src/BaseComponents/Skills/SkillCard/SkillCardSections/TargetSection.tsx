import React from 'react'
import { TargetEnums } from '../../../Forms/SkillForms/CreateSkill/CreateSkillFormSections/TargetSection'

export type TargetSectionProps = {
    affected: TargetEnums
    target: TargetEnums
}

// desc
const TargetSection: React.FC<TargetSectionProps> = (props) => {
    const { affected, target } = props
    return (
        <div>
            <div>Target: {target}</div>
            <div>Affected: {affected}</div>
        </div>
    )
}

export default TargetSection