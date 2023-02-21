import React from 'react'
import SingleOptionSelect from '../../../FormFields/SingleOptionSelect'
import { formStyles } from '../../../formStyles'
import { SkillFormStateObj } from '../CreateSkillController'

export type TargetSectionProps = {
    skillFormStateObj: SkillFormStateObj,
    handleChangeValue: Function,
}

export enum TargetEnums {
    Any = 'Any',
    Corpse = 'Corpse',
    Creature = 'Creature',
    Downed = 'Downed',
    Elements = 'Elements',
    Enemy = 'Enemy',
    Location = 'Location',
    Object = 'Object',
    Plant = 'Plant',
    Self = 'Self',
    Structure = 'Structure',
    Target = 'Target'
}

export const targetArray = [
    TargetEnums.Any,
    TargetEnums.Corpse,
    TargetEnums.Creature,
    TargetEnums.Downed,
    TargetEnums.Elements,
    TargetEnums.Enemy,
    TargetEnums.Location,
    TargetEnums.Object,
    TargetEnums.Plant,
    TargetEnums.Self,
    TargetEnums.Structure,
    TargetEnums.Target
]

const TargetSection: React.FC<TargetSectionProps> = (props) => {
    const {skillFormStateObj, handleChangeValue} = props
    const {target, affected} = skillFormStateObj
    const formClasses = formStyles()

    return (
        <div style={{...formClasses.formGroupContainer, border: '1px solid blue'}}>
            {/* target */}
            <SingleOptionSelect 
                labelText={'Target'}
                fieldValue={target}
                targetField={'target'}
                optionArray={targetArray}
                handleChangeValue={handleChangeValue}             
            />
            {/* affected */}
            <SingleOptionSelect 
                labelText={'Affected'}
                fieldValue={affected}
                targetField={'affected'}
                optionArray={targetArray}
                handleChangeValue={handleChangeValue}             
            />
        </div>
    )
}

export default TargetSection