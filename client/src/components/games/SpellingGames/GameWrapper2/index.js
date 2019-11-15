import React, { useState } from 'react';
import styled from "styled-components";
import StatsBar from "../component/StatsBar"
import QuestionBar from "../component/QuestionBar"
import AnswerBar from "../component/AnswerBar"
import WinnerWindow from "../component/WinnerWindow"
import LoserWindow from "../component/LoserWindow"
import QAData from "../data/questions"

let visible = true

let display = () => {
    if (visible) {
        display = "block"
        return display
    } else {
        display = "none"
        return display
    }
}
let display1 = () => {
    if (visible) {
        display = "none"
        return display
    } else {
        display = "block"
        return display
    }
}
const GameBox = styled.section`
display:${display};
`
const Results = styled.section`
display:${display1};
`


const GameWrapper2 = (props) => {

    const [data, setData] = useState({
        qA: QAData[1],
        score: 0,
        lives: 3,
        round: 1,
        guess: "",
        x: 0,
        // y: 1,
        qX: "",
        level: 1,
        question:
            QAData[1].game1.q1,
        answer: QAData[1].game1.a1,

        toggle: false

    })
    const { guess, qA, score, answer, question, lives, round, x, qX, level } = data;


    const handleInputChange = event => {
        setData({
            ...data,
            guess: event.target.value
        })
    }

    const handleFormSubmit = event => {
        event.preventDefault()
        alert(guess)

        if (guess.toLowerCase().trim() === answer[x].toLowerCase() && round === 10) {
            alert("winner")
        } else if (guess.toLowerCase().trim() === answer[x].toLowerCase()) {
            let currentScore = score
            currentScore++
            let currentRound = round
            currentRound++
            let currentX = x
            currentX++
            setData({
                ...data,
                score: currentScore,
                round: currentRound,
                x: currentX
            })
            alert("correct")
        } else {
            alert("Wrong" + answer[x])
            let currentRound = round
            currentRound++
            let currentLives = lives
            currentLives--
            let currentX = x
            currentX++
            setData({
                ...data,
                lives: currentLives,
                round: currentRound,
                x: currentX
            })
        } if (lives === 1) {
            alert("You lose")
            // useEffect.playAgain()
        }

    }
    const playAgain = event => {
        event.preventDefault()
        let currentRound = round
        currentRound = 1
        let currentLives = lives
        currentLives = 3
        let currentX = x
        currentX = 0
        let currentScore = score
        currentScore = 0
        setData({
            ...data,
            lives: currentLives,
            round: currentRound,
            x: currentX,
            score: currentScore,
            toggle: true,
        })
    }


    return (
        <div>
            <GameBox>

                <StatsBar
                    round={round}
                    lives={lives}
                    score={score}
                />
                <QuestionBar
                    question={question[x]}
                />
                <h3>Fill In The Blank!</h3>
                <p>Fill In The Missing Letters!</p>
                <AnswerBar
                    handleInputChange={handleInputChange}
                    handleFormSubmit={handleFormSubmit}
                />
            </GameBox>
            <Results>
                <WinnerWindow
                    score={score}
                />
                <LoserWindow />
            </Results>
        </div>
    )

}
export default GameWrapper2
