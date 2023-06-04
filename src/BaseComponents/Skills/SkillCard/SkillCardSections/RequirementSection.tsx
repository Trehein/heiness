import React from 'react'
import { FocusObj } from '../../../Forms/SkillForms/CreateSkill/CreateSkillFormSections/RequiredFocusSection'

export type RequirementSectionProps = {
    requiredFocus: FocusObj
}

export const getRequiredArray = (requiredFocusObj: any) => {
    const requiredFocusKeys = Object.keys(requiredFocusObj)
    const filteredKeys = requiredFocusKeys.filter((key: any) => {
        return requiredFocusObj[key] > 0
    })
    const mappedKeys = filteredKeys.map((key: string) => {
        return {
            name: key,
            amount: requiredFocusObj[key]
        }
    })
    return mappedKeys
}

export const requirementSectionStyles = () => {
    return {
        requiredFocusGroupContainer: {
            width: '95%',
            margin: '.25em auto',
            fontSize: '.85em',
            display: 'flex',
            flexWrap: 'wrap' as 'wrap'
        },
        requiredFocusSlot: {
            width: '50%'
        }
    }
}

const RequirementSection: React.FC<RequirementSectionProps> = (props) => {
    const { requiredFocus } = props
    const requirementSectionClasses = requirementSectionStyles()
    getRequiredArray(requiredFocus)
    return (
        <div style={requirementSectionClasses.requiredFocusGroupContainer}>
            {getRequiredArray(requiredFocus).map((focus: any) => {
                return (
                    <div style={requirementSectionClasses.requiredFocusSlot}>
                        {focus.name} {focus.amount}
                    </div>
                )
            })}
        </div>
    )
}

export default RequirementSection