import React from 'react'

export type NumberFieldProps = {
    labelText: string,
    fieldValue: number,
    targetField: string,
    objKey: string,
    handleChangeDynamicObjValue: Function
}

const NumberField: React.FC<NumberFieldProps> = (props) => {
    const {labelText, fieldValue, targetField, objKey, handleChangeDynamicObjValue, } = props
    return (
        <>
            <label>{labelText}</label>
            <input 
                type="number"
                min='0'
                max='10'
                value={fieldValue}
                onChange={(e) => handleChangeDynamicObjValue(e, targetField, objKey)}
            />
        </>

    )
}

export default NumberField