import { collection } from '@firebase/firestore';
import { useFirestoreCollectionMutation } from '@react-query-firebase/firestore';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { firestore } from '../../../fbConfig/fbConfig';
import { baseStyles } from '../../../globalStyles/baseStyles';
import { formStyles } from '../formStyles';
import { PersonalityTraitFormStateObj } from './constants';

export const initialPersonalityTraitFormStateObj: PersonalityTraitFormStateObj = {
    name: '',
    desc: '',
    traitType: '', // todo - update to personalityTrait enum
    effects: [] // todo - update to personalityTraitEffectType type (name, desc, stat / focus, amount)
}

const CreatePersonalityTraitController: React.FC = () => {
    const ref = collection(firestore, "personalityTraits");
    const mutation = useFirestoreCollectionMutation(ref)
    const navigate = useNavigate()
    const generalClasses = baseStyles()
    const formClasses = formStyles()
    const [personalityTraitFormState, setPersonalityTraitFormState] = useState<PersonalityTraitFormStateObj>(initialPersonalityTraitFormStateObj)

    const handleChangeValue = (event: any, personalityTraitFormStateField: string) => {
        setPersonalityTraitFormState({...personalityTraitFormState, [personalityTraitFormStateField]: event.target.value})
    }

    const handleSubmitFaction = () => {
        mutation.mutate({...personalityTraitFormState})
        navigate('/personality-traits')
    }

    const SubmitPage = () => {
        return (
            <button
                disabled={mutation.isLoading}
                onClick={() => handleSubmitFaction}
            >
                Add Faction
            </button>
        )
    }

    return (
        <div style={generalClasses.contentContainer}>
            <div style={formClasses.formContainer}>
                PersonalityTraitFormContainer
                <SubmitPage />
            </div>
        </div>
    )
}

export default CreatePersonalityTraitController