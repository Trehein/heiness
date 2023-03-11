import React from 'react'
import NumberSelectionBar from '../../../FormFields/NumberSelectionBar'
import SingleOptionSelect from '../../../FormFields/SingleOptionSelect'
import { formStyles } from '../../../formStyles'
import { SkillFormStateObj } from '../../constants'

export type RequiredFocusSectionProps = {
    skillFormStateObj: SkillFormStateObj,
    handleChangeValue: Function,
    handleChangeDynamicObjValue: Function
}

export type FocusObj = {
    'Adaptation': number,
    'Anatomy': number,
    'Brawling': number,
    'Control Gravity': number,
    'Destruction': number,
    'Electricity': number,
    'Endurance': number,
    'Explosives': number,
    'Geomancy': number,
    'Hand Dexterity': number,
    'Horticulture': number,
    'Huntsman': number,
    'Hydrophism': number,
    'Light': number,
    'Lore': number,
    'Manipulate': number,
    'Memory': number,
    'Movement': number,
    'Natural Senses': number,
    'Necromancy': number, 
    'Physics': number, 
    'Polymorphism': number, 
    'Projectile Weapons': number, 
    'Pyrokinetics': number, 
    'Resistance': number, 
    'Scoundrel': number,
    'Short-Bladed Weapons': number,
    'Skilled Craftsman': number,
    'Sorcery': number,
    'Summoning': number,
    'Survival': number,
    'Sword and Shield': number,
    'Toxins': number,
    'Two-Handed Weapons': number,
    'Warfare': number,
    'Wind': number,
    'Zoology': number
}

export const initialFocusObj: FocusObj = {
    'Adaptation': 0,
    'Anatomy': 0,
    'Brawling': 0,
    'Control Gravity': 0,
    'Destruction': 0,
    'Electricity': 0,
    'Endurance': 0,
    'Explosives': 0,
    'Geomancy': 0,
    'Hand Dexterity': 0,
    'Horticulture': 0,
    'Huntsman': 0,
    'Hydrophism': 0,
    'Light': 0,
    'Lore': 0,
    'Manipulate': 0,
    'Memory': 0,
    'Movement': 0,
    'Natural Senses': 0,
    'Necromancy': 0, 
    'Physics': 0, 
    'Polymorphism': 0, 
    'Projectile Weapons': 0, 
    'Pyrokinetics': 0, 
    'Resistance': 0, 
    'Scoundrel': 0,
    'Short-Bladed Weapons': 0,
    'Skilled Craftsman': 0,
    'Sorcery': 0,
    'Summoning': 0,
    'Survival': 0,
    'Sword and Shield': 0,
    'Toxins': 0,
    'Two-Handed Weapons': 0,
    'Warfare': 0,
    'Wind': 0,
    'Zoology': 0
}

export const constitutionFocuses: Array<string> = ['Adaptation', 'Endurance', 'Resistance']
export const strengthFocuses: Array<string> = ['Brawling', 'Destruction', 'Sword and Shield', 'Two-Handed Weapons', 'Warfare']
export const agilityFocuses: Array<string> = ['Hand Dexterity', 'Movement', 'Projectile Weapons', 'Scoundrel', 'Short-Bladed Weapons']
export const wisdomFocuses: Array<string> = ['Control Gravity', 'Hydrophism', 'Lore', 'Manipulate', 'Memory', 'Sorcery', 'Summoning']
export const intelligenceFocuses: Array<string> = ['Anatomy', 'Electricity', 'Explosives', 'Light', 'Physics', 'Pyrokinetics', 'Skilled Craftsman']
export const wildFocuses: Array<string> = ['Geomancy', 'Horticulture', 'Huntsman', 'Natural Senses', 'Necromancy', 'Polymorphism', 'Survival', 'Toxins', 'Wind', 'Zoology']

export const baseAttributesWithFocusesGrouped: Array<{baseAttr: string, focuses: Array<string>}> = [
    {
        baseAttr: 'Agility',
        focuses: agilityFocuses
    },
    {
        baseAttr: 'Constitution',
        focuses: constitutionFocuses
    },
    {
        baseAttr: 'Intelligence',
        focuses: intelligenceFocuses
    },
    {
        baseAttr: 'Strength',
        focuses: strengthFocuses
    },
    {
        baseAttr: 'Wild',
        focuses: wildFocuses
    },
    {
        baseAttr: 'Wisdom',
        focuses: wisdomFocuses
    },
]

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
                baseAttributesWithFocusesGrouped.map((attrGroup: {baseAttr: string, focuses: Array<string>}, index: number) => {
                    return (
                        <div key={index}>
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
                        </div>
                    )
                })
            }
        </div>
    )
}

export default RequiredFocusSection