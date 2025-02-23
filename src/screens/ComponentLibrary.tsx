import React from 'react'
import Dice from '../components/Dice/Dice'

const ComponentLibrary: React.FC = () => {
  return (
    <div>
      <Dice 
        size={200} 
        diceColor={'orange'} 
        dotColor={'white'} 
        displayValue={1}          
      />
      <Dice 
        size={200} 
        diceColor={'salmon'} 
        dotColor={'white'} 
        displayValue={2}          
      />
            <Dice 
        size={200} 
        diceColor={'gold'} 
        dotColor={'white'} 
        displayValue={3}          
      />
            <Dice 
        size={200} 
        diceColor={'aquamarine'} 
        dotColor={'white'} 
        displayValue={4}          
      />
            <Dice 
        size={200} 
        diceColor={'lightskyblue'} 
        dotColor={'white'} 
        displayValue={5}          
      />
            <Dice 
        size={200} 
        diceColor={'rebeccapurple'} 
        dotColor={'white'} 
        displayValue={6}          
      />
    </div>
  )
}

export default ComponentLibrary