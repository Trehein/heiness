import React from 'react'
import { IconContext } from 'react-icons'
import { TiEquals } from 'react-icons/ti'
import { FaPlus } from "react-icons/fa6";
import RatingsRubricSummarySquare from './RatingsRubricSummarySquare';

// import { LuScrollText } from "react-icons/lu"; // story
// import { GiStrongMan } from "react-icons/gi"; // chosen one

// import { MdVideoSettings } from "react-icons/md"; // HUD
// import { RiListSettingsFill } from "react-icons/ri"; // Menu
// import { BsMenuButtonWideFill } from "react-icons/bs"; // alt menu

// import { GiUltrasound } from "react-icons/gi"; // SFX
// import { IoMdMusicalNotes } from "react-icons/io"; // Music
// import { MdOutlineRecordVoiceOver } from "react-icons/md"; // Voice






const ratingsRubricControllerStyles = () => {
  return {
    ratingsRubricContainer: {
      width: '100%',
      height: '100%',
      display: 'flex',
      flexDirection: 'column' as 'column',
      overflow: 'auto'
    },
    ratingsRubricHeaderText: {
      fontFamily: 'Righteous', 
      fontSize: '1.5em',
      margin: '0px',
      padding: '0px',
      borderTop: '1px solid black',
      borderBottom: '1px solid black'
    },
    ratingsRubricHeaderContainer: {
      display: 'flex', 
      justifyContent: 'center'
    },
    ratingsRubricDisplayContainer: {
      border: '1px solid pink',
      marginTop: '.5em',
      width: '100%',
      height: '80%',
      display: 'flex'
    },
    ratingsRubricCategoryScoresContainer: {
      display: 'flex',
      flexDirection: 'column' as 'column',
      justifyContent: 'center',
      alignItems: 'center',
      width: '40%',
      height: '100%',
      border: '1px solid green'
    },
    ratingsRubricEqualsSignContainer: {
      display: 'flex',
      alignItems: 'center'
    },
    additionIconContainer: {
      display: 'flex',
      margin: '.2em 0em'
    },
    fullRatingScoreContainer: {
      border: '1px solid orange',
      width: '45%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    },
    fullRatingText: {
      width: 'fit-content',
      margin: '0px',
      padding: '0px',
      fontFamily: 'Alfa Slab One',      
      fontSize: '3.5em',
    },
    fullRatingScoreInnerBox: {
      border: '1px solid black',
      borderRadius: '.5em',
      width: '90%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    },
  }
}

export type RatingsFactor = {
  factorName: string,
  rating: number
}

export type RatingsData = {
  category: string,
  categoryName: string,
  factors: RatingsFactor[]
}

export const mockRatingsData: RatingsData[] = [
  {
    category: 'Genre',
    categoryName: 'Chosen One',
    factors: [
      {
        factorName: 'Tools',
        rating: 3 
      },
      {
        factorName: 'Growth',
        rating: 2 
      },
      {
        factorName: 'Feels Like',
        rating: 4 
      }
    ]
  },
  {
    category: 'Genre',
    categoryName: 'Story',
    factors: [
      {
        factorName: 'Decisions',
        rating: 1 
      },
      {
        factorName: 'Story Quality',
        rating: 2 
      },
      {
        factorName: 'Use of the Medium',
        rating: 2 
      }
    ]
  },
  {
    category: 'Genre',
    categoryName: 'Party Time',
    factors: [
      {
        factorName: 'Relations',
        rating: 2 
      },
      {
        factorName: 'Roles',
        rating: 2 
      },
      {
        factorName: 'Teamwork',
        rating: 4 
      }
    ]
  },
  {
    category: 'Style',
    categoryName: 'Visuals',
    factors: [
      {
        factorName: 'Elements of Art',
        rating: 5
      },
      {
        factorName: 'Shape and Form',
        rating: 2 
      }
    ]
  },
  {
    category: 'Style',
    categoryName: 'Audio',
    factors: [
      {
        factorName: 'Voice',
        rating: 3 
      },
      {
        factorName: 'Music',
        rating: 2 
      },
      {
        factorName: 'SFX',
        rating: 2 
      }
    ]
  },
  {
    category: 'Style',
    categoryName: 'Design',
    factors: [
      {
        factorName: 'Menus',
        rating: 2 
      },
      {
        factorName: 'HUD',
        rating: 2 
      }
    ]
  },
  {
    category: 'Fun',
    categoryName: 'Fun',
    factors: [
      {
        factorName: 'Accomplished Goal',
        rating: 4
      },
      {
        factorName: 'Ideas Explored',
        rating: 3 
      },      
      {
        factorName: 'Choices',
        rating: 1 
      }
    ]
  },
]

const filterByCategory = (ratingsData: RatingsData[], categoryFilter: 'Fun' | 'Style' | 'Genre') => {
  return ratingsData.filter((rating: RatingsData) => {
    return rating.category === categoryFilter
  })
}

const roundToTenth = (num: number) => {
  return Math.round(num * 10) / 10;
}

const calcAvgRating = (ratingsData: RatingsData[]) => {
  let runningTotal = 0
  const numberOfRatings = ratingsData.length

  ratingsData.forEach((ratingData: RatingsData) => {
    let runningFactorTotal = 0
    const numberOfFactors = ratingData.factors.length

    ratingData.factors.forEach((factor: {factorName: string, rating: number}) => {
      runningFactorTotal += factor.rating
    })

    runningTotal += roundToTenth(runningFactorTotal / numberOfFactors)
  })

  return roundToTenth((runningTotal / numberOfRatings))
}

const RatingsRubricController: React.FC = () => {
  const styles = ratingsRubricControllerStyles()

  // genre + aesthetics + fun factor
  return (
    <div className='ratingsRubricContainer' style={styles.ratingsRubricContainer}>
      <div className='ratingsRubricHeaderContainer' style={styles.ratingsRubricHeaderContainer}>
        <h2 className='scatterPlotHeaderText' style={styles.ratingsRubricHeaderText}>
          Ratings
        </h2>
      </div>
      <div className='ratingsRubricDisplayContainer' style={styles.ratingsRubricDisplayContainer}>
        <div className='ratingsRubricCategoryScoresContainer' style={styles.ratingsRubricCategoryScoresContainer}>
          <RatingsRubricSummarySquare 
            displayValue={calcAvgRating(filterByCategory(mockRatingsData, 'Genre'))}
            categoryName={'GENRE'}
            backgroundColor={'white'}
          />
          <div className='additionIconContainer' style={styles.additionIconContainer}>
            <IconContext.Provider
                value={{size: '1.4em'}}
            >
              {<FaPlus />}
            </IconContext.Provider>
          </div>
          <RatingsRubricSummarySquare 
            displayValue={calcAvgRating(filterByCategory(mockRatingsData, 'Style'))}
            categoryName={'STYLE'}
            backgroundColor={'white'}
          />
          <div className='additionIconContainer' style={styles.additionIconContainer}>
            <IconContext.Provider
                value={{size: '1.4em'}}
            >
              {<FaPlus />}
            </IconContext.Provider>
          </div>
          <RatingsRubricSummarySquare 
            displayValue={calcAvgRating(filterByCategory(mockRatingsData, 'Fun'))}
            categoryName={'FUN'}
            backgroundColor={'white'}
          />
        </div>
        <div className='ratingsRubricEqualsSignContainer' style={styles.ratingsRubricEqualsSignContainer}>
          <IconContext.Provider
              value={{size: '1.5em'}}
          >
            {<TiEquals />}
          </IconContext.Provider>
        </div>
        <div className='fullRatingScoreContainer' style={styles.fullRatingScoreContainer}>
          <div className='fullRatingScoreInnerBox' style={styles.fullRatingScoreInnerBox}>
            <h2 className='fullRatingText' style={styles.fullRatingText}>
              {calcAvgRating(mockRatingsData)}
            </h2>
          </div>

        </div>
      </div>
    </div>
  )
}

export default RatingsRubricController