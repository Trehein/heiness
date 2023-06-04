import React from 'react'
import { DamageTypeEnums } from '../../../Forms/SkillForms/CreateSkill/CreateSkillFormSections/DamageSection'

export type DamageSectionProps = {
    damage: number
    damageType: DamageTypeEnums
}

export const damageSectionStyles = () => {
    return {
        damageSectionContainer: {
            width: '50%',
            fontSize: '.75em',
            justifyContent: 'start'
        }
    }
}

const DamageSection: React.FC<DamageSectionProps> = (props) => {
    const {damage, damageType} = props
    const damageSectionClasses = damageSectionStyles()
    return (
        <div style={damageSectionClasses.damageSectionContainer}>
            <div>Damage: {damage}</div>
            <div>DamageType{damageType}</div>
        </div>
    )
}

export default DamageSection