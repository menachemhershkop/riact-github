import { useEffect } from 'react'
import { useState } from 'react'
import { createBoard } from '../utils/createBoard.js'


export default function Board() {
    const [square, setSquare] = useState(createBoard())
    const [countWin, setCountWin] = useState(0)
    const [countWrong, setCountWrong] = useState(0)

    // useEffect(() => {
    //     console.log(square)
    // }, [])

    function click(e) {

        if (e.target.className === 'bomb-div') {

            e.target.className = 'bomb-clicked'
            setCountWin(prev => prev + 1)
        } else if (e.target.className === 'grid-div') {

            e.target.className = 'grid-clicked'
            setCountWrong(prev => prev + 1)

        }
        if (countWin === 5) {
                alert(`you found all the bombs with ${countWrong} wrong clicked`)
                setSquare(createBoard())
            }

    }

    
  return (
    <>
    <div className='grid-main'>
        {square.map((obj, index) => {
            console.log(square);
            
            return <div key={index} className={obj === 'bomb' ? 'bomb-div' : 'grid-div'} onClick={(e) => click(e)}></div>
        })}
    </div>
    </>
  )
}