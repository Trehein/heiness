import { useFirestoreCollectionMutation } from "@react-query-firebase/firestore";
import { collection } from "firebase/firestore";
import { firestore } from "../../../fbConfig/fbConfig";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { baseStyles } from "../../../globalStyles/baseStyles";
import { formStyles } from "../formStyles";
import { PhysicalTraitFormStateObj } from "./constants";


export const initialPhysicalTraitFormObj: PhysicalTraitFormStateObj = {
  name: '',
  desc: '',
  traitType: '', // todo - update to personalityTrait enum
  effects: [] // todo - update to personalityTraitEffectType type (name, desc, stat / focus, amount)
}

const CreatePhysicalTraitController: React.FC = () => {
  const ref = collection(firestore, "physicalTraits");
  const mutation = useFirestoreCollectionMutation(ref)
  const navigate = useNavigate()
  const baseClasses = baseStyles()
  const formClasses = formStyles()
  const [physicalTraitFormState, setPhysicalTraitFormState] = useState<PhysicalTraitFormStateObj>(initialPhysicalTraitFormObj)

  const handleChangeValue = (event: any, physicalTraitFormStateField: string) => {
    setPhysicalTraitFormState({...physicalTraitFormState, [physicalTraitFormStateField]: event.target.value})
  }

  const handleSubmitFaction = () => {
      mutation.mutate({...physicalTraitFormState})
      navigate('/physical-traits')
  }

  const SubmitPage = () => {
      return (
          <button
              disabled={mutation.isLoading}
              onClick={() => handleSubmitFaction}
          >
              Add Physical Trait
          </button>
      )
  }

  return (
      <div style={baseClasses.contentContainer}>
          <div style={formClasses.formContainer}>
              PhysicalTraitFormContainer
              <SubmitPage />
          </div>
      </div>
  )
}

export default CreatePhysicalTraitController