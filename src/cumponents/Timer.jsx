import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/AppPrivider';

function Timer() {

  const { counter, setCounter, flags, setFlags, flagsTime, setFlagsTime } = useContext(AppContext) 
  const [minutes, setMinutes] = useState(2);
  const [seconds, setSeconds] = useState(3);
  const [time, setTime] = useState(true);

  useEffect(() => {
    if (time) {
      setTimeout(() => {
        setSeconds(seconds - 1);
      }, 1000);

      if (seconds === 0 && minutes >= 1) {
        setMinutes(minutes - 1);
        setSeconds(seconds + 59);
      } else if (seconds === 1 && minutes === 0) {
        setTime(false);
      }
    }
    if (minutes === 0 && seconds === 0) {
      console.log(counter);
      
      setCounter(prev => prev + 1000)
      setMinutes(2)
      setSeconds(3)
      setTime(true)
      setFlags(true)
    }
    if (flags) {

      setMinutes(2)
      setSeconds(3)
      setFlags(false)
    }

    if (flagsTime) {

      setMinutes(2)
      setSeconds(3)
      setFlagsTime(false)
    }
  }, [minutes, seconds]);

  return (
<> {minutes}:{seconds}</>
  )
}

export default Timer

