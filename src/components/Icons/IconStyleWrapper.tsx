import React from 'react'
import { IconContext } from 'react-icons'

export type IconStyleWrapperProps = {
    children: React.ReactNode,
    styleParams: any
}

const IconStyleWrapper: React.FC<IconStyleWrapperProps> = (props) => {
    const {styleParams, children} = props

    return (
        <IconContext.Provider value={styleParams}>
            {children}
        </IconContext.Provider>
    )
}

export default IconStyleWrapper