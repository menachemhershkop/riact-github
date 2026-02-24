import React, { useEffect, useState } from 'react'

function Timer() {

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
  }, [minutes, seconds]);

  return (
<> {minutes}:{seconds}</>
  )
}

export default Timer

