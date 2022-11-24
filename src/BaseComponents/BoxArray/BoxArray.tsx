import React from 'react'
import { boxArrayStyles } from './boxArrayStyles'

export type BoxArrayProps = {
    ChildComponentArray: React.ReactNode[]
}

const BoxArray: React.FC<BoxArrayProps> = (props) => {
    const { ChildComponentArray } = props
    const boxArrayClasses = boxArrayStyles()

    return (
        <div className={'boxArrayContainer'}style={boxArrayClasses.boxArrayContainer} >
            {ChildComponentArray.map((ChildComponent: React.ReactNode) => {
                return (
                    <div style={boxArrayClasses.boxContainer}>
                        {ChildComponent}
                    </div>
                )
            })}
        </div>
    )
}

export default BoxArray