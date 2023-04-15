import React from 'react'
import { skillCardStyles } from '../skillCardStyles'
import Chip from '../../../Chips/Chip'
import { IconEnum } from '../../../Icons/IconEnums'

export type HeaderSectionProps = {
    actionPointCost: number
    cardCost: any
    title: string
    useDifficulty: string
}

const HeaderSection: React.FC<HeaderSectionProps> = (props) => {
    const { actionPointCost, cardCost, title, useDifficulty } = props
    const skillCardClasses = skillCardStyles()
    const allCardCostKeys: Array<string> = Object.keys(cardCost)
    const filteredCardCostKeys = allCardCostKeys.filter((cardCostKey: any) => {
        return cardCost[cardCostKey] > 0
    })

    return (
        <div className='cardSectionContainer' style={skillCardClasses.cardSectionContainer}>
            <Chip text={useDifficulty} primaryColor={'orange'} />
            <div>Title {title}</div>
            <Chip text={`AP ${actionPointCost}`} primaryColor={'orange'} />
            {filteredCardCostKeys.map((cardCostKey: any) => {
                return (
                    <>
                        <Chip text={`${cardCostKey}: ${cardCost[cardCostKey]}`} primaryColor={''} />
                    </>
                )
            })}
        </div>
    )
}

export default HeaderSection