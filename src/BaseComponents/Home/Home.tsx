import React from 'react'
import UnitList from '../Units/UnitList'

export type HomeProps = {
    AddExample: React.FC,
    UnitList: React.FC
}

const Home: React.FC<HomeProps> = (props) => {
    const {AddExample} = props
    return (
        <div>
            Home
            <AddExample />
            <UnitList />
        </div>
    )
}

export default Home