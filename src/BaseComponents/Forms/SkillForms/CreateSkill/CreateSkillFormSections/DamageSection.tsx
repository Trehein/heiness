import React from 'react'
import NumberField from '../../../FormFields/NumberField'
import SingleOptionSelect from '../../../FormFields/SingleOptionSelect'
import { formStyles } from '../../../formStyles'
import { SkillFormStateObj } from '../../constants'

export type DamageSectionProps = {
    skillFormStateObj: SkillFormStateObj,
    handleChangeValue: Function,
}

export enum DamageTypeEnums {
    None = 'None',
    Blunt = 'Blunt',
    Cold = 'Cold',
    Earth = 'Earth',
    Electric = 'Electric',
    Explosive = 'Explosive',
    Fire = 'Fire',
    Light = 'Light',
    Necro = 'Necro',
    Pierce = 'Pierce',
    Random = 'Random',
    Slash = 'Slash'
}

export const damageTypes: Array<string> = [
    DamageTypeEnums.None,
    DamageTypeEnums.Blunt,
    DamageTypeEnums.Cold,
    DamageTypeEnums.Earth,
    DamageTypeEnums.Electric,
    DamageTypeEnums.Explosive,
    DamageTypeEnums.Fire,
    DamageTypeEnums.Light,
    DamageTypeEnums.Necro,
    DamageTypeEnums.Pierce,
    DamageTypeEnums.Random,
    DamageTypeEnums.Slash,
]

const DamageSection: React.FC<DamageSectionProps> = (props) => {
    const {skillFormStateObj, handleChangeValue} = props
    const {damage, damageType} = skillFormStateObj
    const formClasses = formStyles()

    return (
        <div style={{...formClasses.formGroupContainer, border: '1px solid blue'}}>
            {/* damage */}
            <NumberField 
                labelText={'Damage'} 
                fieldValue={damage} 
                targetField={'damage'} 
                stepAmount={1} 
                valueRange={{
                    minValue: 0,
                    maxValue: 10
                }} 
                handleChangeValue={handleChangeValue}            
            />
            {/* damageType */}
            <SingleOptionSelect 
                labelText={'DamageType'}
                fieldValue={damageType}
                targetField={'damageType'}
                optionArray={damageTypes}
                handleChangeValue={handleChangeValue}             
            />
        </div>
    )
}

export default DamageSection