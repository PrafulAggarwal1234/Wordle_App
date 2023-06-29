import React from "react";
import Row from "./Row";
export default function Grid({guesses,turn,currentGuess}){
    return(
        <div>
        {guesses.map((guess,i) => {
            if(i===turn) return <Row key={i} currentGuess={currentGuess}/>
            else return <Row key={i} guess={guess}/>
        })}
        </div>
    )
}