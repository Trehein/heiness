import React from 'react'
import { IconEnum } from './IconEnums'
import IconSelector from './IconSelector'
import IconStyleWrapper from './IconStyleWrapper'

export type IconProps = {
    iconEnum: IconEnum,
    styleParams: any
}

const Icon: React.FC<IconProps> = (props) => {
    const {iconEnum, styleParams} = props

    return (
        <IconStyleWrapper styleParams={styleParams}>
            <IconSelector iconEnum={iconEnum}/>
        </IconStyleWrapper>
    )
}

export default Icon