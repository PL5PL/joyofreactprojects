import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guess, setGuess] = React.useState("");

  return (
    <form
      className="guess-input-wrapper"
      onSubmit={(event) => {
        event.preventDefault();
        
        /* Log the entered value */
        console.info( {guess})
        /* Resets the input */
        setGuess('');
      }}
    >
      <label htmlFor="guess-input">Enter Guess</label>
      <input 
        id="guess-input" 
        type="text"
        value={guess}
        onChange={(event) => {
          setGuess(event.target.value.toUpperCase())
        }}

        /* from Solution */ 
        pattern="[a-zA-Z]{5}"
        title="5 Letter Word"
        />
    </form>
  );
}

export default Game;
