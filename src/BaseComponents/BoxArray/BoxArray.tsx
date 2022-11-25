import React from 'react'
import { boxArrayStyles } from './boxArrayStyles'

export type BoxArrayProps = {
    ChildComponentArray: React.ReactNode[]
    boxContainerWidth: string
}

const BoxArray: React.FC<BoxArrayProps> = (props) => {
    const { ChildComponentArray, boxContainerWidth } = props
    const boxArrayClasses = boxArrayStyles({width: boxContainerWidth})

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