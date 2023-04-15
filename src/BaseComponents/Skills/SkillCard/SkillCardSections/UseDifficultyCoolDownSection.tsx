import React from 'react'

export type CoolDownSectionProps = {
    coolDown: number
}

const CoolDownSection: React.FC<CoolDownSectionProps> = (props) => {
    const { coolDown } = props
    return (
        <div>
            <div>Cool Down: {coolDown}</div>
        </div>
    )
}

export default CoolDownSection