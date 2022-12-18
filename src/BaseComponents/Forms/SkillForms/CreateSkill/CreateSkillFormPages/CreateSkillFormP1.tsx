import React from 'react'
import { formStyles } from '../../../formStyles'
import { SkillFormStateObj } from '../CreateSkillController'

export type CreateSkillFormPageProps = {
    skillFormStateObj: SkillFormStateObj,
    handleChangeValue: Function
}

export const focusOptions = [
    {focus: 'Adaptation'},
    {focus: 'Anatomy'},
    {focus: 'Brawling'},
    {focus: 'Control Gravity'},
    {focus: 'Destruction'},
    {focus: 'Electricity'},
    {focus: 'Endurance'},
    {focus: 'Explosives'},
    {focus: 'Geomancy'},
    {focus: 'Hand Dexterity'},
    {focus: 'Horticulture'},
    {focus: 'Huntsman'},
    {focus: 'Hydrophism'},
    {focus: 'Light'},
    {focus: 'Lore'},
    {focus: 'Manipulate'},
    {focus: 'Memory'},
    {focus: 'Movement'},
    {focus: 'Natural Senses'},
    {focus: 'Necromancy'}, 
    {focus: 'Physics'}, 
    {focus: 'Polymorphism'}, 
    {focus: 'Projectile Weapons'}, 
    {focus: 'Pyrokinetics'}, 
    {focus: 'Resistance'}, 
    {focus: 'Scoundrel'},
    {focus: 'Short-Bladed Weapons'},
    {focus: 'Skilled Craftsman'},
    {focus: 'Sorcery'},
    {focus: 'Summoning'},
    {focus: 'Survival'},
    {focus: 'Sword and Shield'},
    {focus: 'Toxins'},
    {focus: 'Two-Handed Weapons'},
    {focus: 'Warfare'},
    {focus: 'Wind'},
    {focus: 'Zoology'},
]

const CreateSkillFormP1: React.FC<CreateSkillFormPageProps> = (props) => {
    const {skillFormStateObj, handleChangeValue} = props
    const {desc, title, mainFocus} = skillFormStateObj
    const formClasses = formStyles()

    return (
        <>
            {/* title */}
            <label>Title</label>
            <input
                style={formClasses.formTextInput}
                type="text" 
                value={title} 
                onChange={(e) => handleChangeValue(e, 'title')}
            />
            {/* mainFocus */}
            <label>Main Focus</label>
            <select onChange={(e) => handleChangeValue(e, 'mainFocus')} value={mainFocus}>
                {focusOptions.map((option: {focus: string}) => {
                    return <option key={option.focus} value={option.focus}>{option.focus}</option>
                })}
            </select>
            {/* Desc */}
            <label>Skill Description</label>
            <textarea 
                onChange={(e) => handleChangeValue(e, 'desc')} 
                rows={10} 
                cols={30} 
                defaultValue={desc} 
            />
        </>
    )
}

export default CreateSkillFormP1