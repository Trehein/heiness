import React from 'react'
import { formStyles } from '../../../formStyles'
import { CreateSkillFormPageProps } from './CreateSkillFormP1'

const CreateSkillFormP2: React.FC<CreateSkillFormPageProps> = (props) => {
    const {skillFormStateObj, handleChangeValue} = props
    const {desc, title, mainFocus} = skillFormStateObj
    const formClasses = formStyles()
    
    return (
        <>

        </>
    )
}

export default CreateSkillFormP2