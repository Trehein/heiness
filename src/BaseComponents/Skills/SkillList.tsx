import React from 'react'
import { useFirestoreQuery } from "@react-query-firebase/firestore";
import {
  query,
  collection,
  QueryDocumentSnapshot,
  DocumentData
} from "firebase/firestore";
import { firestore } from '../../fbConfig/fbConfig.';
import SkillCard from './SkillCard/SkillCard';

export const skillListStyles = () => {
  return {
    listContainer: {
      border: '1px solid blue',
      marginTop: '1em',
      width: window.innerWidth < 420 ? '95%' : '85%',
      margin: '1em auto 0em auto',
      display: 'flex',
      flexWrap: 'wrap' as 'wrap',
    }
  }
}

const SkillList: React.FC = () => {
  // todo - use this for websocket queries
  const queryRef = query(collection(firestore, "skills"));
  const collectionQuery = useFirestoreQuery(["skills"], queryRef, {
    subscribe: true,
  });
  const querySnapshot = collectionQuery.data
  const skillListClasses = skillListStyles()

  // static collection query
  // const queryRef = query(collection(firestore, 'skills'))
  // const collectionQuery = useFirestoreQuery(['skills'], queryRef)
  // const querySnapshot = collectionQuery.data

  return (
      <div className={'listContainer'} style={skillListClasses.listContainer}>
          { 
              querySnapshot !== undefined &&
              querySnapshot.docs.map((docSnapshot: QueryDocumentSnapshot<DocumentData>) => {
                  return(
                    <SkillCard key={docSnapshot.id} docSnapshot={docSnapshot} />
                )
              })
          }
      </div>
  )
}

export default SkillList