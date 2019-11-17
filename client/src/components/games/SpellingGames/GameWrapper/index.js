import React, { useState, } from 'react';
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
background:white;
padding:1em;
width:25%;
margin:auto;
text-align:center;
border:6px solid #29A506;
background:rgba(74, 18, 79,.75);
color:#CFD615
`
const Results = styled.section`
display:${display1};
`

const GameWrapper = (props) => {

    const [data, setData] = useState({
        qA: QAData[0],
        score: 0,
        lives: 3,
        round: 1,
        guess: "",
        x: 0,
        question: QAData[0].game1.q1,
        answer: QAData[0].game1.a1,
        image: QAData[0].game1.img1,
        passed: false,

    })
    const { guess, qA, score, answer, question, lives, round, x, passed,image } = data;

    const EndGame = () => {
        if (passed) {
            return <WinnerWindow
                score={score} />
        } else {
            return <LoserWindow
                playAgain={playAgain}
            />
        }
    }
    const playAgain = event => {
        event.preventDefault()
        visible = true
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
        })
    }
    const handleInputChange = event => {
        setData({
            ...data,
            guess: event.target.value
        })
    }

    const handleFormSubmit = event => {
        event.preventDefault()
        event.target.reset()
        if (guess.toLowerCase().trim() === answer[x].toLowerCase() && round === 10) {
            //   winner
            setData({
                ...data,
                passed: true
            })
            visible = false
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
                x: currentX,             
            })
        } else {
            alert("Wrong " + answer[x])
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
                x: currentX,              
            })
        } if (lives === 1) {
            alert("You lose")
            visible = false
        }        
    }

    return (
        <div>
            <GameBox>
                <StatsBar
                    round={round}
                    lives={lives}
                    score={score}
                />
                <h3>Spell The Word!</h3>
                <QuestionBar
                    question={question[x]}
                    image={image[x]}
                />
                <AnswerBar
                    handleInputChange={handleInputChange}
                    handleFormSubmit={handleFormSubmit}
                />
            </GameBox>
            <Results>
                <EndGame passed={true} />
            </Results>
        </div>
    )
}
export default GameWrapper
