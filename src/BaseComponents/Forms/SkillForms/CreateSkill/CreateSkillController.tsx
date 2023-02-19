import { useFirestoreCollectionMutation } from "@react-query-firebase/firestore";
import { collection } from "firebase/firestore";
import { useState } from "react";
import { firestore } from "../../../../fbConfig/fbConfig.";
import { generalStyles } from "../../../../generalStyles";
import { formStyles } from "../../formStyles";
import CreateSkillFormS1 from "./CreateSkillFormSections/CreateSkillFormS1";
import CreateSkillFormS2 from "./CreateSkillFormSections/CreateSkillFormS2";
import RequiredFocusSection from "./CreateSkillFormSections/RequiredFocusSection";
import TitleAndDescSection from "./CreateSkillFormSections/TitleAndDescSection";

export type SkillFormStateObj = {
    title: string,
    desc: string,
    useDifficulty: number,
    actionPointCost: number,
    cardCost: any,
    coolDown: number,
    range: number,
    areaType: string,
    areaOfEffect: number,
    target: string,
    affected: string,
    damage: number,
    damageType: string,
    requiredFocus: any,
    mainFocus: string
}

export type BaseAttributeObj = {
    'Agility': number,
    'Constitution': number,
    'Intelligence': number,
    'Strength': number,
    'Wild': number,
    'Wisdom': number
}

export const initialBaseAttributeObj = {
    'Agility': 0,
    'Constitution': 0,
    'Intelligence': 0,
    'Strength': 0,
    'Wild': 0,
    'Wisdom': 0
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

export const initialSkillFormObj: SkillFormStateObj = {
    title: '',
    desc: '',
    mainFocus: '',
    requiredFocus: initialFocusObj,

    useDifficulty: 5,
    actionPointCost: 1,
    cardCost: initialBaseAttributeObj,
    coolDown: 0,

    range: 0,
    areaType: '',
    areaOfEffect: 0,
    target: '',
    affected: '',

    damage: 0,
    damageType: '',
}

const CreateSkillController = () => {
    const ref = collection(firestore, "skills");
    const mutation = useFirestoreCollectionMutation(ref);
    const formClasses = formStyles()
    // const generalClasses = generalStyles()
    const [skillFormState, setSkillFormState] = useState<SkillFormStateObj>(initialSkillFormObj)

    const handleChangeValue = (event: any, skillFormStateField: string) => {
        setSkillFormState({...skillFormState, [skillFormStateField]: event.target.value})
    }

    const handleChangeDynamicObjValue = (value: number,  skillFormStateField: string, objKey: string) => {
        // todo - figure out why ...skillFormState[skillFormStateField] doesn't work with typecasting instead of switch
        // should work https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Property_Accessors
        switch (skillFormStateField) {
            case 'cardCost': 
                setSkillFormState({...skillFormState, [skillFormStateField]: { ...skillFormState.cardCost, [objKey]: value }})
                break
            case 'requiredFocus':
                setSkillFormState({...skillFormState, [skillFormStateField]: { ...skillFormState.requiredFocus, [objKey]: value }})
                break
            default:
                break
        }
    }

    const handleSubmitSkill = () => {
        mutation.mutate({ ...skillFormState });
    }

    const SubmitPage = () => {
        return (
            <button
                disabled={mutation.isLoading}
                onClick={() => handleSubmitSkill()}
            >
                Add example
            </button>
        )
    }

    console.log(skillFormState)

    return (
        <div style={formClasses.formContainer}>
            <TitleAndDescSection 
                skillFormStateObj={skillFormState} 
                handleChangeValue={handleChangeValue} 
            />
            <RequiredFocusSection 
                skillFormStateObj={skillFormState} 
                handleChangeValue={handleChangeValue} 
                handleChangeDynamicObjValue={handleChangeDynamicObjValue}            
            />

            <CreateSkillFormS2 
                skillFormStateObj={skillFormState} 
                handleChangeValue={handleChangeValue} 
                handleChangeDynamicObjValue={handleChangeDynamicObjValue}
            />
            <SubmitPage />
            {mutation.isError && <p>{mutation.error.message}</p>}
        </div>
    );
}

export default CreateSkillController