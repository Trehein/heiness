import React from 'react'
import { boxButtonStyles } from './boxButtonStyles'

export type BoxButtonProps = {
    text: string
    label: string
    onClick: Function
    boxWidth: string
    boxHeight: string
    fontSize: string
    icon?: string | undefined
    iconPosition?: string | undefined
}

const BoxButton: React.FC<BoxButtonProps> = (props) => {
    const {onClick, label, fontSize, icon, text, iconPosition, boxWidth, boxHeight} = props
    console.log(boxHeight)
    const boxButtonClasses = boxButtonStyles({
        height: boxHeight, 
        width: boxWidth,
        fontSize: fontSize
    })

    return (
        <button onClick={() => onClick()} aria-label={label} style={boxButtonClasses.contentContainer}>
            {text}
        </button>
    )
}

export default BoxButton