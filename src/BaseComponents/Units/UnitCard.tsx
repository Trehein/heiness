import React from 'react'
import BaseButton from '../Buttons/BaseButton'
import { collection, doc } from "firebase/firestore";
import { firestore } from '../../fbConfig/fbConfig';
import { useFirestoreDocumentMutation, useFirestoreDocumentDeletion  } from '@react-query-firebase/firestore';

export type UnitCardProps = {
    unitData: any
    id: string
}

const UnitCard: React.FC<UnitCardProps> = (props) => {
    const {unitData, id} = props
    const data = collection(firestore, "units");
    const ref = doc(data, id);
    const updateMutation = useFirestoreDocumentMutation(ref, {
        merge: true // just updates changed fields instead of requiring spread copy of object
    });
    const deleteMutation = useFirestoreDocumentDeletion(ref)


    const updateUnit = () => {
        updateMutation.mutate({
            // ...unitData, // not needed because of merge in the mutation
            name: 'updated unit with merge'
        })
    }

    const deleteUnit = () => {
        deleteMutation.mutate()
    }

    return (
        <div>
            {unitData.name}
            <BaseButton 
                onClick={updateUnit} 
                displayText={'Update'}
                labelText={'Update Button'}    
            />
            <BaseButton
                onClick={deleteUnit}
                displayText={'Delete'}
                labelText={'Delete Button'}
            />
        </div>
    )
}

export default UnitCard