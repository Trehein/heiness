import React from 'react'
import { IconEnum } from './IconEnums'
import IconSelector from './IconSelector'
import IconStyleWrapper from './IconStyleWrapper'

export type IconProps = {
    iconEnum: IconEnum
}

const Icon: React.FC<IconProps> = (props) => {
    const {iconEnum} = props
    return (
        <IconStyleWrapper>
            <IconSelector iconEnum={iconEnum}/>
        </IconStyleWrapper>
    )
}

export default Icon