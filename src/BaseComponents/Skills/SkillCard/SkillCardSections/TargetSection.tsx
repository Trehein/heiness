import React from 'react'
import { TargetEnums } from '../../../Forms/SkillForms/CreateSkill/CreateSkillFormSections/TargetSection'

export type TargetSectionProps = {
    affected: TargetEnums
    target: TargetEnums
}

export const targetSectionStyles = () => {
    return {
        targetSectionContainer: {
            width: '50%',
            fontSize: '.75em',
            justifyContent: 'start'
        }
    }
}

const TargetSection: React.FC<TargetSectionProps> = (props) => {
    const { affected, target } = props
    const targetSectionClasses = targetSectionStyles()
    return (
        <div style={targetSectionClasses.targetSectionContainer}>
            <div>Target: {target}</div>
            <div>Affected: {affected}</div>
        </div>
    )
}

export default TargetSection