import React from 'react'
import { baseStyles } from '../../globalStyles/baseStyles'
import AddExample from '../AddExample/AddExample'
import UnitList from './UnitList'

const UnitHome: React.FC = () => {
    const baseClasses = baseStyles()

    return (
        <div style={baseClasses.screenContainer}>
            <AddExample />
            <UnitList />
        </div>
    )
}

export default UnitHome