import React from 'react'
import { FormTypeEnum } from './Enums/FormTypeEnum'
import Register from './Register/Register'
import SignIn from './SignIn/SignIn'

export type FormSwitchProps = {
    formType: FormTypeEnum | undefined
}

const FormSwitch: React.FC<FormSwitchProps> = (props) => {
    const {formType} = props
    return (
        <>
            {formType === FormTypeEnum.Register && <Register />}
            {formType === FormTypeEnum.SignIn && <SignIn />}
        </>
    )
}

export default FormSwitch