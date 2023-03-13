import React from 'react'
import { BaseAttributeObj } from '../../../Forms/SkillForms/CreateSkill/CreateSkillFormSections/UseCostSection'

export type HeaderSectionProps = {
    actionPointCost: number
    cardCost: BaseAttributeObj
    title: string
}

const HeaderSection: React.FC<HeaderSectionProps> = (props) => {
    const { actionPointCost, cardCost, title } = props
    return (
        <div>
            <div>AP Cost {actionPointCost}</div>
            <div>Title {title}</div>
            <div>card Cost {cardCost.Agility}</div>
        </div>
    )
}

export default HeaderSection