import './App.css'
import Board from './cumponents/board'
import Head from './cumponents/Head'

function App() {
  
  return (
    <>
    <Head></Head>
    <div className='dateles'>
    <Dashboard logo={'public/bomb.jpeg'} head={'Bombs Remaining'} content={5}/>
    <Dashboard logo={'public/timer.jpeg'} head={'Time Remaining'} content={5}/>
    <Dashboard logo={'public/panel.jpeg'} head={'Board Size'} content={5}/>
    </div>
    </>
  )
}

export default App
