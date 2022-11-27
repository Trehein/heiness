import React from 'react'
import { generalStyles } from '../../generalStyles'
import AddExample from '../AddExample/AddExample'
import UnitList from './UnitList'

const UnitHome: React.FC = () => {
    const generalClasses = generalStyles()

    return (
        <div style={generalClasses.screenContainer}>
            <AddExample />
            <UnitList />
        </div>
    )
}

export default UnitHome