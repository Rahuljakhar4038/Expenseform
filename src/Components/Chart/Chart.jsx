import React from 'react'
import './Chart.css'
import ChartBar from './ChartBar'

const Chart = (props) => {

  const dataPointValue = props.expensesMonth.map(dataPoint => dataPoint.value);
  const totalMaximum = Math.max(...dataPointValue);
  // console.log(totalMaximum);
  return (
    <div className='chart'>
      {props.expensesMonth.map((element, index) => (
        <ChartBar  element={element} key={index} maxValue={totalMaximum}></ChartBar>
      ))}
    </div>
  )
}

export default Chart
