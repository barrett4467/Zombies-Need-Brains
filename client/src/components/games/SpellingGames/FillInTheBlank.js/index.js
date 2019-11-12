import React, { Component } from "react"
const wordBank = ["Nation", "Defend", "Wisdom", "Globe", "Habit", "Revive", "Solution", "Contain", "Origin", "Crew"];
let x = 0


class SpellTheWord extends Component {

    state = {
        guess: "",
        score: 0,
        lives: 3,
        round: 1,
        x: 0,
        word: wordBank[x],
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
            word: wordBank[x += 1],
            round: this.state.round + 1
        })
        console.log(x)
    }
    winner = () => {
        alert("You win")
    }


    playAgain = () => {
        const play_again = prompt("Play Again?")
        if (play_again) {
            this.setState({
                word: wordBank[x = 0],
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
        if (this.state.guess === this.state.word && this.state.round === 10) {
            this.winner()
        }
        else if (this.state.guess === this.state.word) {
            this.increaseScore()
            console.log("correct")
        } else {
            alert("Wrong")
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
                <h3>Correct {this.state.score} /10</h3>
                <h3>Lives {this.state.lives}</h3>
                <h3>Round{this.state.round}</h3>
                <div className="puzzleBox">
                    <h1>{this.state.word}</h1>

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
            </>
        )
    }
}
export default SpellTheWord;

