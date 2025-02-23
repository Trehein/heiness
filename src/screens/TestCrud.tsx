import React from 'react'
import { collection, addDoc } from 'firebase/firestore';
import { firestore } from '../fbConfig/fbConfig';
import { useGet } from '../hooks/useGet';
import BasicLoading from '../components/Loading/BasicLoading';
import { Collection } from '../collections/collections';

export const addDocToDb = async () => {
  try {
    const docRef = await addDoc(collection(firestore, "tester"), {
      first: "Ada",
      last: "Lovelace",
      born: 1815
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error('error adding to db', e)
  }
}

const TestCrud: React.FC = () => {
  // const docRef = doc(firestore, 'skills')
  const {mappedData, isLoading} = useGet(Collection.SKILLS)

  if(isLoading) {
    return (<BasicLoading />)
  }

  return (
    <div>
      <button onClick={addDocToDb}>Create tester</button>
      {mappedData?.map((data: any, index: number) => {
        return (
          <div key={index}>{data.useDifficulty}</div>
        )
      })}
    </div>
  )
}

export default TestCrud