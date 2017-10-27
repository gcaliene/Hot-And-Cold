import React from 'react';  
import './css/guess-count.css';


const GuessCount = (props) => {


        return(
            <div >
                <p id="guess-count">{props.count}</p>
            </div>
        )
    
}

export default GuessCount