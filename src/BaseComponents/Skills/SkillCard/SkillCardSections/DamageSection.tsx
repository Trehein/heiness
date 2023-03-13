import React from 'react'
import { DamageTypeEnums } from '../../../Forms/SkillForms/CreateSkill/CreateSkillFormSections/DamageSection'

export type DamageSectionProps = {
    damage: number
    damageType: DamageTypeEnums
}

// desc
const DamageSection: React.FC<DamageSectionProps> = (props) => {
    const {damage, damageType} = props
    return (
        <div>
            <div>Damage: {damage}</div>
            <div>DamageType{damageType}</div>
        </div>
    )
}

export default DamageSection