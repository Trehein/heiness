import React from 'react'
import { useFirestoreQuery } from "@react-query-firebase/firestore";
import {
  query,
  collection,
  QueryDocumentSnapshot,
  DocumentData
} from "firebase/firestore";
import { firestore } from '../../fbConfig/fbConfig.';
import { Link } from 'react-router-dom';

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

  return (
      <>
          { 
              querySnapshot !== undefined &&
              querySnapshot.docs.map((docSnapshot: QueryDocumentSnapshot<DocumentData>) => {
                  const data = docSnapshot.data();
                    // console.log('data', data)
                    // console.log(docSnapshot.id)
                  return( 
                    <Link key={docSnapshot.id} to={`/skills/${docSnapshot.id}`}>
                      <div>
                        {data.title}
                      </div>
                    </Link>
                )
              })
          }
      </>
  )

}

export default SkillList