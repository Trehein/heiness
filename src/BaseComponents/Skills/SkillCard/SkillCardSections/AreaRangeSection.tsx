import React from 'react'
import { AreaEnums } from '../../../Forms/SkillForms/CreateSkill/CreateSkillFormSections/AreaRangeSection'

export type AreaRangeSectionProps = {
    areaOfEffect: number
    areaType: AreaEnums
    range: number
}

const AreaRangeSection: React.FC<AreaRangeSectionProps> = (props) => {
    const { areaOfEffect, areaType, range } = props
    return (
        <div>
            <div>Area of Effect: {areaOfEffect}</div>
            <div>Area Type: {areaType}</div>
            <div>Range: {range}</div>
        </div>
    )
}

export default AreaRangeSection