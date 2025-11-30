import React from 'react'
import HighLowController from '../components/Widgets/ReviewWidgets/HighLow/HighLowController'
import KindsOfFunController from '../components/Widgets/ReviewWidgets/KindsOfFun/KindsOfFunController'

const WidgetScreen: React.FC = () => {

  return (
    <div>
      <h1>WidgetScreen</h1>
      <div style={{display: 'flex', width: '100%', height: '80vh'}}>
        <div className='highLowContainer' style={{width: '25%', height: '30%', border: '1px solid blue'}}>
          <HighLowController />
        </div>
        <div className='kindsOfFunContainer' style={{width: '25%', height: '30%', border: '1px solid green'}}>
          <KindsOfFunController />
        </div>
      </div>
    </div>
  )
}

export default WidgetScreen