import React from 'react'
import NumberSelectionBar from '../../../FormFields/NumberSelectionBar'
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
    
    return (
        <div>
            {/* useDifficulty */}
            <label>Base Use Difficulty</label>
            <input 
                type="number"
                min='5'
                max='25'
                step='5'
                value={useDifficulty}
                onChange={(e) => handleChangeValue(e, 'useDifficulty')}
            />
            {/* actionPointCost */}
            <label>Action Point Cost</label>
            <input 
                type="number"
                min='0'
                max='10'
                step='1'
                value={actionPointCost}
                onChange={(e) => handleChangeValue(e, 'actionPointCost')}
            />
            {/* coolDown */}
            <label>Cool Down</label>
            <input 
                type="number"
                min='0'
                max='5'
                step='1'
                value={coolDown}
                onChange={(e) => handleChangeValue(e, 'coolDown')}
            />
            {/* cardCost */}
            {cardCostKeys.map((attribute: string, i: number) => {
                return (
                    <div key={i}>
                        <div>{attribute}</div>
                        <NumberSelectionBar
                            currentValue={cardCost[attribute]}
                            maxValue={3}
                            onClick={(value: number) => handleChangeDynamicObjValue(value, 'cardCost', attribute)}            
                        />
                    </div>
                )
            })}
        </div>
    )
}

export default UseCostSection