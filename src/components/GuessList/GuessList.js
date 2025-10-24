import React from 'react';

function GuessList({guessesList}) {
  console.log(guessesList)
  return (
  <div className="guess-results">
    {
      guessesList.map( guess => (
        <p className="guess" key={Math.random()}>
          {guess}
        </p>
      ))
    }
  </div>);
}

export default GuessList;
