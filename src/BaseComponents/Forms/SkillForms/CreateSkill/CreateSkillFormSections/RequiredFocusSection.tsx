import React from 'react'
import NumberSelectionBar from '../../../FormFields/NumberSelectionBar'
import SingleOptionSelect from '../../../FormFields/SingleOptionSelect'
import { formStyles } from '../../../formStyles'
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
    const formClasses = formStyles()

    return (
        <div style={{...formClasses.formGroupContainer, border: '1px solid blue'}}>
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
                        <>
                            <label style={formClasses.formBarGroupLabel}>{attrGroup.baseAttr}</label>
                            <div style={formClasses.formBarNumberFieldContainer}>
                                {
                                    attrGroup.focuses.map((focus: string, i: number) => {
                                        return (
                                            <div key={i} style={formClasses.formBarNumberField}>
                                                <div style={formClasses.formBarNumberField}>
                                                    <label style={formClasses.formNumberFieldLabel}>{focus}</label>
                                                    <NumberSelectionBar
                                                        currentValue={requiredFocus[focus]}
                                                        maxValue={10}
                                                        onClick={(value: number) => handleChangeDynamicObjValue(value, 'requiredFocus', focus)}            
                                                    />
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </>
                    )
                })
            }
        </div>
    )
}

export default RequiredFocusSection