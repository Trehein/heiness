import { collection } from '@firebase/firestore';
import { useFirestoreCollectionMutation } from '@react-query-firebase/firestore';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { firestore } from '../../../fbConfig/fbConfig';
import { baseStyles } from '../../../globalStyles/baseStyles';
import { formStyles } from '../formStyles';
import { ItemFormStateObj } from './constants';

export const initialFactionFormObj: ItemFormStateObj = {
    itemName: '',
    itemType: '', // todo - update to itemType enum
    isUnique: false,
    desc: '',
    location: '', // todo - update to location id
    purpose: [], // todo - update to purpose enum or keep open string []?
    effects: [], // todo - update to effects enum or keep open string []?
}

const CreateItemController: React.FC = () => {
    const ref = collection(firestore, "items");
    const mutation = useFirestoreCollectionMutation(ref)
    const navigate = useNavigate()
    const baseClasses = baseStyles()
    const formClasses = formStyles()
    const [itemFormState, setItemFormState] = useState<ItemFormStateObj>(initialFactionFormObj)

    const handleChangeValue = (event: any, factionFormStateField: string) => {
        setItemFormState({...itemFormState, [factionFormStateField]: event.target.value})
    }

    const handleSubmitItem = () => {
        mutation.mutate({...itemFormState})
        navigate('/items')
    }

    const SubmitPage = () => {
        return (
            <button
                disabled={mutation.isLoading}
                onClick={() => handleSubmitItem}
            >
                Add Item
            </button>
        )
    }

    return (
        <div style={baseClasses.contentContainer}>
            <div style={formClasses.formContainer}>
                Create Item Sections
                <SubmitPage />
            </div>
        </div>
    )
}

export default CreateItemController