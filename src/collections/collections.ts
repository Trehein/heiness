import { query, collection, getDocs} from "firebase/firestore"
import { firestore } from "../fbConfig/fbConfig"

const skillsQuery = query(collection(firestore, 'skills'))
const skillsCollection = async () => await getDocs(skillsQuery)

export enum Collection {
  SKILLS = 'skillsCollection'
}

export const queryCollections: any = {
  skillsCollection: skillsCollection
}