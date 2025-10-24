import React from 'react';

function GuessInput({guess, setGuess, guessesList, setGuessesList}) {
  

  function handleSubmit(event) {
        event.preventDefault();
        
        /* Log the entered value */
        console.info( {guess})
        
        /* Update Guesses List */
        const nextGuesses = [...guessesList];
        nextGuesses.push(guess);
        setGuessesList(nextGuesses)
        
        /* Resets the input */
        setGuess('');
  }

  function handleGuess(event) {
          const nextGuess = event.target.value.toUpperCase();
          setGuess(nextGuess);
  }

  return    ( 
  <form
      className="guess-input-wrapper"
      onSubmit={handleSubmit}
    >
      <label htmlFor="guess-input">Enter Guess</label>
      <input 
        id="guess-input" 
        type="text"
        value={guess} 
        onChange={handleGuess}

        /* from Solution */ 
        pattern="[a-zA-Z]{5}"
        title="5 Letter Word"
        />
    </form>
    );
}

export default GuessInput;
