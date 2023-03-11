import React from 'react'
import { useFirestoreQuery } from "@react-query-firebase/firestore";
import {
  query,
  collection,
} from "firebase/firestore";
import { firestore } from '../../fbConfig/fbConfig.';

const SkillList: React.FC = () => {
  const ref = query(collection(firestore, "skills"));
  const collectionQuery = useFirestoreQuery(["skills"], ref, {
    subscribe: true,
  });
  const snapshot = collectionQuery.data
  console.log('snapshot', snapshot?.docs[0])

  return (
      <>
          { 
              snapshot !== undefined &&
              snapshot.docs.map((docSnapshot) => {
                  const data = docSnapshot.data();
                    console.log('data', data)
                  return( 
                    <div>
                        {data.title}
                    </div>
                )
              })
          }
      </>
  )
}

export default SkillList