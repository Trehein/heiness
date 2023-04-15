import React from 'react'
import { IconContext } from 'react-icons'

export type IconStyleWrapperProps = {
    children: React.ReactNode
}

const IconStyleWrapper: React.FC<IconStyleWrapperProps> = (props) => {
    const {children} = props
    return (
        <IconContext.Provider value={{}}>
            {children}
        </IconContext.Provider>
    )
}

export default IconStyleWrapper