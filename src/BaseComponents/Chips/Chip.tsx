import React from 'react'
import { IconEnum } from '../Icons/IconEnums'
import Icon from '../Icons/Icon'

export type ChipStylesParams = {
    backgroundColor: string,
    textColor?: string | undefined,
    fontSize?: string | undefined,
    iconSize?: string | undefined,
    isOutlined?: boolean
}

export const chipStyles = (params: ChipStylesParams) => {
    const {backgroundColor, textColor, fontSize, iconSize, isOutlined} = params
    return {
        chipContainer: {
            border: isOutlined ? '1.5px solid black' : 'none',
            backgroundColor: backgroundColor,
            color: textColor,
            borderRadius: '2em',
            display: 'flex',
            alignItems: 'center',
            margin: '.25em',
            fontSize: fontSize ? fontSize : '.75em',
            padding: '.5em .75em',
            height: 'fit-content'
        },
        chipIconContainer: {
            marginRight: '.5em'
        },
        text: {
            fontWeight: 800
        },
        chipIcon: {
            color: 'black',
            size: iconSize ? iconSize : '1.25em',
            stroke: 'orange',
        }
    }
}

export type ChipProps = {
    text: string,
    primaryColor: string,
    iconEnum?: IconEnum, 
    iconSize?: string,
    isOutlined?: boolean,
    // secondaryColor?: string,
    textColor?: string,
}

const Chip: React.FC<ChipProps> = (props) => {
    const {iconEnum, text, textColor, primaryColor, isOutlined, iconSize} = props
    const chipClasses = chipStyles({
        backgroundColor: primaryColor,
        textColor: textColor,
        isOutlined: isOutlined,
        iconSize: iconSize
    })
    return (
        <div style={chipClasses.chipContainer}>
            {iconEnum && <div style={chipClasses.chipIconContainer}><Icon iconEnum={iconEnum} styleParams={chipClasses.chipIcon}/></div>}
            <div style={chipClasses.text}>
                {text}
            </div>
        </div>
    )
}

export default Chip