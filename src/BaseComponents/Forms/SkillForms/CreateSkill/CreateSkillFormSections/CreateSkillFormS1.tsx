import React from 'react'
import SingleOptionSelect from '../../../FormFields/SingleOptionSelect'
import { formStyles } from '../../../formStyles'
import { initialFocusObj, SkillFormStateObj } from '../CreateSkillController'

export type CreateSkillFormS1Props = {
    skillFormStateObj: SkillFormStateObj,
    handleChangeValue: Function,
    handleChangeDynamicObjValue: Function
}

const CreateSkillFormS1: React.FC<CreateSkillFormS1Props> = (props) => {
    const {skillFormStateObj, handleChangeValue, handleChangeDynamicObjValue} = props
    const {mainFocus, requiredFocus} = skillFormStateObj
    const formClasses = formStyles()
    const requiredFocusKeys = Object.keys(initialFocusObj)

    return (
        <div style={formClasses.formSectionContainer}>
            {/* mainFocus */}
            <SingleOptionSelect 
                labelText={'Main Focus'}
                fieldValue={mainFocus}
                targetField={'mainFocus'}
                optionArray={requiredFocusKeys}
                handleChangeValue={handleChangeValue}             
            />

            {/* requiredFocus */}
            <label>Required Focus</label>
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
            })}
        </div>
    )
}

export default CreateSkillFormS1