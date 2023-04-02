import { useFirestoreCollectionMutation } from "@react-query-firebase/firestore";
import { collection } from "firebase/firestore";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { firestore } from "../../../../fbConfig/fbConfig";
import { generalStyles } from "../../../../generalStyles";
import { formStyles } from "../../formStyles";
import { SkillFormStateObj } from "../constants";
import AreaRangeSection, { AreaEnums } from "./CreateSkillFormSections/AreaRangeSection";
import DamageSection, { DamageTypeEnums } from "./CreateSkillFormSections/DamageSection";
import RequiredFocusSection, { initialFocusObj } from "./CreateSkillFormSections/RequiredFocusSection";
import StatusSection, { StatusEnums } from "./CreateSkillFormSections/StatusSection";
import TargetSection, { TargetEnums } from "./CreateSkillFormSections/TargetSection";
import TitleAndDescSection from "./CreateSkillFormSections/TitleAndDescSection";
import UseCostSection, { initialBaseAttributeObj } from "./CreateSkillFormSections/UseCostSection";

export const initialSkillFormObj: SkillFormStateObj = {
    title: '',
    desc: '',

    useDifficulty: 5,
    actionPointCost: 1,
    cardCost: initialBaseAttributeObj,
    coolDown: 0,

    damage: 0,
    damageType: DamageTypeEnums.None,

    setStatus: StatusEnums.None,
    statusDuration: 0,

    target: TargetEnums.Any,
    affected: TargetEnums.Any,

    mainFocus: 'Adaptation',
    requiredFocus: initialFocusObj,

    range: 0,
    areaType: AreaEnums.None,
    areaOfEffect: 0
}

const CreateSkillController = () => {
    const ref = collection(firestore, "skills");
    const mutation = useFirestoreCollectionMutation(ref);

    const navigate = useNavigate();
    const generalClasses = generalStyles()
    const formClasses = formStyles()
    const [skillFormState, setSkillFormState] = useState<SkillFormStateObj>(initialSkillFormObj)

    const handleChangeValue = (event: any, skillFormStateField: string) => {
        setSkillFormState({...skillFormState, [skillFormStateField]: event.target.value})
    }

    const handleChangeNestedRequiredFocusValue = (event: any, skillFormStateField: string) => {
        setSkillFormState({
            ...skillFormState
            , requiredFocus: {
                ...skillFormState.requiredFocus,
                [skillFormStateField]: event.target.value
            }
        })
    }

    const handleChangeDynamicObjValue = (value: number,  skillFormStateField: string, objKey: string) => {
        // todo - figure out why ...skillFormState[skillFormStateField] doesn't work with typecasting instead of switch with .notation hard coded
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
        navigate('/skills')
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

    return (
        <div style={generalClasses.contentContainer}>
            <div style={formClasses.formContainer}>
                <TitleAndDescSection 
                    skillFormStateObj={skillFormState} 
                    handleChangeValue={handleChangeValue} 
                />
                <UseCostSection 
                    skillFormStateObj={skillFormState} 
                    handleChangeValue={handleChangeValue} 
                    handleChangeDynamicObjValue={handleChangeDynamicObjValue}  
                />
                <DamageSection 
                    skillFormStateObj={skillFormState} 
                    handleChangeValue={handleChangeValue} 
                />
                <TargetSection 
                    skillFormStateObj={skillFormState} 
                    handleChangeValue={handleChangeValue} 
                />
                <AreaRangeSection 
                    skillFormStateObj={skillFormState} 
                    handleChangeValue={handleChangeValue} 
                />
                <StatusSection 
                    skillFormStateObj={skillFormState} 
                    handleChangeValue={handleChangeValue} 
                />
                <RequiredFocusSection 
                    skillFormStateObj={skillFormState} 
                    handleChangeValue={handleChangeValue} 
                    handleChangeNestedRequiredFocusValue={handleChangeNestedRequiredFocusValue}
                />
                <SubmitPage />
                {mutation.isError && <p>{mutation.error.message}</p>}
            </div>
        </div>
    );
}

export default CreateSkillController