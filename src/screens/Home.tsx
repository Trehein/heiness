import React from 'react'
import Dice from '../components/Dice/Dice'

const Home: React.FC = () => {
  return (
    <div>
      <h2>HOME</h2>
      <Dice 
        size={200} 
        diceColor={'orange'} 
        dotColor={'white'} 
        displayValue={1}          
      />
      <Dice 
        size={200} 
        diceColor={'orange'} 
        dotColor={'white'} 
        displayValue={2}          
      />
            <Dice 
        size={200} 
        diceColor={'orange'} 
        dotColor={'white'} 
        displayValue={3}          
      />
            <Dice 
        size={200} 
        diceColor={'orange'} 
        dotColor={'white'} 
        displayValue={4}          
      />
            <Dice 
        size={200} 
        diceColor={'orange'} 
        dotColor={'white'} 
        displayValue={5}          
      />
            <Dice 
        size={200} 
        diceColor={'orange'} 
        dotColor={'white'} 
        displayValue={6}          
      />
    </div>
  )
}

export default Home