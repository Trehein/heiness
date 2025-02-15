import React from 'react'
import { useDocumentQuery } from '@tanstack-query-firebase/react/firestore';
import { doc } from 'firebase/firestore';
import { firestore } from '../fbConfig/fbConfig';



const TestCrud: React.FC = () => {

  const docRef = doc(firestore, 'skills')
  return (
    <div>

    </div>
  )
}

export default TestCrud