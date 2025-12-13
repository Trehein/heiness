import React from 'react'
import HighLowController from '../components/Widgets/ReviewWidgets/HighLow/HighLowController'
import KindsOfFunController from '../components/Widgets/ReviewWidgets/KindsOfFun/KindsOfFunController'
import ReplayabilityController from '../components/Widgets/ReviewWidgets/Replayability/ReplayabilityController'
import ScatterPlotController from '../components/Widgets/ReviewWidgets/ScatterPlot/ScatterPlotController'
import RatingsRubricController from '../components/Widgets/ReviewWidgets/RatingsRubric/RatingsRubricController'
import FileUploadController from '../components/FileUpload/FileUploadController'

const WidgetScreen: React.FC = () => {

  return (
    <div>
      <h1>WidgetScreen</h1>
      <div style={{display: 'flex', width: '100%', height: '80vh', flexWrap: 'wrap'}}>
        <div className='highLowContainer' style={{width: '25%', height: '30%', border: '1px solid blue'}}>
          <HighLowController />
        </div>
        <div className='kindsOfFunContainer' style={{width: '25%', height: '30%', border: '1px solid green'}}>
          <KindsOfFunController />
        </div>
        <div className='replayabilityContainer' style={{width: '25%', height: '30%', border: '1px solid pink'}}>
          <ReplayabilityController />
        </div>
        <div className='scatterPlotContainer' style={{width: '25%', height: '30%', border: '1px solid purple'}}>
          <ScatterPlotController />
        </div>
        <div className='ratingsRubricContainer' style={{width: '25%', height: '30%', border: '1px solid gold'}}>
          <RatingsRubricController />
        </div>
        <div className='fileUploadContainer' style={{width: '25%', height: '30%', border: '1px solid aqua'}}>
          <FileUploadController />
        </div>
      </div>
    </div>
  )
}

export default WidgetScreen