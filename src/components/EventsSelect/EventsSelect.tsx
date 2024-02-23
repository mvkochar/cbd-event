import React from 'react'
import './EventsSelect.css'

type EventsSelectProps = {
    title: string
} 

const EventsSelect = ({title}:EventsSelectProps) => {
  return (
    <div className='events-select-wr d-f jc-sb align-center'>
        <div className='events-select-title'>{title}</div>
        <div className='square-wr'>
            <div className='square-inner'></div>
        </div>
    </div>
  )
}

export default EventsSelect