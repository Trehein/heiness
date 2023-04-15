import { collection } from '@firebase/firestore';
import { useFirestoreCollectionMutation } from '@react-query-firebase/firestore';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { firestore } from '../../../fbConfig/fbConfig';
import { generalStyles } from '../../../generalStyles';
import { PurposeFormStateObj } from '../PurposeForms/constants';
import { formStyles } from '../formStyles';
import { StrengthOrWeaknessFormStateObj } from './constants';

export const initialStrengthOrWeaknessFormStateObj: StrengthOrWeaknessFormStateObj = {
    name: '',
    desc: '',
    type: '',
    effect: []
}

const CreateStrengthOrWeaknessController: React.FC = () => {
    const ref = collection(firestore, "strengthsOrWeaknesses");
    const mutation = useFirestoreCollectionMutation(ref)
    const navigate = useNavigate()
    const generalClasses = generalStyles()
    const formClasses = formStyles()
    const [strengthOrWeaknessFormState, setStrengthOrWeaknessPurposeFormState] = useState<PurposeFormStateObj>(initialStrengthOrWeaknessFormStateObj)

    const handleChangeValue = (event: any, strengthOrWeaknessFormStateField: string) => {
        setStrengthOrWeaknessPurposeFormState({...strengthOrWeaknessFormState, [strengthOrWeaknessFormStateField]: event.target.value})
    }

    const handleSubmitFaction = () => {
        mutation.mutate({...strengthOrWeaknessFormState})
        navigate('strengths-or-weaknesses')
    }

    const SubmitPage = () => {
        return (
            <button
                disabled={mutation.isLoading}
                onClick={() => handleSubmitFaction}
            >
                Add Strength or Weakness
            </button>
        )
    }

    return (
        <div style={generalClasses.contentContainer}>
            <div style={formClasses.formContainer}>
                StrengthOrWeaknessFormContainer
                <SubmitPage />
            </div>
        </div>
    )
}

export default CreateStrengthOrWeaknessController