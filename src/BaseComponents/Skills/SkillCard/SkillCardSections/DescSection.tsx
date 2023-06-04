import React from 'react'

export type DescSectionProps = {
    desc: string
}

export const descSectionStyles = () => {
    return {
        descContainer: {
            width: '95%',
            margin: '.5em auto',
            fontSize: '.75em'
        }
    }
}

// desc
const DescSection: React.FC<DescSectionProps> = (props) => {
    const {desc} = props
    const descSectionClasses = descSectionStyles()
    return (
        <div style={descSectionClasses.descContainer}>
            Description {desc}
        </div>
    )
}

export default DescSection