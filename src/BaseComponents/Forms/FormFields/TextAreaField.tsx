import React from 'react'
import { formStyles } from '../formStyles'

export type TextAreaFieldProps = {
    labelText: string,
    fieldValue: string,
    targetField: string,
    handleChangeValue: Function
}

const TextAreaField: React.FC<TextAreaFieldProps> = (props) => {
    const {labelText, fieldValue, targetField, handleChangeValue} = props
    const formClasses = formStyles()

    return (
        <div style={formClasses.formTextField}>
            <label>{labelText}</label>
            <textarea 
                onChange={(e) => handleChangeValue(e, targetField)} 
                rows={4} 
                cols={30} 
                defaultValue={fieldValue} 
            />
        </div>
    )
}

export default TextAreaField