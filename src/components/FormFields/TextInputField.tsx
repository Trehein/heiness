import React from 'react'
import { formStyles } from './formStyles'

export type TextInputFieldProps = {
    labelText: string,
    fieldValue: string,
    targetField: string,
    handleChangeValue: Function
}

const TextInputField: React.FC<TextInputFieldProps> = (props) => {
    const {labelText, fieldValue, targetField, handleChangeValue, } = props
    const formClasses = formStyles()

    return (
        <div style={formClasses.formTextField}>
            <label>{labelText}</label>
            <input
                // style={formClasses.formTextInput}
                type="text" 
                value={fieldValue} 
                onChange={(e) => handleChangeValue(e, targetField)}
            />
        </div>

    )
}

export default TextInputField