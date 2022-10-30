import React, {useState} from 'react'
import { FormTypeEnum } from '../Forms/Enums/FormTypeEnum'
import FormSwitch from '../Forms/FormSwitch'

const Landing: React.FC = () => {
    const [selectedFormType, setSelectedFormType] = useState<undefined | FormTypeEnum>(undefined)

    return (
        <div>
            {
                selectedFormType === undefined ? 
                    <>
                        <button onClick={() => {setSelectedFormType(FormTypeEnum.SignIn)}}>Sign In</button>
                        <button onClick={() => {setSelectedFormType(FormTypeEnum.Register)}}>Register</button>
                    </>
                :
                    <>
                        <FormSwitch formType={selectedFormType} />
                    </>
            }
        </div>
    )
}

export default Landing