import React from 'react'
import NumberField from '../../../FormFields/NumberField'
import NumberSelectionBar from '../../../FormFields/NumberSelectionBar'
import { formStyles } from '../../../formStyles'
import { SkillFormStateObj } from '../../constants'

export type UseCostSectionProps = {
    skillFormStateObj: SkillFormStateObj,
    handleChangeValue: Function,
    handleChangeDynamicObjValue: Function
}

export type BaseAttributeObj = {
    'Agility': number,
    'Constitution': number,
    'Intelligence': number,
    'Strength': number,
    'Wild': number,
    'Wisdom': number
}

export const initialBaseAttributeObj = {
    'Agility': 0,
    'Constitution': 0,
    'Intelligence': 0,
    'Strength': 0,
    'Wild': 0,
    'Wisdom': 0
}

const UseCostSection: React.FC<UseCostSectionProps> = (props) => {
    const {skillFormStateObj, handleChangeValue, handleChangeDynamicObjValue} = props
    const {useDifficulty, actionPointCost, cardCost, coolDown} = skillFormStateObj
    const cardCostKeys = Object.keys(initialBaseAttributeObj)
    const formClasses = formStyles()
    
    return (
        <div style={{...formClasses.formGroupContainer, border: '1px solid blue'}}>
            {/* useDifficulty */}
            <NumberField 
                labelText={'Use Difficulty'} 
                fieldValue={useDifficulty} 
                targetField={'useDifficulty'} 
                stepAmount={5} 
                valueRange={{
                    minValue: 5,
                    maxValue: 25
                }} 
                handleChangeValue={handleChangeValue}            
            />
            {/* actionPointCost */}
            <NumberField 
                labelText={'Action Point Cost'} 
                fieldValue={actionPointCost} 
                targetField={'actionPointCost'} 
                stepAmount={1} 
                valueRange={{
                    minValue: 0,
                    maxValue: 10
                }} 
                handleChangeValue={handleChangeValue}            
            />
            {/* coolDown */}
            <NumberField 
                labelText={'Cool Down'} 
                fieldValue={coolDown} 
                targetField={'coolDown'} 
                stepAmount={1} 
                valueRange={{
                    minValue: 0,
                    maxValue: 5
                }} 
                handleChangeValue={handleChangeValue}            
            />
            {/* cardCost */}
            <label style={formClasses.formBarGroupLabel}>Base Attribute Card Cost</label>
            <div style={formClasses.formBarNumberFieldContainer}>
                {cardCostKeys.map((attribute: string, i: number) => {
                    return (
                        <div key={i} style={formClasses.formBarNumberField}>
                            <label style={formClasses.formNumberFieldLabel}>{attribute}</label>
                            <NumberSelectionBar
                                currentValue={cardCost[attribute]}
                                maxValue={3}
                                onClick={(value: number) => handleChangeDynamicObjValue(value, 'cardCost', attribute)}            
                            />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default UseCostSection