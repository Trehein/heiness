import React from 'react'
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Legend, Tooltip } from 'recharts'

// new choices - companions
// new actions / verbs
// new growth - unlock
// new challenges
// new world - env, characters, interactions, explore

// Radar Chart

const replayabilityControllerStyles = () => {
  return {
    replayabilityInnerContainer: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column' as 'column'
    },
    replayabilityHeaderTextContainer: {

    },
    replayabilityHeaderText: {
      fontFamily: 'Righteous', 
      fontSize: '1.5em',
      margin: '0px',
      padding: '0px',
      borderTop: '1px solid black',
      borderBottom: '1px solid black'
    }
  }
}



const mockReplayabilityData = [
  {
    replayFactor: 'Choices',
    replayFactorRating: 2,
    replayFactorDetailsText: 'some details about the choices you continue to make and will be able to change'
  },
    {
    replayFactor: 'Actions',
    replayFactorRating: 4,
    replayFactorDetailsText: 'some details about the ACTIONS and how they are new verbs and stuff'
  },
    {
    replayFactor: 'Growth',
    replayFactorRating: 2,
    replayFactorDetailsText: 'How does your character or your understanding of the games GROW'
  },
    {
    replayFactor: 'Challenges',
    replayFactorRating: 5,
    replayFactorDetailsText: 'Are CHALLENGES worthwhile and meaningful tests of skill and understanding of systems or tedious grinds'
  },
    {
    replayFactor: 'World',
    replayFactorRating: 3,
    replayFactorDetailsText: 'the WORLD continues to grow and change as you play'
  }
]

// todo - overlay against GENRE and ALL

const ReplayabilityController: React.FC = () => {
  console.log('replay', mockReplayabilityData)
  const styles = replayabilityControllerStyles()

  return (
    <div className='replayabilityInnerContainer' style={styles.replayabilityInnerContainer}>
      <h2 className='replayabilityHeaderText' style={styles.replayabilityHeaderText}>
        Replayability
      </h2>
      <RadarChart style={{ width: '100%', maxWidth: '350px', maxHeight: '22.5vh', aspectRatio: 1 }} responsive data={mockReplayabilityData}>
          <PolarGrid />
          <PolarAngleAxis dataKey="replayFactor" fontSize={'.5em'}/>
          <PolarRadiusAxis
            tickCount={6}
            domain={[0, 5]} // Set your desired domain here
            tick={false} // Hide ticks
            axisLine={false} // Hide axis line
            tickFormatter={() => ''} // Hide tick labels
          />          
          {/* <Radar
            name="Genre"
            dataKey="A"
            stroke="#8884d8"
            fill="#8884d8"
            fillOpacity={0.6}
            isAnimationActive={true}
          /> */}
          <Radar
            name="This Game"
            dataKey="replayFactorRating"
            stroke="#82ca9d"
            fill="#82ca9d"
            fillOpacity={0.6}
            isAnimationActive={true}
            dot={{ r: 3, fill: '#82ca9d' }}
            activeDot={{ r: 6 }}
          />
          <Legend 
            layout='horizontal' 
            wrapperStyle={{fontSize: '.75em'}}
            iconSize={7}
            iconType='circle'
          />
          <Tooltip />
        </RadarChart>
    </div>
  )
}

export default ReplayabilityController