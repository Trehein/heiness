import React from 'react'
import { StatusEnums } from '../../../Forms/SkillForms/CreateSkill/CreateSkillFormSections/StatusSection'

export type StatusSectionProps = {
    setStatus: StatusEnums
    statusDuration: number
}

const StatusSection: React.FC<StatusSectionProps> = (props) => {
    const { setStatus, statusDuration } = props
    return (
        <div>
            <div>Set Status: {setStatus}</div>
            <div>Status Duration: {statusDuration}</div>
        </div>
    )
}

export default StatusSection