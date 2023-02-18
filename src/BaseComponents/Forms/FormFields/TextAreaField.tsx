import React from 'react'

export type TextAreaFieldProps = {
    labelText: string,
    fieldValue: string,
    targetField: string,
    handleChangeValue: Function
}

const TextAreaField: React.FC<TextAreaFieldProps> = (props) => {
    const {labelText, fieldValue, targetField, handleChangeValue} = props
    return (
        <>
            <label>{labelText}</label>
            <textarea 
                onChange={(e) => handleChangeValue(e, targetField)} 
                rows={10} 
                cols={30} 
                defaultValue={fieldValue} 
            />
        </>
    )
}

export default TextAreaField