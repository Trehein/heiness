import React from 'react'
import { IconEnum } from '../Icons/IconEnums'
import Icon from '../Icons/Icon'

export const chipStyles = () => {
    return {
        chipContainer: {
            border: '1px solid red'
        }
    }
}

export type ChipProps = {
    text: string,
    primaryColor: string,
    iconEnum?: IconEnum, // todo - update when IconEnum in place
    isOutlined?: boolean,
    secondaryColor?: string,
    textColor?: string,
}

const Chip: React.FC<ChipProps> = (props) => {
    const {iconEnum, isOutlined, text, textColor, primaryColor, secondaryColor} = props
    const chipClasses = chipStyles()
    return (
        <div style={chipClasses.chipContainer}>
            {iconEnum && <Icon iconEnum={iconEnum}/>}
            {text}
        </div>
    )
}

export default Chip