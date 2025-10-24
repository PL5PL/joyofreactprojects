import React from 'react';

function GuessList({guesses}) {
  console.log(guesses)
  return (
  <div className="guess-results">
    {
      guesses.map( (guess, index) => (
        <p className="guess" key={index}>
          {guess}
        </p>
      ))
    }
  </div>);
}

export default GuessList;
