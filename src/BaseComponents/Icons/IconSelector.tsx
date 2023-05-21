import React from 'react'
import { IconEnum } from './IconEnums'
import {SiOpslevel} from 'react-icons/si'

export type IconSelectorProps = {
    iconEnum: IconEnum
}

const IconSelector: React.FC<IconSelectorProps> = (props) => {
    const {iconEnum} = props
    return (
        <>
            {iconEnum === IconEnum.Difficulty && <SiOpslevel />}
        </>
    )
}

export default IconSelector