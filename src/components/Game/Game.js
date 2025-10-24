import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";


import GuessList from "../GuessList";
import GuessInput from '../GuessInput';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guess, setGuess] = React.useState("");
  const [guessesList, setGuessesList] = React.useState([]);

  return (<>
    
    <GuessList 
      guessesList={guessesList}
      key={Math.random()}
    />
    <GuessInput 
      guess={guess}
      setGuess={setGuess}
      guessesList={guessesList}
      setGuessesList={setGuessesList}
    />
  </>
  )
}

export default Game;
