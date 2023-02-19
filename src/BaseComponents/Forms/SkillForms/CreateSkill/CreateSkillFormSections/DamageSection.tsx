import React from 'react'
import SingleOptionSelect from '../../../FormFields/SingleOptionSelect'
import { SkillFormStateObj } from '../CreateSkillController'

export type DamageSectionProps = {
    skillFormStateObj: SkillFormStateObj,
    handleChangeValue: Function,
}

export enum DamageTypeEnums {
    None = 'none',
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
    return (
        <div>
            {/* damage */}
            <label>Damage</label>
            <input 
                type="number"
                min='0'
                max='5'
                step='1'
                value={damage}
                onChange={(e) => handleChangeValue(e, 'damage')}
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