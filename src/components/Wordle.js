import React, { useEffect, useState } from "react";
import useWordle from "../hooks/useWordle";
import Grid from "./Grid";
import Keypad from "./Keypad";
import Model from "./Modal";
import Popup from "./Popup";

export default function Wordle({solution}){
    const {currentGuess,handleKeyup,guesses,isCorrect,turn,usedKeys,flag,setFlag,handleMouseClick} = useWordle(solution);
    const [showModel,setShowModel] = useState(false);
    const [showPopUp,setShowPopUp]=useState(false);
    const [modelFlag,setModalFlag]=useState(true);
    const handleClicktemp = (l) =>{
        console.log("clciked",l);
    }
    useEffect(()=>{
        window.addEventListener('keyup',handleKeyup);

        if(modelFlag && isCorrect){
            setTimeout(()=> setShowModel(true),2000);
            window.removeEventListener('keyup',handleKeyup);
        }
        if(modelFlag && turn>5){
            setTimeout(()=> setShowModel(true),2000);
            window.removeEventListener('keyup',handleKeyup);
        }
        if(flag){
            setTimeout(()=> setShowPopUp(true),200);
            window.removeEventListener('keyup',handleKeyup);
        }

        return () => window.removeEventListener('keyup',handleKeyup);
    },[handleKeyup,isCorrect,turn,flag,modelFlag]);
   
    return(
        <>
        <Grid guesses={guesses} currentGuess={currentGuess} turn={turn}/>
        <Keypad usedKeys={usedKeys} handleClick={handleMouseClick}/>
        {modelFlag && showModel &&<Model won={isCorrect} turn={turn} solution={solution} setModalFlag={setModalFlag}/>}
        {showPopUp && <Popup setIsOpen={setShowPopUp} setFlag={setFlag}/>}
        </>
    )
}