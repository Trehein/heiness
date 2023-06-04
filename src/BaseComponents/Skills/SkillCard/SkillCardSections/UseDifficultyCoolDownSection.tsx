import React from 'react'

export type CoolDownSectionProps = {
    coolDown: number
}

export const coolDownSectionStyles = () => {
    return {
        coolDownSectionContainer: {
            width: '95%',
            margin: '.25em auto',
            fontSize: '.75em'
        }
    }
}

const CoolDownSection: React.FC<CoolDownSectionProps> = (props) => {
    const { coolDown } = props
    const coolDownSectionClasses = coolDownSectionStyles()
    return (
        <div style={coolDownSectionClasses.coolDownSectionContainer}>
            <div>Cool Down: {coolDown}</div>
        </div>
    )
}

export default CoolDownSection