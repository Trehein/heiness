import { query, collection, getDocs} from "firebase/firestore"
import { firestore } from "../fbConfig/fbConfig"

const q = query(collection(firestore, 'skills'))
const skillsCollection = async () => await getDocs(q)

export enum Collection {
  SKILLS = 'skillsCollection'
}

export const queryCollections: any = {
  skillsCollection: skillsCollection
}