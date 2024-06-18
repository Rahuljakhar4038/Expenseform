import React from 'react'
import './ChartBar.css'

const ChartBar = (props) => {
    

    let barFillHeight = "0%"

    if (props.maxValue > 0) {
        barFillHeight = Math.round((props.element.value / props.maxValue) * 100) + "%"
    }

    return (
        <div className='chart-bar' key={props.key}>
            <div className='chart-bar__inner'>
                <div className='chart-bar__fill' style={{ height: barFillHeight, backgroundColor: "red" }}>

                </div>
            </div>
            <div className=''>{props.element.label}</div>
        </div>
    )
}

export default ChartBar