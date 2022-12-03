import { useFirestoreCollectionMutation } from "@react-query-firebase/firestore";
import { collection } from "firebase/firestore";
import { useState } from "react";
import { firestore } from "../../../fbConfig/fbConfig.";
import { formStyles } from "../formStyles";

const CreateSkill = () => {
    const ref = collection(firestore, "skills");
    const mutation = useFirestoreCollectionMutation(ref);
    const formClasses = formStyles()
    const [formPage, setFormPage] = useState(0)

    const [title, setTitle] = useState('')
    const handleTitleChange = (event: any) => {
        setTitle(event.target.value)
    }

    const [mainFocus, setMainFocus] = useState('')
    const handleMainFocusChange = (event: any) => {
        setMainFocus(event.target.value)
    }
    
    const [desc, setDesc] = useState('')
    const handleDescChange = (event: any) => {
        setDesc(event.target.value)
    }

    const [useDifficulty, setUseDifficulty] = useState(5)
    const handleUseDifficultyChange = (event: any) => {
        setUseDifficulty(event.target.value)
    }

    const [actionPoints, setActionPoints] = useState(1)
    const handleActionPointsChange = (event: any) => {
        setActionPoints(event.target.value)
    }

    const [cardCost, setCardCost] = useState({})
    const handleCardCostChange = (event: any) => {
        setCardCost(event.target.value)
    }

    const [coolDown, setCoolDown] = useState(1)
    const handleCoolDownChange = (event: any) => {
        setCoolDown(event.target.value)
    }

    const [range, setRange] = useState(0)
    const handleRangeChange = (event: any) => {
        setRange(event.target.value)
    }

    const [area, setArea] = useState('')
    const handleAreaChange = (event: any) => {
        setArea(event.target.value)
    }

    const [areaOfEffect, setAreaOfEffect] = useState('')
    const handleAreaOfEffectChange = (event: any) => {
        setAreaOfEffect(event.target.value)
    }

    const [target, setTarget] = useState('')
    const handleTargetChange = (event: any) => {
        setTarget(event.target.value)
    }

    const [affected, setAffected] = useState('')
    const handleAffectedChange = (event: any) => {
        setAffected(event.target.value)
    }

    const [damage, setDamage] = useState('')
    const handleDamageChange = (event: any) => {
        setDamage(event.target.value)
    }

    const [damageType, setDamageType] = useState('')
    const handleDamageTypeChange = (event: any) => {
        setDamageType(event.target.value)
    }

    const [requiredFocus, setRequiredFocus] = useState({})
    const handleRequiredFocusChange = (event: any) => {
        setRequiredFocus(event.target.value)
    }

    const handleSubmitSkill = () => {
        mutation.mutate({
            title,
            desc,
            useDifficulty,
            actionPoints,
            cardCost,
            coolDown,
            range,
            area,
            areaOfEffect,
            target,
            affected,
            damage,
            mainFocus,
            damageType,
            requiredFocus
        });
    }

    const focusOptions = [
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

    return (
        <div style={formClasses.formContainer}>
            {formPage === 0 &&             
                <>
                    <label>Title</label>
                    <input
                        style={formClasses.formTextInput}
                        type="text" 
                        value={title} 
                        onChange={(e) => handleTitleChange(e)}
                    />
                    <label>Main Focus</label>
                    <select onChange={(e) => handleMainFocusChange(e)} value={mainFocus}>
                        {focusOptions.map((option: {focus: string}) => {
                            return <option key={option.focus} value={option.focus}>{option.focus}</option>
                        })}
                    </select>
                    <label>Skill Description</label>
                    <textarea 
                        onChange={handleDescChange} 
                        rows={10} 
                        cols={30} 
                        defaultValue={desc} 
                    />
                </>
            }
            <PageNavigation />
            <SubmitPage />
            {mutation.isError && <p>{mutation.error.message}</p>}
        </div>
    );
}

export default CreateSkill