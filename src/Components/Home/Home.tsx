import React from 'react'

export type HomeProps = {
    AddExample: React.FC
}

const Home: React.FC<HomeProps> = (props) => {
    const {AddExample} = props
    return (
        <div>
            Home
            <AddExample />
        </div>
    )
}

export default Home