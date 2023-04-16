import React from 'react'
import { useParams } from 'react-router-dom'
import { doc } from "firebase/firestore";
import { useFirestoreDocument } from "@react-query-firebase/firestore";
import { firestore } from '../../fbConfig/fbConfig';
import { baseStyles } from '../../globalStyles/baseStyles';

const SkillDetails: React.FC = () => {
    const { id } = useParams()
    const baseClasses = baseStyles()
    // static doc query
    const docRef = doc(firestore, 'skills', id !== undefined ? id : '') // needs the ternary because id may be undefined coming back from useParams()
    const skillFromId = useFirestoreDocument(['skills', id], docRef)
    const snapShotOfSkillFromId = skillFromId.data

    return (
        <div style={baseClasses.contentContainer}>
            {id}
        </div>
    )
}

export default SkillDetails




