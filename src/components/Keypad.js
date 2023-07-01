import React, { useEffect, useState } from 'react'

export default function Keypad({usedKeys,handleClick}){
    const handleClicktemp = (l) =>{
        console.log("clciked",l);
    }
    const [letters,setLetters]=useState(null);
    useEffect(()=>{
            var alphabet = Array.from({ length: 26 }, (_, i) => String.fromCharCode(97 + i));
            setLetters(alphabet)

    },[]);

    return (
        <div className='keypad'>
            {letters && letters.map((l) =>{
                return(
                    <div key={l} className={usedKeys[l]} onClick={(()=>{handleClick(l)})}>
                        {l}
                    </div>
                )
            })}
             <div className='enter' onClick={(()=>{handleClick("Enter")})}>
             Enter
            </div>
             <div  className='enter' onClick={(()=>{handleClick("Backspace")})}>
             ⌫
            </div>
        </div>
    )
}