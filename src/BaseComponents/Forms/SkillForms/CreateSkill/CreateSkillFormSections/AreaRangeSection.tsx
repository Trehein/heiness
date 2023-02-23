import React from 'react'
import NumberField from '../../../FormFields/NumberField'
import SingleOptionSelect from '../../../FormFields/SingleOptionSelect'
import { formStyles } from '../../../formStyles'
import { SkillFormStateObj } from '../CreateSkillController'

export type AreaRangeSectionProps = {
    skillFormStateObj: SkillFormStateObj,
    handleChangeValue: Function,
}

export enum AreaEnums {
    None = 'None',
    Circle = 'Circle',
    Cone = 'Cone',
    Line = 'Line',
    Target = 'Target'
}

export const AreaArray = [
    AreaEnums.None,
    AreaEnums.Circle,
    AreaEnums.Cone,
    AreaEnums.Line,
    AreaEnums.Target
]

const AreaRangeSection: React.FC<AreaRangeSectionProps> = (props) => {
    const {skillFormStateObj, handleChangeValue} = props
    const {areaOfEffect, areaType, range} = skillFormStateObj
    const formClasses = formStyles()

    return (
        <div style={{...formClasses.formGroupContainer, border: '1px solid blue'}}>
            {/* range */}
            <NumberField 
                labelText={'Range'} 
                fieldValue={range} 
                targetField={'range'} 
                stepAmount={1} 
                valueRange={{
                    minValue: 0,
                    maxValue: 5
                }} 
                handleChangeValue={handleChangeValue}            
            />
            {/* area */}
            <SingleOptionSelect 
                labelText={'Area'}
                fieldValue={areaType}
                targetField={'areaType'}
                optionArray={AreaArray}
                handleChangeValue={handleChangeValue}             
            />
            {/* areaOfEffect */}
            <NumberField 
                labelText={'Area of Effect'} 
                fieldValue={areaOfEffect} 
                targetField={'areaOfEffect'} 
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

export default AreaRangeSection