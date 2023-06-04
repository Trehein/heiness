import React from 'react'
import { AreaEnums } from '../../../Forms/SkillForms/CreateSkill/CreateSkillFormSections/AreaRangeSection'

export type AreaRangeSectionProps = {
    areaOfEffect: number
    areaType: AreaEnums
    range: number
}

export const areaRangeSectionStyles = () => {
    return {
        areaRangeSectionContainer: {
            width: '50%',
            fontSize: '.75em',
            justifyContent: 'start'
        }
    }
}

const AreaRangeSection: React.FC<AreaRangeSectionProps> = (props) => {
    const { areaOfEffect, areaType, range } = props
    const areaRangeClasses = areaRangeSectionStyles()
    return (
        <div style={areaRangeClasses.areaRangeSectionContainer}>
            <div>Range: {range}</div>
            <div>Area of Effect: {areaOfEffect}</div>
            <div>Area Type: {areaType}</div>
        </div>
    )
}

export default AreaRangeSection