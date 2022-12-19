import React from 'react'
import { formStyles } from '../../../formStyles'
import { initialFocusObj, SkillFormStateObj } from '../CreateSkillController'

export type CreateSkillFormS1Props = {
    skillFormStateObj: SkillFormStateObj,
    handleChangeValue: Function,
    handleChangeDynamicObjValue: Function
}

const CreateSkillFormS1: React.FC<CreateSkillFormS1Props> = (props) => {
    const {skillFormStateObj, handleChangeValue, handleChangeDynamicObjValue} = props
    const {desc, title, mainFocus, requiredFocus} = skillFormStateObj
    const formClasses = formStyles()
    const requiredFocusKeys = Object.keys(initialFocusObj)

    return (
        <div style={formClasses.formSectionContainer}>
            {/* title */}
            <label>Title</label>
            <input
                style={formClasses.formTextInput}
                type="text" 
                value={title} 
                onChange={(e) => handleChangeValue(e, 'title')}
            />
            {/* Desc */}
            <label>Skill Description</label>
            <textarea 
                onChange={(e) => handleChangeValue(e, 'desc')} 
                rows={10} 
                cols={30} 
                defaultValue={desc} 
            />
            {/* mainFocus */}
            <label>Main Focus</label>
            <select onChange={(e) => handleChangeValue(e, 'mainFocus')} value={mainFocus}>
                {requiredFocusKeys.map((option: string) => {
                    return <option key={option} value={option}>{option}</option>
                })}
            </select>
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