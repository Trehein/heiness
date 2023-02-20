import React from 'react'
import TextAreaField from '../../../FormFields/TextAreaField'
import TextInputField from '../../../FormFields/TextInputField'
import { formStyles } from '../../../formStyles'
import { SkillFormStateObj } from '../CreateSkillController'

export type TitleAndDescSectionProps = {
    skillFormStateObj: SkillFormStateObj,
    handleChangeValue: Function,
}

const TitleAndDescSection: React.FC<TitleAndDescSectionProps> = (props) => {
    const {skillFormStateObj, handleChangeValue} = props
    const {desc, title} = skillFormStateObj
    const formClasses = formStyles()

    return (
        <div style={{...formClasses.formGroupContainer, border: '1px solid blue'}}>
            {/* title */}
            <TextInputField 
                labelText={'Title'}
                fieldValue={title}
                targetField={'title'}    
                handleChangeValue={handleChangeValue}             
            />
            {/* Desc */}
            <TextAreaField 
                labelText={'Desc.'}
                fieldValue={desc}
                targetField={'desc'} 
                handleChangeValue={handleChangeValue}          
            />
        </div>
    )
}

export default  TitleAndDescSection