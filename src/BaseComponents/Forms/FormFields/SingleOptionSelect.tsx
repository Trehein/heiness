import React from 'react'

export type SingleOptionSelectProps = {
    labelText: string,
    fieldValue: string,
    targetField: string,
    optionArray: string[],
    handleChangeValue: Function
}

const SingleOptionSelect: React.FC<SingleOptionSelectProps> = (props) => {
    const {labelText, fieldValue, targetField, optionArray, handleChangeValue} = props
    return (
        <>
            <label>{labelText}</label>
            <select onChange={(e) => handleChangeValue(e, targetField)} value={fieldValue}>
                {optionArray.map((option: string) => {
                    return <option key={option} value={option}>{option}</option>
                })}
            </select>
        </>
    )
}

export default SingleOptionSelect