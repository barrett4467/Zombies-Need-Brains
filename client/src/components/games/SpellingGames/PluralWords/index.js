import React, { Component } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, } from 'reactstrap';
import "./style.css";

const questionBank = ["Wolf", "Knife", "Child", "Mouse", "Goose", "Moose", "Witch", "Horse", "Candy", "Woman"];
const answerBank = ["Wolves", "Knives", "Children", "Mice", "Geese", "Moose", "Witches", "Horses", "Candies", "Women"]

let x = 0
let y = 0

class PluralWords extends Component {

    state = {
        guess: "",
        score: 0,
        lives: 3,
        round: 1,
        x: 0,
        y: 0,
        z: 0,
        question: questionBank[x],
        answer: answerBank[y],

    }

    increaseScore = () => {
        this.setState({
            score: this.state.score + 1
        });
    }
    lifeLost = () => {
        this.setState({
            lives: this.state.lives - 1
        })
    }
    newWord = () => {
        this.setState({
            question: questionBank[x += 1],
            answer: answerBank[y += 1],
            round: this.state.round + 1
        })
        console.log(x)
    }

    winner = () => {
        alert("You win")
    }
    // makeLives=()=>{
    //     for(let i=0;i<this.state.lives;i++){
    //     const lives =<img scr={"../../public/icons/brain-50.png"} alt="brain"/>

    //     }
    // }

playAgain = () => {
    const play_again = prompt("Play Again?")
    if (play_again) {
        this.setState({
            answer: answerBank[x = 0],
            question: questionBank[y = 0],
            score: 0,
            round: 0,
            lives: 3,
        })
    } else (
        alert("Cya later")
    )
}


handleChange = (event) => {
    this.setState({ guess: event.target.value });
}

handleSubmit = (event) => {
    event.preventDefault();
    console.log("click")
    this.newWord()
    if (this.state.guess === this.state.answer && this.state.round === 10) {
        this.winner()
    }
    else if (this.state.guess === this.state.answer) {
        this.increaseScore()
        console.log("correct")
    } else {
        alert("Wrong" + this.state.answer)
        this.lifeLost()
        if (this.state.lives === 1) {
            alert("You lose")
            this.playAgain()
        }
    }
    this.state.guess = ""
}
render() {
    return (
        <>
            <button>Start!</button>
            <div className="gameBox">
                <h3>Correct {this.state.score} /10</h3>
                <h3>Lives {this.state.lives}</h3>
                <h3>Round{this.state.round}</h3>
                <div className="puzzleBox">
                    <img src={`${process.env.PUBLIC_URL}/PluralWords/${this.state.answer}.png`} alt={this.state.word} />
                    <h1>{this.state.question}</h1>
                </div>
                <form
                    className="answerBox"
                    onSubmit={this.handleSubmit}
                >
                    <input
                        type="text"
                        name="guess"
                        value={this.state.guess}
                        onChange={this.handleChange}
                    />
                    <input
                        type="submit"
                        value="Submit"
                        name="submit"
                    />
                </form>
            </div>
        </>
    )
}
}

export default PluralWords;

