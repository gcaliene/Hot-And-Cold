import React from 'react';
import GuessButton from './guess-button';
import GuessCounterDisplay from './guess-counter-display';
import GuessInput from './guess-input';
import HistoryDisplay from './history-display';
import HotColdDisplay from './hot-cold-display';
import './css/game.css'


export default function Game (props) {
    render() {
        return (
            <div className='game'>
                <HotColdDisplay />
                <GuessInput />
                <GuessButton />
                <GuessCounterDisplay />
                <HistoryDisplay />
                
            </div>
        )
    }

}