import { useFirestoreCollectionMutation } from "@react-query-firebase/firestore";
import { collection } from "firebase/firestore";
import { useState } from "react";
import { firestore } from "../../../../fbConfig/fbConfig.";
import { formStyles } from "../../formStyles";
import CreateSkillFormS1 from "./CreateSkillFormSections/CreateSkillFormS1";
import CreateSkillFormS2 from "./CreateSkillFormSections/CreateSkillFormS2";

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

const CreateSkillController = () => {
    const ref = collection(firestore, "skills");
    const mutation = useFirestoreCollectionMutation(ref);
    const formClasses = formStyles()
    const [formPage, setFormPage] = useState(0)

    const initialSkillFormObj: SkillFormStateObj = {
        title: '',
        desc: '',
        mainFocus: '',
        requiredFocus: initialFocusObj,

        useDifficulty: 5,
        actionPointCost: 1,
        cardCost: {},
        coolDown: 0,

        range: 0,
        areaType: '',
        areaOfEffect: 0,
        target: '',
        affected: '',

        damage: 0,
        damageType: '',
    }

    const [skillFormState, setSkillFormState] = useState<SkillFormStateObj>(initialSkillFormObj)

    const handleChangeValue = (event: any, skillFormStateField: string) => {
        setSkillFormState({...skillFormState, [skillFormStateField]: event.target.value})
    }

    const handleChangeDynamicObjValue = (event: any,  skillFormStateField: string, objKey: string) => {
        setSkillFormState({...skillFormState, [skillFormStateField]: { ...skillFormState.requiredFocus, [objKey]: parseInt(event.target.value) }})
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

    const PageNavigation = () => {
        return (
            <div style={formClasses.pageNumberButtonContainer}>
                <button
                    onClick={() => setFormPage(formPage - 1)}
                    disabled={formPage === 0}
                >
                    Prev
                </button>
                <button
                    onClick={() => setFormPage(formPage + 1)}
                >
                    Next
                </button>
            </div>
        )
    }

    console.log(skillFormState)

    return (
        <div style={formClasses.formContainer}>
            {formPage === 0 && 
                <CreateSkillFormS1 
                    skillFormStateObj={skillFormState} 
                    handleChangeValue={handleChangeValue} 
                    handleChangeDynamicObjValue={handleChangeDynamicObjValue}
                />
            }
            {formPage === 1 && 
                <CreateSkillFormS2 
                    // skillFormStateObj={skillFormState} 
                    // handleChangeValue={handleChangeValue} 
                />
            }
            <PageNavigation />
            <SubmitPage />
            {mutation.isError && <p>{mutation.error.message}</p>}
        </div>
    );
}

export default CreateSkillController