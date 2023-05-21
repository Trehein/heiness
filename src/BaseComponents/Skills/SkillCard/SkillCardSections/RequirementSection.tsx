import React from 'react'
import { FocusObj } from '../../../Forms/SkillForms/CreateSkill/CreateSkillFormSections/RequiredFocusSection'

export type RequirementSectionProps = {
    requiredFocus: FocusObj
}

// required focus is Obj with keys, need to convert to array []
const RequirementSection: React.FC<RequirementSectionProps> = (props) => {
    const { requiredFocus } = props
    console.log(requiredFocus)
    return (
        <div>
            Required Focus {requiredFocus.Adaptation}
        </div>
    )
}

export default RequirementSection