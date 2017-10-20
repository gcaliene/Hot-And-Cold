import React from 'react';
import NewGameButton from './new-game-button';
import WhatButton from './what-button';
import './css/navigation-bar.css'

export default function NavigationBar(props) {
    return (
        <div className='navigation-bar'>    
            <NewGameButton />
            <WhatButton />
        </div>
    );
}