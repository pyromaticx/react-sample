import React, { Component } from 'react';

export default class ScoreBoard extends Component {
    constructor(props) {
        super(props);
        this.state = {
           
        }
    }
    render() {
        return (
            <div className='scoreboardWrapper'>
                <h3 style={{marginBottom: '30px'}}>{this.props.turn + "'s turn"}</h3>
                <div className='playerScore'>
                    <h3>Player 1</h3>
                    <p>{this.props.player1}</p>
                </div>
                <div className='playerScore'>
                    <h3>Player 2</h3>
                    <p>{this.props.player2}</p>
                </div>
            </div>
        );
    }
}