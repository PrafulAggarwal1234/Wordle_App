import { useEffect, useState } from "react";
import Wordle from "./components/Wordle";
function App() {
  const [solution,setSolution] =useState(null);
  useEffect(()=>{
    fetch('https://api.datamuse.com/words?sp=?????')
    .then(res => res.json())
    .then(json=>{
      let index=Math.floor(Math.random()*json.length);
      setSolution(json[index].word);
     //we need to select a random element from it, hence we genrate a random int from 0 & n
    })
  },[setSolution])
  return (
    <div className="App">
      <h1>Wordle</h1>
      {/* to put somethin synamic we need to write it inside {} */}
      {solution && <Wordle solution={solution}/>}
    </div>
  );
}

export default App;
