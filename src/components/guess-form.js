import React from 'react';
import GuessButton from './guess-button';
//import './guess-form.css';

export default class GuessForm extends React.Component {
    onGuess(event) {
        event.preventDefault(); //prevents page refresh
        console.log('guess button worked')
        if (this.props.onGuess) { // if this is a true number then it will pass, if it is false then it will just clear input
            const value = this.input.value;
            this.props.onGuess(value);
        } 
            this.input.value = '';
    }

    render() {
        return (
            <form onSubmit={e => this.onGuess(e)}>
                <label htmlFor="userGuess">Enter your Guess</label>
                <input 
                    type="text" 
                    name="userGuess" 
                    id="userGuess"
                    className="text" 
                    maxLength="3" //can't be more than three characters
                    autoComplete="off" //not necessary but autocomplete is annoying
                    placeholder={Math.round(Math.random() * 100)} //this is nice to have
                    ref={input => this.input = input} //I'm not entirely sure what ref does
                    required
                />
                <GuessButton/>
            </form>
        );
    }
};