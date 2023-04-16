import React, { useState } from 'react'
import { LocationFormStateObj } from './constants'
import { collection } from '@firebase/firestore';
import { useFirestoreCollectionMutation } from '@react-query-firebase/firestore';
import { useNavigate } from 'react-router-dom';
import { firestore } from '../../../fbConfig/fbConfig';
import { baseStyles } from '../../../globalStyles/baseStyles';
import { formStyles } from '../formStyles';

export const initialLocationFormObj: LocationFormStateObj = {
    locationName: '',
    uiId: '', // ex - 1.1.2 or grid square A2...
    locationType: '', // todo - update to locationType enum
    desc: '',
    possibleEnvironmentInteractives: [], // todo update to interactive enums
    possibleSpecialItems: [], // todo update to item ids
    possibleMaterials: [], // todo update to material enums
    possibleUnitGroups: [] // todo update to unit group ids
}

const CreateLocation: React.FC = () => {
    const ref = collection(firestore, "locations");
    const mutation = useFirestoreCollectionMutation(ref)
    const navigate = useNavigate()
    const baseClasses = baseStyles()
    const formClasses = formStyles()
    const [locationFormState, setLocationFormState] = useState<LocationFormStateObj>(initialLocationFormObj)

    const handleChangeValue = (event: any, locationFormStateField: string) => {
        setLocationFormState({...locationFormState, [locationFormStateField]: event.target.value})
    }

    const handleSubmitFaction = () => {
        mutation.mutate({...locationFormState})
        navigate('/locations')
    }

    const SubmitPage = () => {
        return (
            <button
                disabled={mutation.isLoading}
                onClick={() => handleSubmitFaction}
            >
                Add Location
            </button>
        )
    }

    return (
        <div style={baseClasses.contentContainer}>
            <div style={formClasses.formContainer}>
                LocationFormContainer
                <SubmitPage />
            </div>
        </div>
    )
}

export default CreateLocation