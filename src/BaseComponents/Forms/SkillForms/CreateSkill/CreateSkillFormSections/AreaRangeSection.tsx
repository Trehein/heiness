import React from 'react'
import SingleOptionSelect from '../../../FormFields/SingleOptionSelect'
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

    return (
        <div>
            {/* range */}
            <label>Range</label>
            <input 
                type="number"
                min='0'
                max='5'
                step='1'
                value={range}
                onChange={(e) => handleChangeValue(e, 'range')}
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
            <label>Area of Effect</label>
            <input 
                type="number"
                min='0'
                max='5'
                step='1'
                value={areaOfEffect}
                onChange={(e) => handleChangeValue(e, 'areaOfEffect')}
            />
        
        </div>
    )
}

export default AreaRangeSection