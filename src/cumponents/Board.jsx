import { useEffect } from 'react'
import { useState } from 'react'

export default function Board() {

    const [divs, setDivs] = useState([])

    useEffect(() => {

        function createBoard() {
            setDivs([])
            for (let i = 0; i < 80; i ++) {

                setDivs(prev => [...prev, i])
            }
            console.log(divs)
        }

        createBoard()

        

    }, [])

  return (
    <></>
  )
}
