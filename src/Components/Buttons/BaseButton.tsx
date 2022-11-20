import React from 'react'

export type BaseButtonProps = {
    onClick: Function
    displayText: string
    labelText: string
}

const BaseButton: React.FC<BaseButtonProps> = (props) => {
    const { onClick, displayText, labelText } = props
    
    return (
        <button 
            onClick={() => onClick()}
            aria-label={labelText}    
        >
            {displayText}
        </button>
    )
}

export default BaseButton