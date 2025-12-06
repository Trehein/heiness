import React from 'react'
import mockgameData from '../../../../assets/mockGameData/mockGameData.json'
import { CartesianGrid, Legend, Scatter, ScatterChart, Tooltip, XAxis, YAxis } from 'recharts'

const scatterPlotControllerStyles = () => {
  return {
    scatterPlotContainer: {
      width: '100%',
      height: '100%',
      display: 'flex',
      flexDirection: 'column' as 'column',
      overflow: 'auto'
    },
    scatterPlotHeaderText: {
      fontFamily: 'Righteous', 
      fontSize: '1.5em',
      margin: '0px',
      padding: '0px',
      borderTop: '1px solid black',
      borderBottom: '1px solid black'
    },
    scatterPlotHeaderContainer: {
      display: 'flex', 
      justifyContent: 'center'
    },
    scatterPlotDisplayContainer: {

    }
  }
}

const ScatterPlotController: React.FC = () => {
  const styles = scatterPlotControllerStyles()

  return (
    <div className='scatterPlotContainer' style={styles.scatterPlotContainer}>
      <div className='scatterPlotHeaderContainer' style={styles.scatterPlotHeaderContainer}>
        <h2 className='scatterPlotHeaderText' style={styles.scatterPlotHeaderText}>
          Game VS X
        </h2>
      </div>
      <ScatterChart
        style={{ width: '100%', maxWidth: '700px', maxHeight: '70vh', aspectRatio: 1.618 }}
        responsive
        margin={{
          top: 20,
          right: 20,
          bottom: 10,
          left: 10,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="Purchase Date" type="category" name="Purchase Date" />
        <YAxis dataKey="Price" type="number" name="Price" unit="$" width="auto" />
        <Tooltip cursor={{ strokeDasharray: '3 3' }} />
        {/* <Legend /> */}
        <Scatter name="A school" data={mockgameData} fill="#8884d8" isAnimationActive={true} />
      </ScatterChart>
    </div>
  )
}

export default ScatterPlotController