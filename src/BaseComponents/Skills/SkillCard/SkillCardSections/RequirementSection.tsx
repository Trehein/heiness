import React from 'react'
import { FocusObj } from '../../../Forms/SkillForms/CreateSkill/CreateSkillFormSections/RequiredFocusSection'

export type RequirementSectionProps = {
    requiredFocus: FocusObj
}

// required focus []
const RequirementSection: React.FC<RequirementSectionProps> = (props) => {
    const { requiredFocus } = props
    return (
        <div>
            Required Focus {requiredFocus.Adaptation}
        </div>
    )
}

export default RequirementSection