import React, {Component} from 'react';

import './css/what-button.css';

export default class NavButtons extends Component {
    onHandleNewGame(event) {
        event.preventDefault();
        if (this.props.onHandleNewGame) {
            this.props.onHandleNewGame();
        }
    }

    onInfo(event) {
        event.preventDefault();
        if (this.props.onInfo) {
            this.props.onInfo();
        }
    }

    render() {
        return (
            <nav>
                <ul className="clearfix">
                    <li>
                        <button className="what" onClick={e => this.onInfo(e)}>
                            What?
                        </button>
                    </li>
                    <li>
                        <button className="new" onClick={e => this.onHandleNewGame(e)}>
                            + New Game
                        </button>
                    </li>
                </ul>
            </nav>
        );
    }
} 