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
                        <a className="what" href="#" onClick={e => this.onInfo(e)}>
                            What?
                        </a>
                    </li>
                    <li>
                        <a className="new" href="#" onClick={e => this.onHandleNewGame(e)}>
                            + New Game
                        </a>
                    </li>
                </ul>
            </nav>
        );
    }
} 