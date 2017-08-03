import React, { Component } from 'react';

export default class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {
            flip: false
        };
    }
    
    chooseCard() {
        this.props.setCard(this.props.cardId, this.props.idx);
        this.setState({
            flip: true
        })
        setTimeout(() => {
            this.setState({
                flip: false
            })
        }, 500)
    }
    render() {
        return (
            <div className={'card ' + (this.state.flip ? 'flip': 'unflip')} onClick={(evt) => {this.chooseCard()}}>
                <img src={this.props.flipped ? this.props.cardImage : '/React-icon.png'} width='80px' />
            </div>
        );
    }
}