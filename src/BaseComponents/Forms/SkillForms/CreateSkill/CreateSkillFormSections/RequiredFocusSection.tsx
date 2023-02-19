import React from 'react'
import NumberSelectionBar from '../../../FormFields/NumberSelectionBar'
import SingleOptionSelect from '../../../FormFields/SingleOptionSelect'
import { baseAttributesWithFocusesGrouped, initialFocusObj, SkillFormStateObj } from '../CreateSkillController'

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

            {/* requiredFocus */}
            {
                baseAttributesWithFocusesGrouped.map((attrGroup: {baseAttr: string, focuses: Array<string>}) => {
                    return (
                        <div>
                            <div>{attrGroup.baseAttr}</div>
                            {
                                attrGroup.focuses.map((focus: string) => {
                                    return (
                                        <div>
                                            <div>{focus}</div>
                                            <NumberSelectionBar
                                                currentValue={requiredFocus[focus]}
                                                maxValue={10}
                                                onClick={(value: number) => handleChangeDynamicObjValue(value, 'requiredFocus', focus)}            
                                            />
                                        </div>
                                    )
                                })
                            }
                        </div>
                    )
                })
            }
        </div>
    )
}

export default RequiredFocusSection