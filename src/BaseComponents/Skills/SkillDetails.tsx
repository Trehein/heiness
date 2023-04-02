import React from 'react'
import { useParams } from 'react-router-dom'
import { doc } from "firebase/firestore";
import { useFirestoreDocument } from "@react-query-firebase/firestore";
import { firestore } from '../../fbConfig/fbConfig';
import { generalStyles } from '../../generalStyles';

const SkillDetails: React.FC = () => {
    const { id } = useParams()
    const generalClasses = generalStyles()
    // static doc query
    const docRef = doc(firestore, 'skills', id !== undefined ? id : '') // needs the ternary because id may be undefined coming back from useParams()
    const skillFromId = useFirestoreDocument(['skills', id], docRef)
    const snapShotOfSkillFromId = skillFromId.data

    return (
        <div style={generalClasses.contentContainer}>
            {id}
        </div>
    )
}

export default SkillDetails




