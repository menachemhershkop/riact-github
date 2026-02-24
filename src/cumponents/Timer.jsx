import React, { useState } from 'react'

export default function Timer(props) {
    
  return (
    <div>
       
      <div className="btn-wrapper">
       
        <button onClick={props.startTimer}>Start</button>
       
        <button onClick={props.pauseTimer}>Pause</button>
    
        <button onClick={props.resetTimer}>Reset</button>
      </div>
    </div>
  )
}
