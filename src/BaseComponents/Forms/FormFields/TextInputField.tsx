import React from 'react'

export type TextInputFieldProps = {
    labelText: string,
    fieldValue: string,
    targetField: string,
    handleChangeValue: Function
}

const TextInputField: React.FC<TextInputFieldProps> = (props) => {
    const {labelText, fieldValue, targetField, handleChangeValue, } = props
    return (
        <>
            <label>{labelText}</label>
            <input
                // style={formClasses.formTextInput}
                type="text" 
                value={fieldValue} 
                onChange={(e) => handleChangeValue(e, targetField)}
            />
        </>

    )
}

export default TextInputField