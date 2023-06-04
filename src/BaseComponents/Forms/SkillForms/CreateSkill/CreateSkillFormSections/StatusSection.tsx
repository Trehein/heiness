import React from 'react'
import NumberField from '../../../FormFields/NumberField'
import SingleOptionSelect from '../../../FormFields/SingleOptionSelect'
import { formStyles } from '../../../formStyles'
import { SkillFormStateObj } from '../../constants'
import { statusArray } from '../../../../../constants/enums/statusEnums'

export type StatusSectionProps = {
    skillFormStateObj: SkillFormStateObj,
    handleChangeValue: Function,
}

const StatusSection: React.FC<StatusSectionProps> = (props) => {
    const {skillFormStateObj, handleChangeValue} = props
    const {setStatus, statusDuration} = skillFormStateObj
    const formClasses = formStyles()

    return (
        <div style={{...formClasses.formGroupContainer, border: '1px solid blue'}}>
            {/* setStatus */}
            <SingleOptionSelect 
                labelText={'Set Status'}
                fieldValue={setStatus}
                targetField={'setStatus'}
                optionArray={statusArray}
                handleChangeValue={handleChangeValue}             
            />
            {/* statusDuration */}
            <NumberField 
                labelText={'Status Duration'} 
                fieldValue={statusDuration} 
                targetField={'statusDuration'} 
                stepAmount={1} 
                valueRange={{
                    minValue: 0,
                    maxValue: 5
                }} 
                handleChangeValue={handleChangeValue}            
            />
        </div>
    )
}

export default StatusSection