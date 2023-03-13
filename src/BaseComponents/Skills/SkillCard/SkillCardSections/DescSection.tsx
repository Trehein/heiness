import React from 'react'

export type DescSectionProps = {
    desc: string
}

// desc
const DescSection: React.FC<DescSectionProps> = (props) => {
    const {desc} = props
    return (
        <div>
            Description {desc}
        </div>
    )
}

export default DescSection