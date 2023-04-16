import React, { useState } from 'react'
import { PurposeFormStateObj } from './constants'
import { collection } from '@firebase/firestore';
import { useFirestoreCollectionMutation } from '@react-query-firebase/firestore';
import { useNavigate } from 'react-router-dom';
import { firestore } from '../../../fbConfig/fbConfig';
import { baseStyles } from '../../../globalStyles/baseStyles';
import { formStyles } from '../formStyles';

export const initialPurposeFormObj: PurposeFormStateObj = {
    name: '',
    desc: '',
    type: '', // todo - update to purposeType enum
}

const CreatePurposeController: React.FC = () => {
    const ref = collection(firestore, "purposes");
    const mutation = useFirestoreCollectionMutation(ref)
    const navigate = useNavigate()
    const baseClasses = baseStyles()
    const formClasses = formStyles()
    const [purposeFormState, setPurposeFormState] = useState<PurposeFormStateObj>(initialPurposeFormObj)

    const handleChangeValue = (event: any, purposeFormStateField: string) => {
        setPurposeFormState({...purposeFormState, [purposeFormStateField]: event.target.value})
    }

    const handleSubmitFaction = () => {
        mutation.mutate({...purposeFormState})
        navigate('/purposes')
    }

    const SubmitPage = () => {
        return (
            <button
                disabled={mutation.isLoading}
                onClick={() => handleSubmitFaction}
            >
                Add Purpose
            </button>
        )
    }

    return (
        <div style={baseClasses.contentContainer}>
            <div style={formClasses.formContainer}>
                PurposeFormContainer
                <SubmitPage />
            </div>
        </div>
    )
}

export default CreatePurposeController