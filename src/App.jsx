import { useState } from 'react'
import './App.css'
import Board from './cumponents/board'
import Dashboard from './cumponents/Dashboard'
import Head from './cumponents/Head'
import Timer from './cumponents/Timer'

function App() {

  return (
    <><div className='main-div'>
      <Head></Head>
      <div className='dateles'>
        <Dashboard logo={'public/bomb.jpeg'} head={'Bombs Remaining'} content={bomb} />
        <Dashboard logo={'public/timer.jpeg'} head={'Time Remaining'} content={<Timer />} />
        <Dashboard logo={'public/panel.jpeg'} head={'Board Size'} content={'10 X 8'} />
      </div>
      <Board />
      </div>
    </>
      )
}
      export default App
