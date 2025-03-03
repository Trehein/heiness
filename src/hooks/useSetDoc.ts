import { addDoc, collection} from "firebase/firestore"; 
import { auth, firestore } from "../fbConfig/fbConfig";


export type UseSetDocParams = {
  collectionName: string
  data: any,
  isUserIdIncluded?: boolean
}

export const useSetDoc = async (params: UseSetDocParams) => {
  const {collectionName, data, isUserIdIncluded} = params
  const userId = auth.currentUser?.uid
  console.log('userId', userId)

  try {
    let fullDoc = data
    if(isUserIdIncluded) {
      fullDoc = {...data, createdById: userId}
    }

    const docRef = await addDoc(collection(firestore, collectionName), fullDoc)
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error(e)
  }
}
