import { collection } from '@firebase/firestore';
import { useFirestoreCollectionMutation } from '@react-query-firebase/firestore';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { firestore } from '../../../fbConfig/fbConfig';
import { generalStyles } from '../../../generalStyles';
import { formStyles } from '../formStyles';
import { FactionFormStateObj } from './constants';

export const initialFactionFormObj: FactionFormStateObj = {
    factionName: '',
    desc: '',
    leadershipStructureType: '', // todo - update to leadershipStructure enum
    commonPersonalityTypes: [], // todo - update to personality enum
    commonMotivationTypes: [], // todo - update to motivation enum
    activeLocations: [], // todo - update to location id array
    unitTypes: [], // todo - update to unit id array
}

const CreateFactionController: React.FC = () => {
    const ref = collection(firestore, "factions");
    const mutation = useFirestoreCollectionMutation(ref)
    const navigate = useNavigate()
    const generalClasses = generalStyles()
    const formClasses = formStyles()
    const [factionFormState, setFactionFormState] = useState<FactionFormStateObj>(initialFactionFormObj)

    const handleChangeValue = (event: any, factionFormStateField: string) => {
        setFactionFormState({...factionFormState, [factionFormStateField]: event.target.value})
    }

    const handleSubmitFaction = () => {
        mutation.mutate({...factionFormState})
        navigate('/factions')
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
                FactionFormContainer
                <SubmitPage />
            </div>
        </div>
    )
}

export default CreateFactionController