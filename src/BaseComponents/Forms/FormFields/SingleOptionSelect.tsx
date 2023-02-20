import React from 'react'
import { formStyles } from '../formStyles'

export type SingleOptionSelectProps = {
    labelText: string,
    fieldValue: string,
    targetField: string,
    optionArray: string[],
    handleChangeValue: Function
}

const SingleOptionSelect: React.FC<SingleOptionSelectProps> = (props) => {
    const {labelText, fieldValue, targetField, optionArray, handleChangeValue} = props
    const formClasses = formStyles()

    return (
        <div style={formClasses.formNumberField}>
            <label style={formClasses.formNumberFieldLabel}>{labelText}</label>
            <select onChange={(e) => handleChangeValue(e, targetField)} value={fieldValue}>
                {optionArray.map((option: string) => {
                    return <option key={option} value={option}>{option}</option>
                })}
            </select>
        </div>
    )
}

export default SingleOptionSelect