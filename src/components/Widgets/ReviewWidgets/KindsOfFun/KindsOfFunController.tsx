import React from 'react'

const kindsOfFunStyles = () => {
  return {
    kindsOfFunContainer: {
      width: '100%',
      height: '100%',
      display: 'flex',
      flexDirection: 'column' as 'column',
      justifyContent: 'center',
      overflow: 'auto'
    },
    kindsOfFunHeaderText: {
      fontFamily: 'Righteous', 
      fontSize: '1.5em',
      margin: '0px',
      padding: '0px',
      borderTop: '1px solid black',
      borderBottom: '1px solid black'
    },
    kindsOfFunHeaderContainer: {
      display: 'flex', 
      justifyContent: 'center'
    },
    kindOfFunDisplayContainer: {

    },
    kindOfFunText: {
      fontSize: '1.55em',
      fontFamily: 'Bungee'
    },
    kindsOfFunTypesContainer: {
      margin: '0em auto'
    }
  }
}

export enum KindOfFunEnum {
  SENSORY = 'SENSORY',
  FANTASY = 'FANTASY',
  NARRATIVE = 'NARRATIVE',
  CHALLENGE = 'CHALLENGE',
  FELLOWSHIP = 'FELLOWSHIP',
  DISCOVERY = 'DISCOVERY',
  EXPRESSION = 'EXPRESSION',
  SUBMISSION = 'SUBMISSION',
  NOSTALGIA = 'NOSTALGIA'
}

export type KindsOfFunData = {
  kindOfFunType: KindOfFunEnum
  detailText: string,
  funPriority: number
}

const mockKindsOfFunData: KindsOfFunData[] = [
  {
    kindOfFunType: KindOfFunEnum.NOSTALGIA,
    detailText: 'Some detail text about how it is nastalgic or whatever',
    funPriority: 2
  },
  {
    kindOfFunType: KindOfFunEnum.SENSORY,
    detailText: 'Some detail text about how it is sensory and feels great',
    funPriority: 1
  },
  {
    kindOfFunType: KindOfFunEnum.SUBMISSION,
    detailText: 'Some detail text about how it is mindless and that feels alright',
    funPriority: 3
  },
]

const KindsOfFunController: React.FC = () => {
  const styles = kindsOfFunStyles()
  const data: KindsOfFunData[] = mockKindsOfFunData
  const sortedData: KindsOfFunData[] = data.sort((a, b) => a.funPriority - b.funPriority)

  const KindOfFunDisplay: React.FC<{kindOfFunData: KindsOfFunData}> = ({kindOfFunData}) => {
    return (
      <div className='kindOfFunDisplayContainer' style={styles.kindOfFunDisplayContainer}>
        <h3 className='kindOfFunText' style={styles.kindOfFunText}>
          {kindOfFunData.funPriority} - {kindOfFunData.kindOfFunType}
        </h3>
      </div>
    )
  }

  return (
    <div className='kindsOfFunContainer' style={styles.kindsOfFunContainer}>
      <div className='kindsOfFunHeaderContainer' style={styles.kindsOfFunHeaderContainer}>
        <h2 className='kindsOfFunHeaderText' style={styles.kindsOfFunHeaderText}>
          Kinds of Fun
        </h2>
      </div>
      <div className='kindsOfFunTypesContainer' style={styles.kindsOfFunTypesContainer}>
        {
          sortedData.map((kindOfFun: KindsOfFunData) => {
            return (
              <KindOfFunDisplay 
                kindOfFunData={kindOfFun}
              />
            )
          })
        }
      </div>
    </div>
  )
}

export default KindsOfFunController