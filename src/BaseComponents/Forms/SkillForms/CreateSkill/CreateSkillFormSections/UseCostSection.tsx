import React from 'react'
import NumberSelectionBar from '../../../FormFields/NumberSelectionBar'
import { formStyles } from '../../../formStyles'
import { initialBaseAttributeObj, SkillFormStateObj } from '../CreateSkillController'

export type UseCostSectionProps = {
    skillFormStateObj: SkillFormStateObj,
    handleChangeValue: Function,
    handleChangeDynamicObjValue: Function
}

const UseCostSection: React.FC<UseCostSectionProps> = (props) => {
    const {skillFormStateObj, handleChangeValue, handleChangeDynamicObjValue} = props
    const {useDifficulty, actionPointCost, cardCost, coolDown} = skillFormStateObj
    const cardCostKeys = Object.keys(initialBaseAttributeObj)
    const formClasses = formStyles()
    
    return (
        <div style={{...formClasses.formGroupContainer, border: '1px solid blue'}}>
            {/* useDifficulty */}
            <div style={formClasses.formNumberField}>
                <label style={formClasses.formNumberFieldLabel}>Base Use Difficulty</label>
                <input 
                    type="number"
                    min='5'
                    max='25'
                    step='5'
                    value={useDifficulty}
                    onChange={(e) => handleChangeValue(e, 'useDifficulty')}
                />
            </div>
            {/* actionPointCost */}
            <div style={formClasses.formNumberField}>
                <label style={formClasses.formNumberFieldLabel}>Action Point Cost</label>
                <input 
                    type="number"
                    min='0'
                    max='10'
                    step='1'
                    value={actionPointCost}
                    onChange={(e) => handleChangeValue(e, 'actionPointCost')}
                />
            </div>
            {/* coolDown */}
            <div style={formClasses.formNumberField}>
                <label style={formClasses.formNumberFieldLabel}>Cool Down</label>
                <input 
                    type="number"
                    min='0'
                    max='5'
                    step='1'
                    value={coolDown}
                    onChange={(e) => handleChangeValue(e, 'coolDown')}
                />
            </div>

            {/* cardCost */}
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