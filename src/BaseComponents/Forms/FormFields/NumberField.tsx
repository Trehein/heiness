import React from 'react'
import { formStyles } from '../formStyles'

export type NumberFieldProps = {
    labelText: string,
    fieldValue: number,
    targetField: string,
    stepAmount: number,
    valueRange: {minValue: number, maxValue: number}
    handleChangeValue: Function
}

const NumberField: React.FC<NumberFieldProps> = (props) => {
    const {labelText, fieldValue, targetField, stepAmount, valueRange, handleChangeValue} = props
    const formClasses = formStyles()

    return (
        <div style={formClasses.formNumberField}>
            <label style={formClasses.formNumberFieldLabel}>{labelText}</label>
            <input 
                type="number"
                min={valueRange.minValue}
                max={valueRange.maxValue}
                step={stepAmount}
                value={fieldValue}
                onChange={(e) => handleChangeValue(e, targetField)}
            />
        </div>

    )
}

export default NumberField