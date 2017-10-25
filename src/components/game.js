import React from 'react';
import GuessButton from './guess-button';
//import GuessCounterDisplay from './guess-counter-display';
import GuessInput from './guess-input';
import GuessSection from './guess-section';
import HotColdDisplay from './hot-cold-display';
import GuessCount from './guess-count';
import GuessList from './guess-list';
//import NavigationBar from './navigation-bar';
import './css/game.css'


export default class Game extends React.Component {
        state = {
            guesses: [],
            feedback: 'Make your guess!',
            correctAnswer: Math.floor(Math.random() * 100) + 1,
        };
   


    handleNewGame = () => {
        console.log("new game works")
        this.setState({
            guesses: [],
            feedback: 'Make your guess!',
            correctAnswer: Math.floor(Math.random() * 100) + 1,
            
        });
    }

    guess = (guess) => {
        guess = parseInt(guess, 10); // step is necessary because the value will be entered as a string
        if (isNaN(guess)) {
            this.setState({
                feedback: 'Please enter a valid number'
            });
            return;
        }

        const difference = Math.abs(guess - this.state.correctAnswer);

        let feedback;
        if (difference >= 50) {
            feedback = 'You\'re Ice Cold...';
        }
        else if (difference >= 30) {
            feedback = 'You\'re Cold...';
        }
        else if (difference >= 10) {
            feedback = 'You\'re Warm';
        }
        else if (difference >= 5) {
            feedback = 'You are getting warmer';
        }
        else if (difference >= 3) {
            feedback = 'you are almost hot!';
        }
        else if (difference >= 1) {
            feedback = 'You\'re Hot!';
        }
        else {
            feedback = 'You got it!';
        }

        this.setState({
            feedback,
            guesses: [...this.state.guesses, guess]
        });
    }

    render() {
        return (
            <div>
                <HotColdDisplay onHandleNewGame={() => this.handleNewGame()}/>
                <GuessSection 
                    feedback={this.state.feedback}
                    onGuess={(guess) => this.guess(guess)} 
                />
                
                <GuessCount count={this.state.guesses.length} />
                
                <GuessList guesses={this.state.guesses} /> 
            </div>
        );
    }
}
