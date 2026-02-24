import React, { useContext, useState } from 'react'
import { AppContext } from '../context/AppPrivider';

function Square({ classname, funcs }) {
    const [pressed, setPressed] = useState(false);
    const [setCountWin, setCountWrong, setFlag] = funcs;
    const { setCounter, setFlags } = useContext( AppContext)
    

    const newClassname = pressed ? (classname === 'bomb-div' ? 'bomb-clicked' : 'grid-clicked') : null

    function handleClick() {
        if (classname === 'bomb-div') {
            setCountWin(prev => {
                if (prev === 4) {
                    setFlag(true)
                    setCounter(prev => prev + 100)
                    setFlags(true)
                    
                };
                return prev + 1
            });
        }
        else setCountWrong(prev => prev + 1);
        setPressed(true)
    }


    return (
        <div className={newClassname ? newClassname : classname} onClick={(e) => handleClick(e)}></div>
    )
}

export default Square