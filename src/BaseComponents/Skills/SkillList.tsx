import React from 'react'
import { useFirestoreDocument, useFirestoreQuery } from "@react-query-firebase/firestore";
import {
  query,
  collection,
  QueryDocumentSnapshot,
  DocumentData,
  doc,
} from "firebase/firestore";
import { firestore } from '../../fbConfig/fbConfig.';

const SkillList: React.FC = () => {
  // todo - use this for websocket queries
  // const ref = query(collection(firestore, "skills"));
  // const collectionQuery = useFirestoreQuery(["skills"], ref, {
  //   subscribe: true,
  // });
  // const snapshot = collectionQuery.data
  // console.log('snapshot', snapshot?.docs[0])

  // static collection query
  const queryRef = query(collection(firestore, 'skills'))
  const collectionQuery = useFirestoreQuery(['skills'], queryRef)
  const querySnapshot = collectionQuery.data

  // static doc query
  const docId = 'jGnrN4Wjr270nkGMb3s7'
  const docRef = doc(firestore, 'skills', docId)
  const skillFromId = useFirestoreDocument(['skills', docId], docRef)

  const snapShotOfSkillFromId = skillFromId.data
  console.log('skillSnapshot', snapShotOfSkillFromId?.data())

  return (
      <>
          { 
              querySnapshot !== undefined &&
              querySnapshot.docs.map((docSnapshot: QueryDocumentSnapshot<DocumentData>) => {
                  const data = docSnapshot.data();
                    console.log('data', data)
                    console.log(docSnapshot.id)
                  return( 
                    <div key={docSnapshot.id}>
                        {data.title}
                    </div>
                )
              })
          }
      </>
  )

}

export default SkillList