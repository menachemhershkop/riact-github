import { useContext, useEffect } from 'react'
import { useState } from 'react'
import { createBoard } from '../utils/createBoard.js'
import Square from './square.jsx'
import { AppContext } from '../context/AppPrivider'


export default function Board() {
    const [square, setSquare] = useState([])
    const [countWin, setCountWin] = useState(0)
    const [countWrong, setCountWrong] = useState(0)
    const { counter , setCounter, flags, setFlagsTime, flagsTime} = useContext(AppContext)
    const [flag, setFlag] = useState(false)

    useEffect(() => {
        if (counter > 0 && flag && flagsTime === false) alert(`you found all the bombs with ${countWrong} wrong clicked`); else if (counter > 0 && flag === false && flags) alert('The time passsed you lose!');
        console.log(flagsTime);
        
        const squares = createBoard();
        setSquare(squares)
        setCountWin(0)
        setFlag(false)
    }, [counter])

    function restartGame() {

        setCounter(prev => prev + 100)
        setFlagsTime(true)

    }

  return (
    <>

    <div className='grid-main'>
        {square && square.map((obj, index) => {
            console.log(index + counter);
            return <Square key={index + counter} classname={obj === 'bomb' ? 'bomb-div' : 'grid-div'} funcs={[setCountWin, setCountWrong, setFlag]}></Square>
        })}
    </div>
    <button className='button-restart' onClick={restartGame}>Restart Game</button>
    </>
  )
}