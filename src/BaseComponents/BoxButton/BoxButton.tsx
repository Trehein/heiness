import React from 'react'
import { boxButtonStyles } from './boxButtonStyles'

export type BoxButtonProps = {
    text: string
    label: string
    onClick: Function
    boxWidth: string
    boxHeight: string
    icon?: string | undefined
    iconPosition?: string | undefined
}

const BoxButton: React.FC<BoxButtonProps> = (props) => {
    const {onClick, label, icon, text, iconPosition, boxWidth, boxHeight} = props
    console.log(boxWidth)
    const boxButtonClasses = boxButtonStyles({height: boxHeight, width: boxWidth})

    return (
        <button onClick={() => onClick()} aria-label={label} style={boxButtonClasses.contentContainer}>
            {text}
        </button>
    )
}

export default BoxButton