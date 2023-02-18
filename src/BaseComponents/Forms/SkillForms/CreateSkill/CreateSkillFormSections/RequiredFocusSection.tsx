import React from 'react'
import NumberSelectionBar from '../../../FormFields/NumberSelectionBar'
import SingleOptionSelect from '../../../FormFields/SingleOptionSelect'
import { initialFocusObj, SkillFormStateObj } from '../CreateSkillController'

export type RequiredFocusSectionProps = {
    skillFormStateObj: SkillFormStateObj,
    handleChangeValue: Function,
    handleChangeDynamicObjValue: Function
}

const RequiredFocusSection: React.FC<RequiredFocusSectionProps> = (props) => {
    const {skillFormStateObj, handleChangeValue, handleChangeDynamicObjValue} = props
    const {mainFocus, requiredFocus} = skillFormStateObj
    const requiredFocusKeys = Object.keys(initialFocusObj)

    return (
        <div>
            {/* mainFocus */}
            <SingleOptionSelect 
                labelText={'Main Focus'}
                fieldValue={mainFocus}
                targetField={'mainFocus'}
                optionArray={requiredFocusKeys}
                handleChangeValue={handleChangeValue}             
            />

            <NumberSelectionBar
                currentValue={requiredFocus[requiredFocusKeys[0]]}
                onClick={(value: number) => handleChangeDynamicObjValue(value, 'requiredFocus', requiredFocusKeys[0])}            
            />

            {/* requiredFocus */}
            {/* <label>Required Focus</label>
            {requiredFocusKeys.map((focus: string) => {
                return (
                    <div>
                        {focus}
                        <input 
                            type="number"
                            min='0'
                            max='10'
                            value={requiredFocus[focus]}
                            onChange={(e) => handleChangeDynamicObjValue(e, 'requiredFocus', focus)}
                        />
                    </div>
                )
            })} */}
        </div>
    )
}

export default RequiredFocusSection