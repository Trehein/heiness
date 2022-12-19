import React from 'react'
import { formStyles } from '../../../formStyles'
import { initialBaseAttributeObj, SkillFormStateObj } from '../CreateSkillController'

export type CreateSkillFormS2Props = {
    skillFormStateObj: SkillFormStateObj,
    handleChangeValue: Function,
    handleChangeDynamicObjValue: Function
}

const CreateSkillFormS2: React.FC<CreateSkillFormS2Props> = (props) => {
    const {skillFormStateObj, handleChangeValue, handleChangeDynamicObjValue} = props
    const {useDifficulty, actionPointCost, cardCost, coolDown} = skillFormStateObj
    const formClasses = formStyles()
    const cardCostKeys = Object.keys(initialBaseAttributeObj)
    
    return (
        <>
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
            {/* cardCost */}
            <label>Attribute Card Cost</label>
            {cardCostKeys.map((attribute: string) => {
                return (
                    <div>
                        {attribute}
                        <input 
                            type="number"
                            min='0'
                            max='10'
                            step='1'
                            value={cardCost[attribute]}
                            onChange={(e) => handleChangeDynamicObjValue(e, 'cardCost', attribute)}
                        />
                    </div>
                )
            })}
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
        </>
    )
}

export default CreateSkillFormS2