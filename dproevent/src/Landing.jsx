import React from 'react'

import FlipClockCountdown from '@leenguyen/react-flip-clock-countdown';
import '@leenguyen/react-flip-clock-countdown/dist/index.css';


export default function Landing() {
  return (
    <FlipClockCountdown
    to={new Date().getTime() + 24 * 3600 * 1000 + 5000}
    labels={['DAYS', 'HOURS', 'MINUTES', 'SECONDS']}
    labelStyle={{ fontSize: 10, fontWeight: 500, textTransform: 'uppercase' }}
    digitBlockStyle={{ width: 40, height: 60, fontSize: 30 }}
    dividerStyle={{ color: 'white', height: 1 }}
    separatorStyle={{ color: 'red', size: '6px' }}
    duration={0.5}
  />
  )
}
