import React from 'react'
import { IconEnum } from './IconEnums'
import {GiLevelEndFlag} from 'react-icons/gi'

export type IconSelectorProps = {
    iconEnum: IconEnum
}

const IconSelector: React.FC<IconSelectorProps> = (props) => {
    const {iconEnum} = props
    return (
        <>
            {iconEnum === IconEnum.Difficulty && <GiLevelEndFlag />}
        </>
    )
}

export default IconSelector