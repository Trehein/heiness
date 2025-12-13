import React from 'react'

export type RatingsRubricSummarySquareProps = {
  displayValue: number
  categoryName: string
  backgroundColor: string
}

const ratingsRubricSummarySquareStyles = () => {
  return {
    ratingsRubricSummarySquareContainer: {
      display: 'flex',
      justifyContent: 'center',
      width: '100%'
    },
    ratingsRubricSummarySquare: {
      width: '90%',
      border: '1px solid black',
      borderRadius: '.5em'
    },
    innerSquareContainer: {
      display: 'flex',
      flexDirection: 'column' as 'column',
      alignItems: 'center',
    },
    displayValueText: {
      padding: '0px',
      margin: '0px',
      fontSize: '1.25em',
      fontFamily: 'Alfa Slab One',      
    },
    displayValueTextContainer: {

    },
    displayIconsContainer: {

    },
    displayRatingsCategoryName: {
      padding: '0px',
      margin: '0px',
      fontFamily: 'Righteous', 
      fontSize: '1em',
      borderBottom: '1px solid black'
    },
    displayCategoryNameContainer: {

    }
  }
}

const RatingsRubricSummarySquare: React.FC<RatingsRubricSummarySquareProps> = ({displayValue, backgroundColor, categoryName}) => {
  const styles = ratingsRubricSummarySquareStyles()
  
  return (
    <div className='ratingsRubricSummarySquareContainer' style={styles.ratingsRubricSummarySquareContainer}>
      <div className='ratingsRubricSummarySquare' style={{...styles.ratingsRubricSummarySquare, backgroundColor: backgroundColor}}>
        <div className='innerSquareContainer' style={styles.innerSquareContainer}>
          <div className='displayCategoryNameContainer' style={styles.displayCategoryNameContainer}>
            <h3 className='displayRatingsCategoryName' style={styles.displayRatingsCategoryName}>
              {categoryName}
            </h3>
          </div>
          <div className='displayValueTextContainer' style={styles.displayValueTextContainer}>
            <h2 className='displayValueText' style={styles.displayValueText}>
              {displayValue}
            </h2>
          </div>

        </div>
      </div>
    </div>
  )
}

export default RatingsRubricSummarySquare