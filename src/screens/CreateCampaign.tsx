import React, { useState } from 'react'
import TextInputField from '../components/FormFields/TextInputField'
import { useSetDoc } from '../hooks/useSetDoc'
import BaseButton from '../components/Buttons/BaseButton'

export type CreateCampaignState = {
  titleText: string
}

const CreateCampaign: React.FC = () => {
  const [state, setState] = useState<CreateCampaignState>({titleText: ''})

  const handleChangeTitleValue = (e: any, stateField: string) => {
    setState({...state, [stateField]: e.target.value})
  }

  const handleCreateCampaign = async () => {
    useSetDoc({
      collectionName: 'campaigns',
      data: state,
      isUserIdIncluded: true
    })
  }

  return (
    <div>
      <TextInputField 
        labelText={'Campaign Title'} 
        fieldValue={state.titleText} 
        targetField={'titleText'} 
        handleChangeValue={handleChangeTitleValue}        
      />
      <BaseButton 
        onClick={handleCreateCampaign} 
        displayText={'Create Campaign'} 
        labelText={'Create Campaign'}      
      />
    </div>
  )
}

export default CreateCampaign