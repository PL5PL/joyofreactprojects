import React from 'react';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

function Banner({guesses, answer}) {

  let status = "in_Progress";
  let total_guesses = 0;

  let classname="sad banner";
  let phrase = `Sorry, the correct answer is <strong>${answer}</strong>`;
  

  if (guesses.length === 0) {
    console.log("empty")
  } else if (guesses.length > 0 && guesses.length < NUM_OF_GUESSES_ALLOWED){
    const lastItem = guesses.slice(-1)[0];
    if (lastItem === answer) {
      status = "won";
      total_guesses = guesses.indexOf(lastItem) + 1;
    }
  } else {

    const lastItem = guesses.slice(-1)[0];
    if (lastItem === answer) {
      status = "won";
      total_guesses = guesses.indexOf(lastItem) + 1;
    } else {
      status = "lost"
      total_guesses = 6
    }
  }

  if (status === "won") {
    classname = "happy banner";
    phrase = `<strong>Congratulations!</strong> Got it in <strong>${total_guesses} guesses</strong>.`
  }

  return ( (status !== "in_Progress") &&
  <div className={classname}>
    {phrase}
  </div>);
}

export default Banner;
