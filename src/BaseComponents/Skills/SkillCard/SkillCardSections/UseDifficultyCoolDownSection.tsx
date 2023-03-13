import React from 'react'

export type UseDifficultyCoolDownSectionProps = {
    coolDown: number
    useDifficulty: number
}

const UseDifficultyCoolDownSection: React.FC<UseDifficultyCoolDownSectionProps> = (props) => {
    const { coolDown, useDifficulty } = props
    return (
        <div>
            <div>Use difficulty: {useDifficulty}</div>
            <div>Cool Down: {coolDown}</div>
        </div>
    )
}

export default UseDifficultyCoolDownSection