import React from 'react'
import { useFirestoreQuery } from "@react-query-firebase/firestore";
import {
  query,
  collection,
  QuerySnapshot,
  DocumentData,
} from "firebase/firestore";
import { firestore } from '../../fbConfig/fbConfig.';


const UnitList: React.FC = () => {
  // Define a query reference using the Firebase SDK
  const ref = query(collection(firestore, "units"));

  // Provide the query to the hook
//   const collectionQuery = useFirestoreQuery(["units"], ref);
  const collectionQuery = useFirestoreQuery(["units"], ref, {
    subscribe: true,
  });

    const snapshot = collectionQuery.data

    console.log('snapshot', snapshot?.docs[0].data())

    return (
        <>
            { 
                snapshot !== undefined &&
                snapshot.docs.map((docSnapshot) => {
                    const data = docSnapshot.data();
                    return <div key={docSnapshot.id}>{data.name}</div>
                })
            }
        </>
    )
}

export default UnitList