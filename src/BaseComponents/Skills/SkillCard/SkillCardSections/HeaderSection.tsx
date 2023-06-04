import React from 'react'
import { skillCardStyles } from '../skillCardStyles'
import Chip from '../../../Chips/Chip'
import { IconEnum } from '../../../Icons/IconEnums'
import { baseTheme } from '../../../../globalStyles/theme'
import { BaseAttributeEnum } from '../../../../constants/enums/baseAttributeEnums'

export type HeaderSectionProps = {
    actionPointCost: number
    cardCost: any
    title: string
    useDifficulty: string
}

export const stringToBaseAttributeEnumMapper = (initialString: string) => {
    const baseEnumArray: Array<BaseAttributeEnum> = [
        BaseAttributeEnum.AGILITY,
        BaseAttributeEnum.CONSTITUTION,
        BaseAttributeEnum.INTELLIGENCE,
        BaseAttributeEnum.STRENGTH,
        BaseAttributeEnum.WILD,
        BaseAttributeEnum.WISDOM
    ]

    let returnEnum: BaseAttributeEnum = BaseAttributeEnum.AGILITY

    baseEnumArray.forEach((baseAttributeEnum: BaseAttributeEnum) => {
        if(baseAttributeEnum === initialString) {
            returnEnum = baseAttributeEnum
        }
    })

    return returnEnum
}

const HeaderSection: React.FC<HeaderSectionProps> = (props) => {
    const { actionPointCost, cardCost, title, useDifficulty } = props
    const skillCardClasses = skillCardStyles()
    const allCardCostKeys: Array<string> = Object.keys(cardCost)
    const filteredCardCostKeys = allCardCostKeys.filter((cardCostKey: string) => {
        return cardCost[cardCostKey] > 0
    })

    return (
        <div className='cardSectionContainer' style={skillCardClasses.cardSectionContainer}>
            <Chip 
                text={useDifficulty} 
                primaryColor={'white'} 
                iconEnum={IconEnum.Difficulty} 
                isOutlined={true}
                iconSize='1em'
            />
            <div style={skillCardClasses.titleContainer}>{title}</div>

            <Chip text={`AP ${actionPointCost}`} primaryColor={'white'} isOutlined={true}/>
            {filteredCardCostKeys.map((cardCostKey: any) => {
                return (
                    <>
                        <Chip 
                            text={`${cardCost[cardCostKey]}`} 
                            primaryColor={baseTheme.attributes[stringToBaseAttributeEnumMapper(cardCostKey)].darkColor} 
                            textColor={baseTheme.attributes[stringToBaseAttributeEnumMapper(cardCostKey)].textColor}
                        />
                    </>
                )
            })}
        </div>
    )
}

export default HeaderSection