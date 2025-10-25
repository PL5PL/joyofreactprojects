import React from 'react';
import { range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

function Guess({guesses}) {


  function blankRow() {
    return (range(5).map((colIndex) => (
            <span class="cell"></span>
          )) )
  }

  function guessRow(guess){
    const guessArray = [...guess];

    return(
      guessArray.map((letter, colIndex) => (
        <span class="cell" key={colIndex}>{letter}</span>
      )) )
    
  }
  return (
  <div className="guess-results">
    {
      range(NUM_OF_GUESSES_ALLOWED).map((rowIndex) => (
        <p className="guess" key={rowIndex}>
          { blankRow()
          }
        </p>
      ))
    }
  </div>
  );
}

export default Guess;
