import React from 'react'
import { StatusEnum } from '../../../../constants/enums/statusEnums'

export type StatusSectionProps = {
    setStatus: StatusEnum
    statusDuration: number
    coolDown: number
}

export const statusSectionStyles = () => {
    return {
        statusSectionContainer: {
            width: '50%',
            fontSize: '.75em',
            justifyContent: 'start'
        }
    }
}

const StatusSection: React.FC<StatusSectionProps> = (props) => {
    const { setStatus, statusDuration, coolDown } = props
    const statusSectionClasses = statusSectionStyles()
    return (
        <div style={statusSectionClasses.statusSectionContainer}>
            <div>Set Status: {setStatus}</div>
            <div>Status Duration: {statusDuration}</div>
            <div>Cool Down: {coolDown}</div>
        </div>
    )
}

export default StatusSection