import React from 'react'
import { useFirestoreQuery } from "@react-query-firebase/firestore";
import {
  query,
  collection,
} from "firebase/firestore";
import { firestore } from '../../fbConfig/fbConfig.';
import UnitCard from './UnitCard';

const UnitList: React.FC = () => {
  // Define a query reference using the Firebase SDK
  const ref = query(collection(firestore, "units"));
  const collectionQuery = useFirestoreQuery(["units"], ref, {
    subscribe: true,
  });
  const snapshot = collectionQuery.data

  return (
      <>
          { 
              snapshot !== undefined &&
              snapshot.docs.map((docSnapshot) => {
                  const data = docSnapshot.data();

                  return( 
                    <UnitCard
                      key={docSnapshot.id} 
                      unitData={data} 
                      id={docSnapshot.id}
                    />)
              })
          }
      </>
  )
}

export default UnitList