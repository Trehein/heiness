import React from 'react'
import { IoMdAddCircleOutline } from "react-icons/io";
import { HiOutlineMinusCircle } from "react-icons/hi";
import { IconContext } from 'react-icons';

const highLowControllerStyles = () => {
  return {
    highLowContainer: {
      width: '100%',
      height: '100%',
      display: 'flex',
      flexDirection: 'column' as 'column',
      justifyContent: 'center',
      overflow: 'auto'
    },
    highLowSectionHeaderContainer: {
      display: 'flex', 
      justifyContent: 'center'
    },
    highLowSectionHeaderText: {
      fontFamily: 'Righteous', 
      fontSize: '1.5em',
      margin: '0px',
      padding: '0px',
      borderTop: '1px solid black',
      borderBottom: '1px solid black'
    },
    highLowListContainer: {
      fontFamily: 'Roboto', 
      padding: '0px',
      width: '95%',
      margin: '0px auto'
    },
    highLowListItemContainer: {
      display: 'flex',
      alignItems: 'center',
      margin: '.5em 0em'

    },
    highLowListItemIconContainer: {
      margin: '0em .5em',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    },
  }
}

export type HighLowData = {
  mainText: string,
  detailText: string,
  highLowType: 'HIGH' | 'LOW'
}

const mockHighLowData: HighLowData[] = [
  {
    mainText: 'MORE HIGH Reason that goes multi line',
    detailText: 'Details for the reason go here',
    highLowType: 'HIGH'
  },
  {
    mainText: 'A LOW Reason',
    detailText: 'Details for the reason go here',
    highLowType: 'LOW'
  },
  {
    mainText: 'A HIGH Reason', 
    detailText: 'Details for the reason go here',
    highLowType: 'HIGH'
  },
    {
    mainText: 'Again LOW Reason',
    detailText: 'Details for the reason go here',
    highLowType: 'LOW'
  },
  {
    mainText: 'Also LOW Reason',
    detailText: 'Details for the reason go here',
    highLowType: 'LOW'
  },
    {
    mainText: 'AGAIN HIGH Reason',
    detailText: 'Details for the reason go here',
    highLowType: 'HIGH'
  }
]

const HighLowController: React.FC = () => {
  const styles = highLowControllerStyles()
  const data = mockHighLowData

  const HighLowListItem: React.FC<{listItem: HighLowData}> = ({listItem}) => {
    return (
      <li className='highLowListItemContainer' style={styles.highLowListItemContainer}>
        <div className='highLowListItemIconContainer' style={styles.highLowListItemIconContainer}>
          <IconContext.Provider
              value={{size: '1.25em'}}
          >
            {listItem.highLowType === 'HIGH' ? <IoMdAddCircleOutline /> : <HiOutlineMinusCircle />}
          </IconContext.Provider>
        </div>
        {listItem.mainText}
      </li>
    )
  }

  const HighLowSection: React.FC<{highLowType: 'HIGH' | 'LOW'}> = ({highLowType}) => {
    return (
      <>
        <div className='highLowSectionHeader' style={styles.highLowSectionHeaderContainer}>
          <h2 className='highLowSectionHeaderText' style={styles.highLowSectionHeaderText}>
            {highLowType}S
          </h2>
        </div>
        <ul className='highLowListContainer' style={styles.highLowListContainer}>
          {
            data.filter((highLowData: HighLowData) => highLowData.highLowType === highLowType).map((highLowData: HighLowData) => {
              return (
                <div>
                  <HighLowListItem listItem={highLowData} />
                </div>
              )
            })
          }
        </ul>
      </>
    )
  }

  return (
    <div className='highLowContainer' style={styles.highLowContainer}>
      <HighLowSection highLowType='HIGH'/>
      <HighLowSection highLowType='LOW'/>
    </div>
  )
}

export default HighLowController