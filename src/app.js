import React, { Component } from 'react';
import GameBoard from './gameboard';
import ScoreBoard from './scoreboard';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            player1: 0,
            player2: 0,
            turn: 'player1',
        };
    }
    turnEnd(result) {
        if(result === true) {
            this.setState({
                [this.state.turn]: this.state[this.state.turn] += 1,
                turn: this.state.turn === 'player1' ? 'player2' : 'player1'
            });
        } else {
            this.setState({
                turn: this.state.turn === 'player1' ? 'player2' : 'player1'
            });
        }
    }
    startGame() {
       this.setState({
           player1: 0,
           player2: 0,
           turn: 'player1',
       }); 
    }
    render() {
        return (
            <div className='board'>
                <GameBoard turnEnd={(a) => {this.turnEnd(a)}} player={this.state.turn} reset={() => {this.startGame()}} />
                <ScoreBoard 
                    turn={this.state.turn} 
                    player1={this.state.player1} 
                    player2={this.state.player2}
                />
            </div>
        );
    }
}