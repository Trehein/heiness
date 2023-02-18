import React from 'react'

export type NumberSelectionBarProps = {
    currentValue: number,
    onClick: Function
}

export const numberSelectionBarStyles = () => {
    return {
        barContainer: {
            width: 'fit-content',
            margin: '0px auto',
            border: '1px solid yellow',
            display: 'flex',
        },
        emptyBox: {
            height: '1em',
            width: '1em',
            border: '1px solid green',
            margin: '.25em'
        },
        filledBox: {
            height: '1em',
            width: '1em',
            border: '1px solid purple',
            backgroundColor: 'pink',
            margin: '.25em'
        }
    }
}

const NumberSelectionBar: React.FC<NumberSelectionBarProps> = (props) => {
    const {onClick, currentValue} = props
    const numberSelectionBarClasses = numberSelectionBarStyles()
    const numberArray = [...Array(10)].map((u, i) => i)
    console.log(currentValue)

    return (
        <div style={numberSelectionBarClasses.barContainer}>
            {numberArray.map((u, i) => {
                const value = i + 1
                const isActive = i + 1 <= currentValue

                return (
                    <div 
                        style={isActive ? numberSelectionBarClasses.filledBox : numberSelectionBarClasses.emptyBox}
                        onClick={() => onClick(value)}
                    >
                    </div>
                )
            })}
        </div>
    )
}

export default NumberSelectionBar