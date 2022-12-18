import { useFirestoreCollectionMutation } from "@react-query-firebase/firestore";
import { collection } from "firebase/firestore";
import { useState } from "react";
import { firestore } from "../../../../fbConfig/fbConfig.";
import { formStyles } from "../../formStyles";
import CreateSkillFormP1 from "./CreateSkillFormPages/CreateSkillFormP1";
import CreateSkillFormP2 from "./CreateSkillFormPages/CreateSkillFormP2";

export type SkillFormStateObj = {
    title: string,
    desc: string,
    useDifficulty: number,
    actionPointCost: number,
    cardCost: Object,
    coolDown: number,
    range: number,
    areaType: string,
    areaOfEffect: number,
    target: string,
    affected: string,
    damage: number,
    damageType: string,
    requiredFocus: Object,
    mainFocus: string
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
        requiredFocus: {},

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

    return (
        <div style={formClasses.formContainer}>
            {formPage === 0 && <CreateSkillFormP1 skillFormStateObj={skillFormState} handleChangeValue={handleChangeValue} />}
            {formPage === 1 && <CreateSkillFormP2 skillFormStateObj={skillFormState} handleChangeValue={handleChangeValue} />}
            <PageNavigation />
            <SubmitPage />
            {mutation.isError && <p>{mutation.error.message}</p>}
        </div>
    );
}

export default CreateSkillController