import React from 'react';

//import './guess-list.css';

export default function GuessList(props) {
    const guesses = props.guesses.map((wrongGuess, index) => (
        <li key={index}>
            {wrongGuess}
        </li>
    ));

    return (
        <ul id="guessList" className="guessBox clearfix">
            {guesses}
        </ul>
    );
};