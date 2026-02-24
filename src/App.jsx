import { useState } from 'react'
import './App.css'
import Board from './cumponents/board'
import Dashboard from './cumponents/Dashboard'
import Head from './cumponents/Head'
import Timer from './cumponents/Timer'

function App() {
  const [bomb, setBomb] = useState(5)
  const [timer, setTimer] = useState(150);
    const [timeInterval, setTimeInterval] = useState(null);
    const startTimer = () =>{
        setTimeInterval(setInterval(()=>{
            setTimer((prev) => prev-1);
        }, 1000)
    )}
    const pauseTimer=()=>{
        clearInterval(timeInterval);
    };
    const resetTimer = ()=>{
        setTimer(0)
        clearInterval(timeInterval)
    }
    if (timer ==0){
        pauseTimer()
    }
  
  return (
    <>
    <Head></Head>
    <div className='dateles'>
    <Dashboard logo={'public/bomb.jpeg'} head={'Bombs Remaining'} content={bomb}/>
    <Dashboard logo={'public/timer.jpeg'} head={'Time Remaining'} content={timer}/>
    <Dashboard logo={'public/panel.jpeg'} head={'Board Size'} content={'10 X 8'}/>
    </div>
    <Timer timer={timer} startTimer={startTimer} pauseTimer={pauseTimer} resetTimer={resetTimer}></Timer>
    <div className='info'>
      Locate and neutralize all bombs before runs out.
    </div>
    </>
  )
}

export default App
