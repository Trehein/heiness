import React, { useState } from 'react'
import { IconContext } from 'react-icons'

export type IconButtonProps = {
    IconComponent: React.ReactNode,
    onClick: Function
}

export const buttonStyles = (isHover: boolean) => {
    const buttonBoxShadow = isHover ?
        'rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(50, 50,93, .15) 0px 1px 1px, rgba(50, 50, 93, .15) 0px 1px 1px' :
        'rgba(9, 30, 66, .25) 0px 1px 1px, rgba(9, 30, 66, .13) 0px 0px 1px 1px'

    return {
        buttonContainer: {
            cursor: 'pointer',
            height: '100%',
            backgroundColor: 'white',
            padding: '.75em',
            borderRadius: '50%',
            border: 'intial',
            boxShadow: buttonBoxShadow
        },
        iconButtonContentContainer: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        }
    }
}

const IconButton: React.FC<IconButtonProps> = (props) => {
    const {IconComponent, onClick} = props
    const [isHover, setIsHover] = useState<boolean>(false)
    const buttonClasses = buttonStyles(isHover)

    return (
        <button
            style={buttonClasses.buttonContainer}
            onClick={() => onClick()}
            onMouseOver={() => {setIsHover(true)}}
            onMouseLeave={() => {setIsHover(false)}}
        >
            <div style={buttonClasses.iconButtonContentContainer}>
                <IconContext.Provider
                    value={{size: '1.5em'}}
                >
                    {IconComponent}
                </IconContext.Provider>
            </div>
        </button>
    )
}

export default IconButton