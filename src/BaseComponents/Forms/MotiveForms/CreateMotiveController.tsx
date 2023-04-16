import React, { useState } from 'react'
import { MotiveFormStateObj } from './constants'
import { collection } from '@firebase/firestore';
import { useFirestoreCollectionMutation } from '@react-query-firebase/firestore';
import { useNavigate } from 'react-router-dom';
import { firestore } from '../../../fbConfig/fbConfig';
import { baseStyles } from '../../../globalStyles/baseStyles';
import { formStyles } from '../formStyles';

export const initialMotiveFormObj: MotiveFormStateObj = {
    motiveName: '',
    motiveType: '',
    desc: '',
    realtedSpecialItems: [], // todo update to specialItems ids
    relatedUnits: [], // todo update to unit ids
}

const CreateMotiveController: React.FC = () => {
    const ref = collection(firestore, "motives");
    const mutation = useFirestoreCollectionMutation(ref)
    const navigate = useNavigate()
    const baseClasses = baseStyles()
    const formClasses = formStyles()
    const [motiveFormState, setMotiveFormState] = useState<MotiveFormStateObj>(initialMotiveFormObj)

    const handleChangeValue = (event: any, motiveFormStateField: string) => {
        setMotiveFormState({...motiveFormState, [motiveFormStateField]: event.target.value})
    }

    const handleSubmitMotive = () => {
        mutation.mutate({...motiveFormState})
        navigate('/motives')
    }

    const SubmitPage = () => {
        return (
            <button
                disabled={mutation.isLoading}
                onClick={() => handleSubmitMotive}
            >
                Add Motive
            </button>
        )
    }

    return (
        <div style={baseClasses.contentContainer}>
            <div style={formClasses.formContainer}>
                MotiveFormContainer
                <SubmitPage />
            </div>
        </div>
    )
}

export default CreateMotiveController