import React from 'react';

import NavButtons from './nav-buttons';
import Modal from './modal';

import './css/hot-cold-display.css';

export default class HotColdDisplay extends React.Component  {
    constructor(props) {
        super(props);
        this.state = {
            showInfoModal: false
        };
    }

    toggleInfoModal() {
        this.setState({
            showInfoModal: !this.state.showInfoModal
        });
    }
 
    render() {
        let modal;
        if (this.state.showInfoModal) {
            modal = <Modal onClose={() => this.toggleInfoModal()} />;
        }

        return (
            <header>
                <NavButtons onInfo={() => this.toggleInfoModal()}
                    onHandleNewGame={this.props.onHandleNewGame} />
                {modal}
                <h1 className="hot-or-cold-title">HOT or COLD</h1>
            </header>
        );
    }
};