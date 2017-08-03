import React, { Component } from 'react';
import Card from './card';

export default class GameBoard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cardsChosen: [],
            cards: [],
            idxChosen: [],
            matchesFound: []
        }
    }
    componentWillMount() {
        this.shuffleCards();
    }
    createCards() {
        /*var cards = [];
        var cards2 = [];
        for (var i = 0; i < 8; i++) {
            ((n) => {
                cards.push(<Card cardId={n} flipped={false} setCard={(evt) => {this.setCard(evt)}} cardImage={"http://thecatapi.com/api/images/get.php?api_key=MTAx&id=b0" + n}/>)    
            })(i)
        }
        cards2 = cards;
        */
    }
    shuffleCards() {
        var cards = [1,2,3,4,5,6,7,8,1,2,3,4,5,6,7,8];
        var currentIndex = cards.length, temporaryValue, randomIndex;
        while (0 !== currentIndex) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            temporaryValue = cards[currentIndex];
            cards[currentIndex] = cards[randomIndex];
            cards[randomIndex] = temporaryValue;
        }
        this.setState({
            cards: cards
        });
    }
    fmtCards() {
        var cards = this.state.cards.map((n, idx) => {
            return <Card key={idx} idx={idx} cardId={n} flipped={(this.state.idxChosen.indexOf(idx) !== -1)} setCard={(a, b) => {this.setCard(a, b)}} cardImage={"http://thecatapi.com/api/images/get.php?api_key=MTAx&id=b0" + n} />
        });
        return cards;
    }
    flipAllBack() {
        this.setState({
            idxChosen: [] 
        });
    }
    resetGame() {
        this.setState({
            idxChosen: []
        });
        this.props.reset();
        this.shuffleCards();
    }
    setCard(cardId, cardIdx) {
        if(this.state.cardsChosen.length < 1) {
            var arr = this.state.cardsChosen;
            var idx = this.state.idxChosen;
            arr.push(cardId);
            idx.push(cardIdx);
            this.setState({
                cardsChosen: arr,
                idxChosen: idx
            });
        } else {
            
            if(this.state.cardsChosen[0] === cardId) {
                console.log(this.state.cardsChosen[0], cardId)
                var matches = this.state.matchesFound;
                matches.concat([this.state.idxChosen[0], cardIdx]);
                this.setState({
                   matchesFound: matches 
                });
                this.props.turnEnd(true);
            } else {
                this.props.turnEnd(false);
            }
            setTimeout(() => {this.flipAllBack()}, 3000);
            var idx = this.state.idxChosen;
            idx.push(cardIdx);
            this.setState({
                cardsChosen: [],
                idxChosen: idx
            });
        }
    }
    render() {
        return (
            <div className='cardsWrapper'>
                {this.fmtCards()}
            </div>
        );
    }
}